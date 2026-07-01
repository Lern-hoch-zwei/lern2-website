import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

async function getSupabase() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll() {},
      },
    }
  )
}

export async function POST(request: Request) {
  const supabase = await getSupabase()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ ok: false, error: 'not_logged_in' }, { status: 401 })
  }

  const body = await request.json()
  const { lehrkraft_id, schueler_id, schueler_name, fach, datum, uhrzeit, dauer_minuten } = body

  if (!lehrkraft_id || !schueler_name || !datum || !uhrzeit) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  // Falls ein Schüler aus dem Dropdown gewählt wurde: sicherstellen, dass er diesem LK auch tatsächlich zugewiesen ist
  if (schueler_id) {
    const { data: zuweisung, error: zuweisungError } = await supabase
      .from('lk_schueler')
      .select('id')
      .eq('lehrkraft_id', lehrkraft_id)
      .eq('schueler_id', schueler_id)
      .maybeSingle()

    if (zuweisungError) {
      return NextResponse.json({ ok: false, error: zuweisungError.message }, { status: 500 })
    }
    if (!zuweisung) {
      return NextResponse.json({ ok: false, error: 'schueler_nicht_zugewiesen' }, { status: 403 })
    }
  }

  const { data, error } = await supabase
    .from('termine')
    .insert({ lehrkraft_id, schueler_id: schueler_id || null, schueler_name, fach, datum, uhrzeit, dauer_minuten: dauer_minuten || 90 })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, termin: data })
}

export async function PATCH(request: Request) {
  const supabase = await getSupabase()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ ok: false, error: 'not_logged_in' }, { status: 401 })
  }

  const body = await request.json()
  const { id, status } = body

  if (!id || !status) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  const { error } = await supabase
    .from('termine')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function DELETE(request: Request) {
  const supabase = await getSupabase()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ ok: false, error: 'not_logged_in' }, { status: 401 })
  }

  const body = await request.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing_id' }, { status: 400 })
  }

  const { error } = await supabase
    .from('termine')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
