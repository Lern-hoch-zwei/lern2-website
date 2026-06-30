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
  lehrkraefte?: { name: string; email: string } | null
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

export default function AdminTermineList({ initialTermine }: { initialTermine: Termin[] }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const lkNamen = Array.from(new Set(initialTermine.map(t => t.lehrkraefte?.name).filter(Boolean))) as string[]
  const [lkFilter, setLkFilter] = useState('');

  const filtered = initialTermine.filter(t => {
    if (statusFilter && t.status !== statusFilter) return false
    if (lkFilter && t.lehrkraefte?.name !== lkFilter) return false
    if (!search.trim()) return true
    const haystack = [t.schueler_name, t.fach, t.lehrkraefte?.name].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  const selectStyle = { padding: '10px 12px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '13px', fontFamily: "'Inter', sans-serif", backgroundColor: '#fff' }

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Suchen nach Schüler, Fach, LK..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 2, minWidth: '200px', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', fontFamily: "'Inter', sans-serif", backgroundColor: '#fff' }}
        />
        <select value={lkFilter} onChange={(e) => setLkFilter(e.target.value)} style={{ ...selectStyle, flex: 1, minWidth: '160px' }}>
          <option value="">Alle Lehrkräfte</option>
          {lkNamen.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ ...selectStyle, flex: 1, minWidth: '160px' }}>
          <option value="">Alle Status</option>
          {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <p style={{ fontSize: '12px', color: '#8A9BAE', marginBottom: '10px' }}>{filtered.length} von {initialTermine.length} Terminen</p>

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
        {filtered.length > 0 ? (
          filtered.map((t) => {
            const info = statusInfo(t.status)
            return (
              <div key={t.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{t.schueler_name}</strong>
                    <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                      📅 {new Date(t.datum).toLocaleDateString('de-DE')} · 🕐 {t.uhrzeit?.slice(0, 5)} · {t.dauer_minuten} Min
                      {t.fach && <> · {t.fach}</>}
                    </p>
                    <p style={{ fontSize: '12px', color: '#3A86FF', margin: '4px 0 0', fontWeight: '600' }}>
                      👩‍🏫 {t.lehrkraefte?.name || 'Unbekannt'}
                    </p>
                  </div>
                  <span style={{
                    padding: '6px 10px', borderRadius: '6px', border: `1.5px solid ${info.color}`,
                    color: info.color, fontWeight: '700', fontSize: '12px', backgroundColor: '#fff',
                  }}>
                    {info.label}
                  </span>
                </div>
              </div>
            )
          })
        ) : (
          <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>Keine Termine gefunden.</p>
        )}
      </div>
    </div>
  )
}
