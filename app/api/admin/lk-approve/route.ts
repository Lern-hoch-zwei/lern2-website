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

  const userEmail = user.email.trim().toLowerCase()

  const { data: isAdmin, error: adminCheckError } = await supabase
    .from('admin_users')
    .select('email')
    .ilike('email', userEmail)
    .maybeSingle()

  if (adminCheckError) {
    console.error('lk-approve admin check error:', adminCheckError, 'for email:', userEmail)
    return NextResponse.json({ ok: false, error: 'admin_check_failed: ' + adminCheckError.message }, { status: 500 })
  }

  if (!isAdmin) {
    console.error('lk-approve not_admin — kein admin_users-Treffer für:', userEmail)
    return NextResponse.json({ ok: false, error: 'not_admin', debugEmail: userEmail }, { status: 403 })
  }

  const body = await request.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing_id' }, { status: 400 })
  }

  const { error } = await supabase
    .from('lehrkraefte')
    .update({ aktiv: true })
    .eq('id', id)

  if (error) {
    console.error('lk-approve update error:', error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
