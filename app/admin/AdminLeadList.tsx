'use client'
import { useState } from 'react'

type Lead = {
  id: string
  name?: string
  tel?: string
  kind?: string
  vorname_eltern?: string
  nachname_eltern?: string
  vorname_kind?: string
  telefon?: string
  fach?: string
  faecher?: string
  status?: string
  notizen?: string
  sprache_familie?: string
  created_at: string
}

const STATUS_OPTIONS = [
  { value: 'neu', label: 'Neu', color: '#3A86FF' },
  { value: 'kontaktiert', label: 'Kontaktiert', color: '#F2A623' },
  { value: 'im_unterricht', label: 'Im Unterricht', color: '#1D9E75' },
  { value: 'abgelehnt', label: 'Abgelehnt', color: '#E24B4A' },
]

function statusColor(status: string) {
  return STATUS_OPTIONS.find(s => s.value === status)?.color || '#8A9BAE'
}

export default function AdminLeadList({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState('')
  const [savingId, setSavingId] = useState<string | null>(null)
  const [openNoteId, setOpenNoteId] = useState<string | null>(null)
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({})

  const updateStatus = async (id: string, status: string) => {
    setSavingId(id)
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l))
    await fetch('/api/admin/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setSavingId(null)
  }

  const saveNote = async (id: string) => {
    const notizen = noteDrafts[id] ?? ''
    setSavingId(id)
    setLeads(leads.map(l => l.id === id ? { ...l, notizen } : l))
    await fetch('/api/admin/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: leads.find(l => l.id === id)?.status, notizen }),
    })
    setSavingId(null)
    setOpenNoteId(null)
  }

  const filtered = leads.filter(l => {
    if (!search.trim()) return true
    const haystack = [
      l.name, l.vorname_eltern, l.nachname_eltern, l.vorname_kind, l.kind,
      l.tel, l.telefon, l.fach, l.faecher,
    ].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Suchen nach Name, Telefon, Fach..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', marginBottom: '16px', fontFamily: "'Inter', sans-serif", backgroundColor: '#fff' }}
      />

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
        {filtered.length > 0 ? (
          filtered.map((lead) => {
            const status = lead.status || 'neu'
            const name = `${lead.vorname_eltern || lead.name || 'Unbekannt'} ${lead.nachname_eltern || ''}`.trim()
            const kindName = lead.vorname_kind || lead.kind || '—'
            const tel = lead.telefon || lead.tel || '—'
            const fach = lead.faecher || lead.fach || '—'

            return (
              <div key={lead.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{name}</strong>
                    <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                      📞 {tel} · Kind: {kindName} · Fach: {fach}
                      {lead.sprache_familie && <> · 🌐 {lead.sprache_familie}</>}
                    </p>
                    <p style={{ fontSize: '11px', color: '#AAB', margin: '2px 0 0' }}>
                      {new Date(lead.created_at).toLocaleString('de-DE')}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <select
                      value={status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      disabled={savingId === lead.id}
                      style={{
                        padding: '6px 10px', borderRadius: '6px', border: `1.5px solid ${statusColor(status)}`,
                        color: statusColor(status), fontWeight: '700', fontSize: '12px',
                        backgroundColor: '#fff', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      {STATUS_OPTIONS.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        setOpenNoteId(openNoteId === lead.id ? null : lead.id)
                        if (noteDrafts[lead.id] === undefined) {
                          setNoteDrafts({ ...noteDrafts, [lead.id]: lead.notizen || '' })
                        }
                      }}
                      style={{
                        padding: '6px 10px', borderRadius: '6px', border: '1px solid #D6E4FF',
                        backgroundColor: lead.notizen ? '#EEF4FF' : '#fff', color: '#3A86FF',
                        fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      📝 Notiz
                    </button>
                  </div>
                </div>

                {openNoteId === lead.id && (
                  <div style={{ marginTop: '10px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <textarea
                      value={noteDrafts[lead.id] ?? ''}
                      onChange={(e) => setNoteDrafts({ ...noteDrafts, [lead.id]: e.target.value })}
                      rows={2}
                      placeholder="Notiz hinzufügen..."
                      style={{ flex: 1, padding: '8px 10px', borderRadius: '6px', border: '1px solid #D6E4FF', fontSize: '13px', fontFamily: "'Inter', sans-serif", resize: 'vertical' }}
                    />
                    <button
                      onClick={() => saveNote(lead.id)}
                      disabled={savingId === lead.id}
                      style={{ padding: '8px 14px', borderRadius:
