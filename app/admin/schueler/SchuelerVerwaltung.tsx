'use client'
import { useState } from 'react'

type Schueler = {
  id: string
  vorname: string
  nachname: string
  klassenstufe?: string
  schule?: string
  status: string
  but_bewilligt?: boolean
  eltern_name?: string
  eltern_telefon?: string
}

type Lehrkraft = { id: string; name: string; email: string }
type Zuweisung = { id: string; lehrkraft_id: string; schueler_id: string }

const inputStyle = { padding: '10px 12px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', fontFamily: "'Inter', sans-serif" }
const selectStyle = { ...inputStyle, backgroundColor: '#fff' }

export default function SchuelerVerwaltung({
  initialSchueler, lehrkraefte, initialZuweisungen,
}: {
  initialSchueler: Schueler[]
  lehrkraefte: Lehrkraft[]
  initialZuweisungen: Zuweisung[]
}) {
  const [schueler, setSchueler] = useState(initialSchueler)
  const [zuweisungen, setZuweisungen] = useState(initialZuweisungen)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    vorname: '', nachname: '', klassenstufe: '', schule: '', eltern_name: '', eltern_telefon: '', but_bewilligt: false,
  })
  const [zuweisungSaving, setZuweisungSaving] = useState<string | null>(null)

  const createSchueler = async () => {
    if (!form.vorname || !form.nachname) return
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/schueler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok && data.schueler) {
        setSchueler([data.schueler, ...schueler])
        setForm({ vorname: '', nachname: '', klassenstufe: '', schule: '', eltern_name: '', eltern_telefon: '', but_bewilligt: false })
        setShowForm(false)
      } else {
        setError('Anlegen fehlgeschlagen: ' + (data.error || 'unbekannter Fehler'))
      }
    } catch {
      setError('Verbindungsfehler beim Anlegen.')
    }
    setSaving(false)
  }

  const zugewieseneIds = (schuelerId: string) =>
    zuweisungen.filter(z => z.schueler_id === schuelerId).map(z => z.lehrkraft_id)

  const toggleZuweisung = async (schuelerId: string, lehrkraftId: string) => {
    const bestehend = zuweisungen.find(z => z.schueler_id === schuelerId && z.lehrkraft_id === lehrkraftId)
    setZuweisungSaving(schuelerId + lehrkraftId)
    setError(null)
    try {
      if (bestehend) {
        const res = await fetch('/api/admin/lk-schueler', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: bestehend.id }),
        })
        const data = await res.json()
        if (data.ok) {
          setZuweisungen(zuweisungen.filter(z => z.id !== bestehend.id))
        } else {
          setError('Entfernen fehlgeschlagen: ' + (data.error || 'unbekannter Fehler'))
        }
      } else {
        const res = await fetch('/api/admin/lk-schueler', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lehrkraft_id: lehrkraftId, schueler_id: schuelerId }),
        })
        const data = await res.json()
        if (data.ok && data.zuweisung) {
          setZuweisungen([...zuweisungen, data.zuweisung])
        } else {
          setError('Zuweisen fehlgeschlagen: ' + (data.error || 'unbekannter Fehler'))
        }
      }
    } catch {
      setError('Verbindungsfehler bei der Zuweisung.')
    }
    setZuweisungSaving(null)
  }

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
        {showForm ? '✕ Abbrechen' : '+ Neuer Schüler'}
      </button>

      {error && (
        <div style={{ marginBottom: '12px', padding: '10px 14px', backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '8px', fontSize: '13px', color: '#B91C1C' }}>
          {error}
        </div>
      )}

      {showForm && (
        <div style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Vorname" value={form.vorname}
              onChange={(e) => setForm({ ...form, vorname: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Nachname" value={form.nachname}
              onChange={(e) => setForm({ ...form, nachname: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Klassenstufe" value={form.klassenstufe}
              onChange={(e) => setForm({ ...form, klassenstufe: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Schule" value={form.schule}
              onChange={(e) => setForm({ ...form, schule: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Elternname" value={form.eltern_name}
              onChange={(e) => setForm({ ...form, eltern_name: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Eltern-Telefon" value={form.eltern_telefon}
              onChange={(e) => setForm({ ...form, eltern_telefon: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#0F2A45' }}>
            <input type="checkbox" checked={form.but_bewilligt}
              onChange={(e) => setForm({ ...form, but_bewilligt: e.target.checked })} />
            BuT bewilligt
          </label>
          <button onClick={createSchueler} disabled={saving || !form.vorname || !form.nachname}
            style={{ backgroundColor: '#0F2A45', color: '#fff', padding: '10px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
            {saving ? 'Speichert...' : 'Schüler anlegen'}
          </button>
        </div>
      )}

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
        {schueler.length > 0 ? (
          schueler.map((s) => (
            <div key={s.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{s.vorname} {s.nachname}</strong>
                  <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                    {s.klassenstufe && <>Klasse {s.klassenstufe} · </>}
                    {s.schule || '—'}
                    {s.but_bewilligt && <> · <span style={{ color: '#1D9E75', fontWeight: '700' }}>BuT ✓</span></>}
                  </p>
                  {s.eltern_name && (
                    <p style={{ fontSize: '12px', color: '#8A9BAE', margin: '2px 0 0' }}>
                      {s.eltern_name} {s.eltern_telefon && `· ${s.eltern_telefon}`}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {lehrkraefte.map((lk) => {
                  const zugewiesen = zugewieseneIds(s.id).includes(lk.id)
                  const isSaving = zuweisungSaving === s.id + lk.id
                  return (
                    <button
                      key={lk.id}
                      onClick={() => toggleZuweisung(s.id, lk.id)}
                      disabled={isSaving}
                      style={{
                        padding: '6px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700',
                        border: zugewiesen ? '1.5px solid #1D9E75' : '1.5px solid #D6E4FF',
                        backgroundColor: zugewiesen ? '#EAFBF3' : '#fff',
                        color: zugewiesen ? '#1D9E75' : '#8A9BAE',
                        cursor: 'pointer', fontFamily: "'Inter', sans-serif", opacity: isSaving ? 0.6 : 1,
                      }}>
                      {zugewiesen ? '✓ ' : '+ '}{lk.name}
                    </button>
                  )
                })}
                {lehrkraefte.length === 0 && (
                  <span style={{ fontSize: '12px', color: '#8A9BAE' }}>Keine aktiven LKs vorhanden.</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>Noch keine Schüler angelegt.</p>
        )}
      </div>
    </div>
  )
}
