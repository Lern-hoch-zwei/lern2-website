import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

async function getSupabaseAndAdmin() {
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
    return { supabase, error: NextResponse.json({ ok: false, error: 'not_logged_in' }, { status: 401 }) }
  }

  const { data: isAdmin, error: adminCheckError } = await supabase
    .from('admin_users')
    .select('email')
    .ilike('email', user.email.trim().toLowerCase())
    .maybeSingle()

  if (adminCheckError) {
    return { supabase, error: NextResponse.json({ ok: false, error: 'admin_check_failed: ' + adminCheckError.message }, { status: 500 }) }
  }
  if (!isAdmin) {
    return { supabase, error: NextResponse.json({ ok: false, error: 'not_admin' }, { status: 403 }) }
  }

  return { supabase, error: null }
}

export async function POST(request: Request) {
  const { supabase, error: authError } = await getSupabaseAndAdmin()
  if (authError) return authError

  const body = await request.json()
  const { vorname, nachname, geburtsdatum, eltern_name, eltern_telefon, eltern_email, klassenstufe, schule, faecher, but_bewilligt, but_bescheid_bis, lead_id } = body

  if (!vorname || !nachname) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('schueler')
    .insert({
      vorname, nachname,
      geburtsdatum: geburtsdatum || null,
      eltern_name: eltern_name || null,
      eltern_telefon: eltern_telefon || null,
      eltern_email: eltern_email || null,
      klassenstufe: klassenstufe || null,
      schule: schule || null,
      faecher: faecher || null,
      but_bewilligt: !!but_bewilligt,
      but_bescheid_bis: but_bescheid_bis || null,
      lead_id: lead_id || null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, schueler: data })
}

export async function PATCH(request: Request) {
  const { supabase, error: authError } = await getSupabaseAndAdmin()
  if (authError) return authError

  const body = await request.json()
  const { id, ...fields } = body

  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing_id' }, { status: 400 })
  }

  const updateData: Record<string, any> = { updated_at: new Date().toISOString() }
  const allowed = ['vorname', 'nachname', 'geburtsdatum', 'eltern_name', 'eltern_telefon', 'eltern_email', 'klassenstufe', 'schule', 'faecher', 'status', 'but_bewilligt', 'but_bescheid_bis']
  for (const key of allowed) {
    if (fields[key] !== undefined) updateData[key] = fields[key]
  }

  const { error } = await supabase
    .from('schueler')
    .update(updateData)
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
