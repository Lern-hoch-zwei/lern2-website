import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, status: 'invalid_email' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('lehrkraefte')
      .select('aktiv')
      .ilike('email', email)
      .maybeSingle()

    if (error) {
      console.error('lk-check-status error:', error)
      return NextResponse.json({ ok: false, status: 'error' }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ ok: true, status: 'not_registered' })
    }

    if (!data.aktiv) {
      return NextResponse.json({ ok: true, status: 'pending' })
    }

    return NextResponse.json({ ok: true, status: 'active' })
  } catch (e) {
    console.error('lk-check-status route error:', e)
    return NextResponse.json({ ok: false, status: 'error' }, { status: 500 })
  }
}
