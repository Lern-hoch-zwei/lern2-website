import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll() {},
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !user.email) {
    return NextResponse.json({ ok: false, error: 'not_logged_in' }, { status: 401 })
  }

  const { data: isAdmin, error: adminCheckError } = await supabase
    .from('admin_users')
    .select('email')
    .ilike('email', user.email.trim().toLowerCase())
    .maybeSingle()

  if (adminCheckError) {
    return NextResponse.json({ ok: false, error: 'admin_check_failed: ' + adminCheckError.message }, { status: 500 })
  }
  if (!isAdmin) {
    return NextResponse.json({ ok: false, error: 'not_admin' }, { status: 403 })
  }

  const body = await request.json()
  const { lead_id } = body
  if (!lead_id) {
    return NextResponse.json({ ok: false, error: 'missing_lead_id' }, { status: 400 })
  }

  // Bereits konvertiert? (zusätzlich zur DB-Unique-Constraint, für saubere Fehlermeldung)
  const { data: bestehend } = await supabase
    .from('schueler')
    .select('id')
    .eq('lead_id', lead_id)
    .maybeSingle()

  if (bestehend) {
    return NextResponse.json({ ok: false, error: 'bereits_konvertiert' }, { status: 409 })
  }

  const { data: lead, error: leadError } = await supabase
    .from('leads')
    .select('*')
    .eq('id', lead_id)
    .maybeSingle()

  if (leadError) {
    return NextResponse.json({ ok: false, error: leadError.message }, { status: 500 })
  }
  if (!lead) {
    return NextResponse.json({ ok: false, error: 'lead_nicht_gefunden' }, { status: 404 })
  }

  const vorname = lead.vorname_kind || lead.kind
  const nachname = lead.nachname_kind

  if (!vorname) {
    return NextResponse.json({ ok: false, error: 'lead_hat_keinen_kindsnamen' }, { status: 400 })
  }

  const { data: schueler, error: insertError } = await supabase
    .from('schueler')
    .insert({
      vorname,
      nachname: nachname || '',
      klassenstufe: lead.klassenstufe || null,
      schule: lead.schule || null,
      faecher: lead.faecher || lead.fach || null,
      eltern_telefon: lead.telefon || lead.tel || null,
      eltern_email: lead.email || null,
      vorname_eltern: lead.vorname_eltern || null,
      nachname_eltern: lead.nachname_eltern || null,
      strasse: lead.strasse || null,
      plz_ort: lead.plz_ort || null,
      alter_kind: lead.alter_kind || null,
      schwierigkeiten: lead.schwierigkeiten || null,
      unterrichtsform: lead.unterrichtsform || null,
      zeiten: lead.zeiten || null,
      staatl_unterstuetzung: lead.staatl_unterstuetzung || null,
      bewilligungsbescheid: lead.bewilligungsbescheid || null,
      anmerkungen: lead.anmerkungen || null,
      kommunikation: lead.kommunikation || null,
      sprache_familie: lead.sprache_familie || null,
      but_bewilligt: !!lead.staatl_unterstuetzung,
      lead_id: lead.id,
    })
    .select()
    .single()

  if (insertError) {
    if (insertError.code === '23505') {
      return NextResponse.json({ ok: false, error: 'bereits_konvertiert' }, { status: 409 })
    }
    return NextResponse.json({ ok: false, error: insertError.message }, { status: 500 })
  }

  // Lead-Status als Rückmeldung markieren (nicht zwingend, aber praktisch für die Lead-Liste)
  await supabase
    .from('leads')
    .update({ status: 'im_unterricht' })
    .eq('id', lead_id)

  return NextResponse.json({ ok: true, schueler })
}
