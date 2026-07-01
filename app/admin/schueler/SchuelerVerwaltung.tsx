'use client'
import { useState } from 'react'

type Schueler = {
  id: string
  vorname: string
  nachname: string
  geburtsdatum?: string
  klassenstufe?: string
  schule?: string
  status: string
  but_bewilligt?: boolean
  but_bescheid_bis?: string
  eltern_name?: string
  eltern_telefon?: string
  eltern_email?: string
  vorname_eltern?: string
  nachname_eltern?: string
  strasse?: string
  plz_ort?: string
  alter_kind?: number
  faecher?: string
  schwierigkeiten?: string
  unterrichtsform?: string
  zeiten?: string
  staatl_unterstuetzung?: string
  bewilligungsbescheid?: string
  anmerkungen?: string
  kommunikation?: string
  sprache_familie?: string
  notizen?: string
  lead_id?: string
}

type Lehrkraft = { id: string; name: string; email: string }
type Zuweisung = { id: string; lehrkraft_id: string; schueler_id: string }

const inputStyle = { padding: '10px 12px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', fontFamily: "'Inter', sans-serif" }
const dash = (v: any) => (v === null || v === undefined || v === '' ? '—' : String(v))

const EMPTY_FORM = {
  vorname: '', nachname: '', geburtsdatum: '', klassenstufe: '', schule: '',
  vorname_eltern: '', nachname_eltern: '', eltern_telefon: '', eltern_email: '',
  strasse: '', plz_ort: '', alter_kind: '', faecher: '', schwierigkeiten: '',
  unterrichtsform: '', zeiten: '', staatl_unterstuetzung: '', bewilligungsbescheid: '',
  anmerkungen: '', kommunikation: '', sprache_familie: '', notizen: '', but_bewilligt: false,
}

