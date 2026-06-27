import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)

const resend = new Resend(process.env.RESEND_API_KEY!)
const TO_EMAIL = process.env.LEAD_NOTIFICATION_TO || 'info@lern2.com'

type Body = {
  // Stufe 1: Eltern
  vorname_eltern?: string
  nachname_eltern?: string
  telefon?: string
  email?: string
  strasse?: string
  plz_ort?: string
  // Stufe 2: Kind
  vorname_kind?: string
  nachname_kind?: string
  alter_kind?: string
  klassenstufe?: string
  schule?: string
  faecher?: string
  schwierigkeiten?: string
  // Stufe 3: Organisation
  unterrichtsform?: string
  zeiten?: string
  staatl_unterstuetzung?: string
  bewilligungsbescheid?: string
  anmerkungen?: string
  datenschutz_akzeptiert?: boolean
  kommunikation?: string
  // Meta
  lang?: string
}

const cap = (v: any, max: number) =>
  v === null || v === undefined ? null : String(v).trim().slice(0, max) || null

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body

    // Pflichtfelder
    if (!body.vorname_eltern || !body.nachname_eltern || !body.telefon || !body.email) {
      return NextResponse.json({ ok: false, error: 'pflichtfelder_fehlen' }, { status: 400 })
    }
    if (!body.datenschutz_akzeptiert) {
      return NextResponse.json({ ok: false, error: 'datenschutz_required' }, { status: 400 })
    }

    const row = {
      // Alt-Spalten für Konsistenz mit Start-Formular
      name: `${cap(body.vorname_eltern, 60)} ${cap(body.nachname_eltern, 60)}`,
      tel: cap(body.telefon, 60),
      kind: cap(body.vorname_kind, 60),
      fach: cap(body.faecher, 200),
      lang: cap(body.lang, 5) || 'de',
      source: 'web-anmeldung',
      status: 'neu',
      // Sorte A: Eltern-Felder
      vorname_eltern: cap(body.vorname_eltern, 60),
      nachname_eltern: cap(body.nachname_eltern, 60),
      telefon: cap(body.telefon, 60),
      email: cap(body.email, 120),
      strasse: cap(body.strasse, 200),
      plz_ort: cap(body.plz_ort, 200),
      vorname_kind: cap(body.vorname_kind, 60),
      nachname_kind: cap(body.nachname_kind, 60),
      alter_kind: body.alter_kind ? parseInt(String(body.alter_kind), 10) || null : null,
      klassenstufe: cap(body.klassenstufe, 30),
      schule: cap(body.schule, 200),
      faecher: cap(body.faecher, 200),
      schwierigkeiten: cap(body.schwierigkeiten, 1000),
      unterrichtsform: cap(body.unterrichtsform, 100),
      zeiten: cap(body.zeiten, 300),
      staatl_unterstuetzung: cap(body.staatl_unterstuetzung, 100),
      bewilligungsbescheid: cap(body.bewilligungsbescheid, 200),
      anmerkungen: cap(body.anmerkungen, 2000),
      datenschutz_akzeptiert: true,
      kommunikation: cap(body.kommunikation, 100),
    }

    const { error: dbError } = await supabase.from('leads').insert(row)
    if (dbError) {
      console.error('supabase insert error:', dbError)
      return NextResponse.json({ ok: false, error: 'db' }, { status: 500 })
    }

    // E-Mail-Benachrichtigung an Chef
    const html = `
      <h2>📥 Neue Anmeldung über die Website</h2>
      <p><strong>Eingegangen:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
      <h3>👨‍👩‍👧 Eltern</h3>
      <ul>
        <li><strong>Name:</strong> ${row.vorname_eltern} ${row.nachname_eltern}</li>
        <li><strong>Telefon:</strong> ${row.telefon}</li>
        <li><strong>E-Mail:</strong> ${row.email}</li>
        <li><strong>Adresse:</strong> ${row.strasse || '—'}, ${row.plz_ort || '—'}</li>
      </ul>
      <h3>🧒 Kind</h3>
      <ul>
        <li><strong>Name:</strong> ${row.vorname_kind || '—'} ${row.nachname_kind || ''}</li>
        <li><strong>Alter:</strong> ${row.alter_kind ?? '—'}</li>
        <li><strong>Klasse:</strong> ${row.klassenstufe || '—'}</li>
        <li><strong>Schule:</strong> ${row.schule || '—'}</li>
        <li><strong>Fächer:</strong> ${row.faecher || '—'}</li>
        <li><strong>Schwierigkeiten:</strong> ${row.schwierigkeiten || '—'}</li>
      </ul>
      <h3>📅 Organisation</h3>
      <ul>
        <li><strong>Unterrichtsform:</strong> ${row.unterrichtsform || '—'}</li>
        <li><strong>Zeiten:</strong> ${row.zeiten || '—'}</li>
        <li><strong>Staatliche Unterstützung:</strong> ${row.staatl_unterstuetzung || '—'}</li>
        <li><strong>Bewilligungsbescheid:</strong> ${row.bewilligungsbescheid || '—'}</li>
        <li><strong>Kommunikation:</strong> ${row.kommunikation || '—'}</li>
        <li><strong>Anmerkungen:</strong> ${row.anmerkungen || '—'}</li>
      </ul>
      <p style="margin-top:24px;color:#888;font-size:12px">
        Diese Nachricht wurde automatisch von lern2.com generiert. Antworten Sie der Familie direkt unter ${row.telefon} oder ${row.email}.
      </p>
    `

    try {
      await resend.emails.send({
        from: 'Lern² Website <info@lern2.com>',
        to: TO_EMAIL,
        replyTo: row.email || undefined,
        subject: `Neue Anmeldung: ${row.vorname_eltern} ${row.nachname_eltern} (${row.vorname_kind || 'Kind'})`,
        html,
      })
    } catch (mailErr) {
      console.error('resend email error:', mailErr)
      // E-Mail-Fehler nicht weitergeben — Lead ist bereits in DB sicher
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('anmeldung route error:', e)
    return NextResponse.json({ ok: false, error: 'unknown' }, { status: 500 })
  }
}
