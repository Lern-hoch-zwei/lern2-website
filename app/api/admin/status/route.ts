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
  const { id, status, notizen, lk1, lk2, lk3 } = body

  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing_id' }, { status: 400 })
  }

  const updateData: Record<string, any> = {}
  if (status !== undefined) updateData.status = status
  if (notizen !== undefined) updateData.notizen = notizen
  if (lk1 !== undefined) updateData.lk1 = lk1
  if (lk2 !== undefined) updateData.lk2 = lk2
  if (lk3 !== undefined) updateData.lk3 = lk3

  const { error } = await supabase
    .from('leads')
    .update(updateData)
    .eq('id', id)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
