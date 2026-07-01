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
  const { lehrkraft_id, schueler_id } = body

  if (!lehrkraft_id || !schueler_id) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('lk_schueler')
    .insert({ lehrkraft_id, schueler_id })
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ ok: false, error: 'bereits_zugewiesen' }, { status: 409 })
    }
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, zuweisung: data })
}

export async function DELETE(request: Request) {
  const { supabase, error: authError } = await getSupabaseAndAdmin()
  if (authError) return authError

  const body = await request.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing_id' }, { status: 400 })
  }

  const { error } = await supabase
    .from('lk_schueler')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