const DetailRow = ({ label, value }: { label: string; value: any }) => (
  <div style={{ padding: '5px 0', borderBottom: '1px solid #F0F4F8', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
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
  const [form, setForm] = useState(EMPTY_FORM)
  const [zuweisungSaving, setZuweisungSaving] = useState<string | null>(null)
  const [openDetailsId, setOpenDetailsId] = useState<string | null>(null)
  const [ansicht, setAnsicht] = useState<'schueler' | 'lehrkraft'>('schueler')

  const createSchueler = async () => {
    if (!form.vorname || !form.nachname) return
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/schueler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, alter_kind: form.alter_kind ? parseInt(form.alter_kind, 10) : null }),
      })
      const data = await res.json()
      if (data.ok && data.schueler) {
        setSchueler([data.schueler, ...schueler])
        setForm(EMPTY_FORM)
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

  const schuelerVonLk = (lehrkraftId: string) =>
    zuweisungen.filter(z => z.lehrkraft_id === lehrkraftId).map(z => schueler.find(s => s.id === z.schueler_id)).filter(Boolean) as Schueler[]

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

  const ZuweisungsPills = ({ s }: { s: Schueler }) => (
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
  )

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
          {showForm ? '✕ Abbrechen' : '+ Neuer Schüler'}
        </button>

        <div style={{ display: 'flex', backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '8px', overflow: 'hidden' }}>
          <button onClick={() => setAnsicht('schueler')}
            style={{ padding: '10px 16px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif", backgroundColor: ansicht === 'schueler' ? '#0F2A45' : '#fff', color: ansicht === 'schueler' ? '#fff' : '#0F2A45' }}>
            Nach Schüler
          </button>
          <button onClick={() => setAnsicht('lehrkraft')}
            style={{ padding: '10px 16px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif", backgroundColor: ansicht === 'lehrkraft' ? '#0F2A45' : '#fff', color: ansicht === 'lehrkraft' ? '#fff' : '#0F2A45' }}>
            Nach Lehrkraft
          </button>
        </div>
      </div>

      {error && (
        <div style={{ marginBottom: '12px', padding: '10px 14px', backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '8px', fontSize: '13px', color: '#B91C1C' }}>
          {error}
        </div>
      )}

      {showForm && (
        <div style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', color: '#3A86FF', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Kind</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Vorname *" value={form.vorname}
              onChange={(e) => setForm({ ...form, vorname: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Nachname *" value={form.nachname}
              onChange={(e) => setForm({ ...form, nachname: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Alter" type="number" value={form.alter_kind}
              onChange={(e) => setForm({ ...form, alter_kind: e.target.value })} style={{ ...inputStyle, width: '90px' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Geburtsdatum" type="date" value={form.geburtsdatum}
              onChange={(e) => setForm({ ...form, geburtsdatum: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Klassenstufe" value={form.klassenstufe}
              onChange={(e) => setForm({ ...form, klassenstufe: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Schule" value={form.schule}
              onChange={(e) => setForm({ ...form, schule: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <input placeholder="Fächer" value={form.faecher}
            onChange={(e) => setForm({ ...form, faecher: e.target.value })} style={inputStyle} />

          <p style={{ fontSize: '11px', fontWeight: '700', color: '#3A86FF', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '8px' }}>Eltern / Kontakt</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Vorname Eltern" value={form.vorname_eltern}
              onChange={(e) => setForm({ ...form, vorname_eltern: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Nachname Eltern" value={form.nachname_eltern}
              onChange={(e) => setForm({ ...form, nachname_eltern: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Telefon" value={form.eltern_telefon}
              onChange={(e) => setForm({ ...form, eltern_telefon: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="E-Mail" value={form.eltern_email}
              onChange={(e) => setForm({ ...form, eltern_email: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Straße" value={form.strasse}
              onChange={(e) => setForm({ ...form, strasse: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="PLZ/Ort" value={form.plz_ort}
              onChange={(e) => setForm({ ...form, plz_ort: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>

          <p style={{ fontSize: '11px', fontWeight: '700', color: '#3A86FF', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '8px' }}>Bedarf & Förderung</p>
          <input placeholder="Schwierigkeiten" value={form.schwierigkeiten}
            onChange={(e) => setForm({ ...form, schwierigkeiten: e.target.value })} style={inputStyle} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Unterrichtsform" value={form.unterrichtsform}
              onChange={(e) => setForm({ ...form, unterrichtsform: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Zeiten" value={form.zeiten}
              onChange={(e) => setForm({ ...form, zeiten: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Staatl. Unterstützung" value={form.staatl_unterstuetzung}
              onChange={(e) => setForm({ ...form, staatl_unterstuetzung: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
            <input placeholder="Bewilligungsbescheid" value={form.bewilligungsbescheid}
              onChange={(e) => setForm({ ...form, bewilligungsbescheid: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
          </div>
          <textarea placeholder="Anmerkungen" value={form.anmerkungen} rows={2}
            onChange={(e) => setForm({ ...form, anmerkungen: e.target.value })} style={{ ...inputStyle, resize: 'vertical' as const }} />
          <textarea placeholder="Interne Notizen (nur Admin)" value={form.notizen} rows={2}
            onChange={(e) => setForm({ ...form, notizen: e.target.value })} style={{ ...inputStyle, resize: 'vertical' as const }} />

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

      {ansicht === 'schueler' ? (
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
          {schueler.length > 0 ? (
            schueler.map((s) => {
              const detailsOpen = openDetailsId === s.id
              const elternName = `${s.vorname_eltern || ''} ${s.nachname_eltern || ''}`.trim() || s.eltern_name
              return (
                <div key={s.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                    <div>
                      <strong style={{ color: '#0F2A45', fontSize: '15px' }}>{s.vorname} {s.nachname}</strong>
                      <p style={{ fontSize: '13px', color: '#556678', margin: '4px 0 0' }}>
                        {s.klassenstufe && <>Klasse {s.klassenstufe} · </>}
                        {s.schule || '—'}
                        {s.but_bewilligt && <> · <span style={{ color: '#1D9E75', fontWeight: '700' }}>BuT ✓</span></>}
                      </p>
                      {elternName && (
                        <p style={{ fontSize: '12px', color: '#8A9BAE', margin: '2px 0 0' }}>
                          {elternName} {s.eltern_telefon && `· ${s.eltern_telefon}`}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setOpenDetailsId(detailsOpen ? null : s.id)}
                      style={{
                        padding: '6px 10px', borderRadius: '6px', border: '1px solid #D6E4FF',
                        backgroundColor: detailsOpen ? '#0F2A45' : '#fff', color: detailsOpen ? '#fff' : '#0F2A45',
                        fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                      }}>
                      {detailsOpen ? '✕ Schließen' : '🔍 Details'}
                    </button>
                  </div>

                  {detailsOpen && (
                    <div style={{ marginTop: '14px', backgroundColor: '#F7F9FC', borderRadius: '10px', padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                      <DetailGroup title="Eltern">
                        <DetailRow label="Name" value={dash(elternName)} />
                        <DetailRow label="Telefon" value={dash(s.eltern_telefon)} />
                        <DetailRow label="E-Mail" value={dash(s.eltern_email)} />
                        <DetailRow label="Straße" value={dash(s.strasse)} />
                        <DetailRow label="PLZ/Ort" value={dash(s.plz_ort)} />
                      </DetailGroup>
                      <DetailGroup title="Kind">
                        <DetailRow label="Geburtsdatum" value={s.geburtsdatum ? new Date(s.geburtsdatum).toLocaleDateString('de-DE') : '—'} />
                        <DetailRow label="Alter" value={dash(s.alter_kind)} />
                        <DetailRow label="Fächer" value={dash(s.faecher)} />
                      </DetailGroup>
                      <DetailGroup title="Bedarf">
                        <DetailRow label="Schwierigkeiten" value={dash(s.schwierigkeiten)} />
                        <DetailRow label="Unterrichtsform" value={dash(s.unterrichtsform)} />
                        <DetailRow label="Zeiten" value={dash(s.zeiten)} />
                        <DetailRow label="Kommunikation" value={dash(s.kommunikation)} />
                      </DetailGroup>
                      <DetailGroup title="BuT / Förderung">
                        <DetailRow label="Staatl. Unterstützung" value={dash(s.staatl_unterstuetzung)} />
                        <DetailRow label="Bewilligungsbescheid" value={dash(s.bewilligungsbescheid)} />
                        <DetailRow label="Bescheid bis" value={s.but_bescheid_bis ? new Date(s.but_bescheid_bis).toLocaleDateString('de-DE') : '—'} />
                      </DetailGroup>
                      {s.anmerkungen && (
                        <DetailGroup title="Anmerkungen">
                          <p style={{ fontSize: '13px', color: '#334455', lineHeight: '1.6', margin: 0 }}>{s.anmerkungen}</p>
                        </DetailGroup>
                      )}
                      {s.notizen && (
                        <DetailGroup title="Interne Notizen">
                          <p style={{ fontSize: '13px', color: '#334455', lineHeight: '1.6', margin: 0 }}>{s.notizen}</p>
                        </DetailGroup>
                      )}
                    </div>
                  )}

                  <ZuweisungsPills s={s} />
                </div>
              )
            })
          ) : (
            <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>Noch keine Schüler angelegt.</p>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {lehrkraefte.length === 0 && (
            <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF' }}>Keine aktiven LKs vorhanden.</p>
          )}
          {lehrkraefte.map((lk) => {
            const zugewieseneSchueler = schuelerVonLk(lk.id)
            return (
              <div key={lk.id} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <strong style={{ color: '#0F2A45', fontSize: '15px' }}>👩‍🏫 {lk.name}</strong>
                  <span style={{ fontSize: '12px', color: '#8A9BAE', fontWeight: '700' }}>{zugewieseneSchueler.length} Schüler</span>
                </div>
                {zugewieseneSchueler.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {zugewieseneSchueler.map(s => (
                      <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', backgroundColor: '#F7F9FC', borderRadius: '8px' }}>
                        <span style={{ fontSize: '13px', color: '#0F2A45', fontWeight: '600' }}>{s.vorname} {s.nachname}</span>
                        <span style={{ fontSize: '12px', color: '#8A9BAE' }}>{s.klassenstufe && `Klasse ${s.klassenstufe}`} {s.but_bewilligt && '· BuT ✓'}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '13px', color: '#8A9BAE', margin: 0 }}>Noch keine Schüler zugewiesen.</p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
