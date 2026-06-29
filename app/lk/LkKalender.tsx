'use client'
import { useState } from 'react'

type Termin = {
  id: string
  schueler_name: string
  fach?: string
  datum: string
  uhrzeit: string
  dauer_minuten?: number
  status: string
  notizen?: string
}

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

export default function LkKalender({ lehrkraftId, initialTermine }: { lehrkraftId: string; initialTermine: Termin[] }) {
  const [termine, setTermine] = useState(initialTermine)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ schueler_name: '', fach: '', datum: '', uhrzeit: '', dauer_minuten: '90' })

  const addTermin = async () => {
    if (!form.schueler_name || !form.datum || !form.uhrzeit) return
    setSaving(true)
    const res = await fetch('/api/lk/termin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, lehrkraft_id: lehrkraftId, dauer_minuten: parseInt(form.dauer_minuten, 10) }),
    })
    const data = await res.json()
    setSaving(false)
    if (data.ok && data.termin) {
      setTermine([data.termin, ...termine])
      setForm({ schueler_name: '', fach: '', datum: '', uhrzeit: '', dauer_minuten: '90' })
      setShowForm(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    setTermine(termine.map(t => t.id === id ? { ...t, status } : t))
    await fetch('/api/lk/termin', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
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
          <input placeholder="Name des Schülers" value={form.schueler_name}
            onChange={(e) => setForm({ ...form, schueler_name: e.target.value })} style={inputStyle} />
          <input placeholder="Fach (optional)" value={form.fach}
            onChange={(e) => setForm({ ...form, fach: e.target.value })} style={inputStyle} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="date" value={form.datum}
              onChange={(e) => setForm({ ...form, datum: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input type="time" value={form.uhrzeit}
              onChange={(e) => setForm({ ...form, uhrzeit: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <select value={form.dauer_minuten}
              onChange={(e) => setForm({ ...form, dauer_minuten: e.target.value })} style={{ ...inputStyle, flex: 1 }}>
              <option value="45">45 Min</option>
              <option value="90">90 Min</option>
              <option value="120">120 Min</option>
            </select>
          </div>
          <button onClick={addTermin} disabled={saving}
            style={{ backgroundColor: '#0F2A45', color: '#fff', padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
            {saving ? 'Speichert...' : 'Termin speichern'}
          </button>
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
                  <select
                    value={termin.status}
                    onChange={(e) => updateStatus(termin.id, e.target.value)}
                    style={{
                      padding: '6px 10px', borderRadius: '6px', border: `1.5px solid ${info.color}`,
                      color: info.color, fontWeight: '700', fontSize: '12px',
                      backgroundColor: '#fff', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                    }}>
                    {STATUS_OPTIONS.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
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
