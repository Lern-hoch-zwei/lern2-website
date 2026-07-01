'use client'
import { useState } from 'react'

type Termin = {
  id: string
  schueler_id?: string | null
  schueler_name: string
  fach?: string
  datum: string
  uhrzeit: string
  dauer_minuten?: number
  status: string
  notizen?: string
}

type Schueler = { id: string; vorname: string; nachname: string }

const STATUS_OPTIONS = [
  { value: 'geplant', label: 'Geplant', color: '#3A86FF' },
  { value: 'stattgefunden', label: 'Stattgefunden', color: '#1D9E75' },
  { value: 'abgesagt_lk', label: 'Abgesagt von LK', color: '#E24B4A' },
  { value: 'abgesagt_eltern_entschuldigt', label: 'Abgesagt (entschuldigt)', color: '#F2A623' },
  { value: 'abgesagt_eltern_unentschuldigt', label: 'Abgesagt (unentschuldigt)', color: '#B91C1C' },
  { value: 'verspaetet', label: 'Verspätet', color: '#9333EA' },
]

function statusInfo(status: string) {
  return STATUS_OPTIONS.find(s => s.value === status) || STATUS_OPTIONS[0]
}

const inputStyle = { padding: '10px 12px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', fontFamily: "'Inter', sans-serif" }
const selectStyle = {
  ...inputStyle, padding: '10px 30px 10px 14px',
  appearance: 'none' as const, WebkitAppearance: 'none' as const, MozAppearance: 'none' as const,
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233A86FF' stroke-width='2.5'><path d='M6 9l6 6 6-6'/></svg>")`,
  backgroundRepeat: 'no-repeat' as const, backgroundPosition: 'right 10px center', backgroundSize: '12px',
}

