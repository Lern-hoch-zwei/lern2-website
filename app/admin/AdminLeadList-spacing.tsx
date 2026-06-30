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
  nachname_kind?: string
  telefon?: string
  email?: string
  strasse?: string
  plz_ort?: string
  alter_kind?: number
  klassenstufe?: string
  schule?: string
  fach?: string
  faecher?: string
  schwierigkeiten?: string
  unterrichtsform?: string
  zeiten?: string
  staatl_unterstuetzung?: string
  bewilligungsbescheid?: string
  kommunikation?: string
  anmerkungen?: string
  geschlecht?: string
  genehmigungsschein_abgegeben?: boolean
  genehmigungsdatum?: string
  erneute_genehmigung_am?: string
  erneute_abgegeben?: boolean
  status?: string
  notizen?: string
  sprache_familie?: string
  lk1?: string
  lk2?: string
  lk3?: string
  lang?: string
  source?: string
  created_at: string
}

const STATUS_OPTIONS = [
  { value: 'neu', label: 'Neu', color: '#3A86FF' },
  { value: 'kontaktiert', label: 'Kontaktiert', color: '#F2A623' },
  { value: 'im_unterricht', label: 'Im Unterricht', color: '#1D9E75' },
  { value: 'abgelehnt', label: 'Abgelehnt', color: '#E24B4A' },
]

const BEKANNTE_LKS = [
  'Suha Alhaj Ali', 'Mehmed Fatih Ahmatovic', 'Ahmad MH', 'Amani Mohammad',
  'Renad Alhussein', 'Ismael Lounici', 'Khaled Alkam', 'Marah',
  'Khalid Chabou', 'Maryam Ghannoush',
]

function statusColor(status: string) {
  return STATUS_OPTIONS.find(s => s.value === status)?.color || '#8A9BAE'
}

const dash = (v: any) => (v === null || v === undefined || v === '' ? '—' : String(v))
const yesNo = (v: any) => (v === true ? 'Ja' : v === false ? 'Nein' : '—')
const dateFmt = (v?: string) => (v ? new Date(v).toLocaleDateString('de-DE') : '—')

