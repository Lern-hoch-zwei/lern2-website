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

    const name = String(body.name ?? '').trim().slice(0, 120)
    const tel  = String(body.tel  ?? '').trim().slice(0, 60)
    const kind = body.kind ? String(body.kind).slice(0, 60) : null
    const fach = body.fach ? String(body.fach).slice(0, 120) : null
    const lang = String(body.lang ?? 'de').slice(0, 5)

    if (!name || !tel) {
      return NextResponse.json({ ok: false, error: 'name_tel_required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('leads')
      .insert({ name, tel, kind, fach, lang, source: 'web' })

    if (error) {
      console.error('supabase insert error:', error)
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('lead route error:', e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