export default function LkKalender({ lehrkraftId, initialTermine, zugewieseneSchueler }: { lehrkraftId: string; initialTermine: Termin[]; zugewieseneSchueler: Schueler[] }) {
  const [termine, setTermine] = useState(initialTermine)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [form, setForm] = useState({ schueler_id: '', fach: '', datum: '', uhrzeit: '', dauer_minuten: '90' })
  const [statusError, setStatusError] = useState<string | null>(null)

  const addTermin = async () => {
    const gewaehlterSchueler = zugewieseneSchueler.find(s => s.id === form.schueler_id)
    if (!gewaehlterSchueler || !form.datum || !form.uhrzeit) return
    setSaving(true)
    setStatusError(null)
    try {
      const res = await fetch('/api/lk/termin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          lehrkraft_id: lehrkraftId,
          schueler_name: `${gewaehlterSchueler.vorname} ${gewaehlterSchueler.nachname}`.trim(),
          dauer_minuten: parseInt(form.dauer_minuten, 10),
        }),
      })
      const data = await res.json()
      setSaving(false)
      if (data.ok && data.termin) {
        setTermine([data.termin, ...termine])
        setForm({ schueler_id: '', fach: '', datum: '', uhrzeit: '', dauer_minuten: '90' })
        setShowForm(false)
      } else if (data.error === 'schueler_nicht_zugewiesen') {
        setStatusError('Dieser Schüler ist dir nicht zugewiesen. Bitte die Admin-Verwaltung kontaktieren.')
      } else {
        setStatusError('Termin konnte nicht gespeichert werden. Bitte erneut versuchen.')
      }
    } catch {
      setSaving(false)
      setStatusError('Verbindungsfehler. Termin wurde nicht gespeichert.')
    }
  }

  const updateStatus = async (id: string, status: string) => {
    const previous = termine.find(t => t.id === id)?.status
    setTermine(termine.map(t => t.id === id ? { ...t, status } : t))
    setStatusError(null)
    try {
      const res = await fetch('/api/lk/termin', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      const data = await res.json()
      if (!data.ok) {
        setTermine(termine.map(t => t.id === id ? { ...t, status: previous || t.status } : t))
        setStatusError('Status konnte nicht gespeichert werden. Bitte erneut versuchen.')
      }
    } catch {
      setTermine(termine.map(t => t.id === id ? { ...t, status: previous || t.status } : t))
      setStatusError('Verbindungsfehler. Status wurde nicht gespeichert.')
    }
  }

  const deleteTermin = async (id: string) => {
    if (!confirm('Diesen Termin wirklich löschen?')) return
    setDeletingId(id)
    setStatusError(null)
    try {
      const res = await fetch('/api/lk/termin', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      setDeletingId(null)
      if (data.ok) {
        setTermine(termine.filter(t => t.id !== id))
      } else {
        setStatusError('Termin konnte nicht gelöscht werden. Bitte erneut versuchen.')
      }
    } catch {
      setDeletingId(null)
      setStatusError('Verbindungsfehler. Termin wurde nicht gelöscht.')
    }
  }

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
        {showForm ? '✕ Abbrechen' : '+ Neuer Termin'}
      </button>

      {showForm && (
        <div style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {zugewieseneSchueler.length > 0 ? (
            <>
              <select value={form.schueler_id}
                onChange={(e) => setForm({ ...form, schueler_id: e.target.value })} style={selectStyle}>
                <option value="">Schüler wählen...</option>
                {zugewieseneSchueler.map(s => (
                  <option key={s.id} value={s.id}>{s.vorname} {s.nachname}</option>
                ))}
              </select>
              {!form.schueler_id && (
                <p style={{ fontSize: '12px', color: '#B91C1C', margin: 0 }}>Bitte einen Schüler auswählen.</p>
              )}
            </>
          ) : (
            <p style={{ fontSize: '13px', color: '#B91C1C', margin: 0, padding: '10px', backgroundColor: '#FFF5F5', borderRadius: '8px' }}>
              Dir sind noch keine Schüler zugewiesen. Bitte die Admin-Verwaltung kontaktieren.
            </p>
          )}
          <input placeholder="Fach (optional)" value={form.fach}
            onChange={(e) => setForm({ ...form, fach: e.target.value })} style={inputStyle} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="date" value={form.datum}
              onChange={(e) => setForm({ ...form, datum: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input type="time" value={form.uhrzeit}
              onChange={(e) => setForm({ ...form, uhrzeit: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <select value={form.dauer_minuten}
              onChange={(e) => setForm({ ...form, dauer_minuten: e.target.value })} style={{ ...selectStyle, flex: 1 }}>
              <option value="45">45 Min</option>
              <option value="90">90 Min</option>
              <option value="120">120 Min</option>
            </select>
          </div>
          <button onClick={addTermin} disabled={saving || !form.schueler_id || !form.datum || !form.uhrzeit}
            style={{
              backgroundColor: (!form.schueler_id || !form.datum || !form.uhrzeit) ? '#D6E4FF' : '#0F2A45',
              color: '#fff', padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px',
              cursor: (!form.schueler_id || !form.datum || !form.uhrzeit) ? 'not-allowed' : 'pointer', fontFamily: "'Inter', sans-serif",
            }}>
            {saving ? 'Speichert...' : 'Termin speichern'}
          </button>
        </div>
      )}

      {statusError && (
        <div style={{ marginBottom: '12px', padding: '10px 14px', backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '8px', fontSize: '13px', color: '#B91C1C' }}>
          {statusError}
        </div>
      )}

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
        {termine.length > 0 ? (
          termine.map((termin) => {
            const info = statusInfo(termin.status)
            return (
              <div key={termin.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{termin.schueler_name}</strong>
                    <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                      📅 {new Date(termin.datum).toLocaleDateString('de-DE')} · 🕐 {termin.uhrzeit?.slice(0, 5)} · {termin.dauer_minuten} Min
                      {termin.fach && <> · {termin.fach}</>}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <select
                      value={termin.status}
                      onChange={(e) => updateStatus(termin.id, e.target.value)}
                      style={{
                        padding: '8px 30px 8px 14px', borderRadius: '6px', border: `1.5px solid ${info.color}`,
                        color: info.color, fontWeight: '700', fontSize: '12px',
                        backgroundColor: '#fff', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                        appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(info.color)}' stroke-width='2.5'><path d='M6 9l6 6 6-6'/></svg>")`,
                        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '12px',
                      }}>
                      {STATUS_OPTIONS.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => deleteTermin(termin.id)}
                      disabled={deletingId === termin.id}
                      style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #FECACA', backgroundColor: '#FFF5F5', color: '#B91C1C', fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>Noch keine Termine eingetragen.</p>
        )}
      </div>
    </div>
  )
}