export default function AdminLeadList({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState('')
  const [savingId, setSavingId] = useState<string | null>(null)
  const [openPanelId, setOpenPanelId] = useState<{ id: string; panel: 'notiz' | 'lk' | 'details' } | null>(null)
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({})
  const [lkDrafts, setLkDrafts] = useState<Record<string, { lk1: string; lk2: string; lk3: string }>>({})

  const updateField = async (id: string, fields: Record<string, any>) => {
    setSavingId(id)
    setLeads(leads.map(l => l.id === id ? { ...l, ...fields } : l))
    await fetch('/api/admin/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...fields }),
    })
    setSavingId(null)
  }

  const saveNote = async (id: string) => {
    const notizen = noteDrafts[id] ?? ''
    await updateField(id, { notizen })
    setOpenPanelId(null)
  }

  const saveLk = async (id: string) => {
    const draft = lkDrafts[id] ?? { lk1: '', lk2: '', lk3: '' }
    await updateField(id, { lk1: draft.lk1, lk2: draft.lk2, lk3: draft.lk3 })
    setOpenPanelId(null)
  }

  const togglePanel = (id: string, panel: 'notiz' | 'lk' | 'details', lead: Lead) => {
    const isOpen = openPanelId?.id === id && openPanelId?.panel === panel
    setOpenPanelId(isOpen ? null : { id, panel })
    if (panel === 'notiz' && noteDrafts[id] === undefined) {
      setNoteDrafts({ ...noteDrafts, [id]: lead.notizen || '' })
    }
    if (panel === 'lk' && lkDrafts[id] === undefined) {
      setLkDrafts({ ...lkDrafts, [id]: { lk1: lead.lk1 || '', lk2: lead.lk2 || '', lk3: lead.lk3 || '' } })
    }
  }

  const filtered = leads.filter(l => {
    if (!search.trim()) return true
    const haystack = [
      l.name, l.vorname_eltern, l.nachname_eltern, l.vorname_kind, l.kind,
      l.tel, l.telefon, l.fach, l.faecher, l.lk1, l.lk2, l.lk3, l.schule,
    ].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(search.toLowerCase())
  })

  const lkInputStyle = { flex: 1, padding: '8px 10px', borderRadius: '6px', border: '1px solid #D6E4FF', fontSize: '13px', fontFamily: "'Inter', sans-serif" }

  const DetailRow = ({ label, value }: { label: string; value: any }) => (
    <div style={{ padding: '6px 0', borderBottom: '1px solid #F0F4F8', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
      <span style={{ fontSize: '12px', color: '#8A9BAE', flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: '13px', color: '#0F2A45', fontWeight: '500', textAlign: 'right' }}>{value}</span>
    </div>
  )

  const DetailGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: '14px' }}>
      <p style={{ fontSize: '11px', fontWeight: '700', color: '#3A86FF', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>{title}</p>
      {children}
    </div>
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Suchen nach Name, Telefon, Fach, Schule, LK..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', marginBottom: '16px', fontFamily: "'Inter', sans-serif", backgroundColor: '#fff' }}
      />

      <datalist id="lk-vorschlaege">
        {BEKANNTE_LKS.map(lk => <option key={lk} value={lk} />)}
      </datalist>

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
        {filtered.length > 0 ? (
          filtered.map((lead) => {
            const status = lead.status || 'neu'
            const name = `${lead.vorname_eltern || lead.name || 'Unbekannt'} ${lead.nachname_eltern || ''}`.trim()
            const kindName = lead.vorname_kind || lead.kind || '—'
            const tel = lead.telefon || lead.tel || '—'
            const fach = lead.faecher || lead.fach || '—'
            const lkListe = [lead.lk1, lead.lk2, lead.lk3].filter(Boolean)
            const noteOpen = openPanelId?.id === lead.id && openPanelId?.panel === 'notiz'
            const lkOpen = openPanelId?.id === lead.id && openPanelId?.panel === 'lk'
            const detailsOpen = openPanelId?.id === lead.id && openPanelId?.panel === 'details'
            const lkDraft = lkDrafts[lead.id] ?? { lk1: '', lk2: '', lk3: '' }

            return (
              <div key={lead.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{name}</strong>
                    <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                      📞 {tel} · Kind: {kindName} · Fach: {fach}
                      {lead.sprache_familie && <> · 🌐 {lead.sprache_familie}</>}
                    </p>
                    {lkListe.length > 0 && (
                      <p style={{ fontSize: '12px', color: '#3A86FF', margin: '4px 0 0', fontWeight: '600' }}>
                        👩‍🏫 {lkListe.join(' · ')}
                      </p>
                    )}
                    <p style={{ fontSize: '11px', color: '#AAB', margin: '2px 0 0' }}>
                      {new Date(lead.created_at).toLocaleString('de-DE')}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
                    <select
                      value={status}
                      onChange={(e) => updateField(lead.id, { status: e.target.value })}
                      disabled={savingId === lead.id}
                      style={{
                        padding: '8px 30px 8px 14px', borderRadius: '6px', border: `1.5px solid ${statusColor(status)}`,
                        color: statusColor(status), fontWeight: '700', fontSize: '12px',
                        backgroundColor: '#fff', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                        appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(statusColor(status))}' stroke-width='2.5'><path d='M6 9l6 6 6-6'/></svg>")`,
                        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '12px',
                      }}>
                      {STATUS_OPTIONS.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => togglePanel(lead.id, 'details', lead)}
                      style={{
                        padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF',
                        backgroundColor: detailsOpen ? '#0F2A45' : '#fff', color: detailsOpen ? '#fff' : '#0F2A45',
                        fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      {detailsOpen ? '✕ Schließen' : '🔍 Details'}
                    </button>
                    <button
                      onClick={() => togglePanel(lead.id, 'lk', lead)}
                      style={{
                        padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF',
                        backgroundColor: lkListe.length > 0 ? '#EEF4FF' : '#fff', color: '#3A86FF',
                        fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      👩‍🏫 LK
                    </button>
                    <button
                      onClick={() => togglePanel(lead.id, 'notiz', lead)}
                      style={{
                        padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF',
                        backgroundColor: lead.notizen ? '#EEF4FF' : '#fff', color: '#3A86FF',
                        fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      📝 Notiz
                    </button>
                  </div>
                </div>

                {detailsOpen && (
                  <div style={{ marginTop: '14px', backgroundColor: '#F7F9FC', borderRadius: '10px', padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    <DetailGroup title="Eltern">
                      <DetailRow label="Vorname" value={dash(lead.vorname_eltern)} />
                      <DetailRow label="Nachname" value={dash(lead.nachname_eltern)} />
                      <DetailRow label="Telefon" value={dash(lead.telefon || lead.tel)} />
                      <DetailRow label="E-Mail" value={dash(lead.email)} />
                      <DetailRow label="Straße" value={dash(lead.strasse)} />
                      <DetailRow label="PLZ/Ort" value={dash(lead.plz_ort)} />
                    </DetailGroup>

                    <DetailGroup title="Kind">
                      <DetailRow label="Vorname" value={dash(lead.vorname_kind || lead.kind)} />
                      <DetailRow label="Nachname" value={dash(lead.nachname_kind)} />
                      <DetailRow label="Alter" value={dash(lead.alter_kind)} />
                      <DetailRow label="Klasse" value={dash(lead.klassenstufe)} />
                      <DetailRow label="Schule" value={dash(lead.schule)} />
                      <DetailRow label="Geschlecht" value={dash(lead.geschlecht)} />
                      <DetailRow label="Fächer" value={dash(lead.faecher || lead.fach)} />
                    </DetailGroup>

                    <DetailGroup title="Bedarf">
                      <DetailRow label="Schwierigkeiten" value={dash(lead.schwierigkeiten)} />
                      <DetailRow label="Unterrichtsform" value={dash(lead.unterrichtsform)} />
                      <DetailRow label="Zeiten" value={dash(lead.zeiten)} />
                      <DetailRow label="Kommunikation" value={dash(lead.kommunikation)} />
                    </DetailGroup>

                    <DetailGroup title="BuT / Förderung">
                      <DetailRow label="Staatl. Unterstützung" value={dash(lead.staatl_unterstuetzung)} />
                      <DetailRow label="Bewilligungsbescheid" value={dash(lead.bewilligungsbescheid)} />
                      <DetailRow label="Genehmigungsschein abgegeben" value={yesNo(lead.genehmigungsschein_abgegeben)} />
                      <DetailRow label="Genehmigungsdatum" value={dateFmt(lead.genehmigungsdatum)} />
                      <DetailRow label="Erneute Genehmigung am" value={dateFmt(lead.erneute_genehmigung_am)} />
                      <DetailRow label="Erneute abgegeben" value={yesNo(lead.erneute_abgegeben)} />
                    </DetailGroup>

                    <DetailGroup title="Meta">
                      <DetailRow label="Sprache (Quelle)" value={dash(lead.lang)} />
                      <DetailRow label="Familiensprache" value={dash(lead.sprache_familie)} />
                      <DetailRow label="Quelle" value={dash(lead.source)} />
                      <DetailRow label="Eingegangen" value={new Date(lead.created_at).toLocaleString('de-DE')} />
                    </DetailGroup>

                    {lead.anmerkungen && (
                      <DetailGroup title="Anmerkungen">
                        <p style={{ fontSize: '13px', color: '#334455', lineHeight: '1.6', margin: 0 }}>{lead.anmerkungen}</p>
                      </DetailGroup>
                    )}
                  </div>
                )}

                {lkOpen && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#F7F9FC', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input list="lk-vorschlaege" placeholder="LK 1" value={lkDraft.lk1}
                        onChange={(e) => setLkDrafts({ ...lkDrafts, [lead.id]: { ...lkDraft, lk1: e.target.value } })}
                        style={lkInputStyle} />
                      <input list="lk-vorschlaege" placeholder="LK 2 (optional)" value={lkDraft.lk2}
                        onChange={(e) => setLkDrafts({ ...lkDrafts, [lead.id]: { ...lkDraft, lk2: e.target.value } })}
                        style={lkInputStyle} />
                      <input list="lk-vorschlaege" placeholder="LK 3 (optional)" value={lkDraft.lk3}
                        onChange={(e) => setLkDrafts({ ...lkDrafts, [lead.id]: { ...lkDraft, lk3: e.target.value } })}
                        style={lkInputStyle} />
                    </div>
                    <button
                      onClick={() => saveLk(lead.id)}
                      disabled={savingId === lead.id}
                      style={{ alignSelf: 'flex-end', padding: '8px 14px', borderRadius: '6px', border: 'none', backgroundColor: '#FFD60A', color: '#0F2A45', fontWeight: '700', fontSize: '12px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                      Speichern
                    </button>
                  </div>
                )}

                {noteOpen && (
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
                      style={{ padding: '8px 14px', borderRadius: '6px', border: 'none', backgroundColor: '#FFD60A', color: '#0F2A45', fontWeight: '700', fontSize: '12px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                      Speichern
                    </button>
                  </div>
                )}
              </div>
            )
          })
        ) : (
          <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>
            {search ? 'Keine Treffer für diese Suche.' : 'Noch keine Anmeldungen vorhanden.'}
          </p>
        )}
      </div>
    </div>
  )
}
