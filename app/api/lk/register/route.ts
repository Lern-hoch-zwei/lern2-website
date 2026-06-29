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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name || '').trim().slice(0, 120)
    const email = String(body.email || '').trim().toLowerCase().slice(0, 120)
    const telefon = body.telefon ? String(body.telefon).trim().slice(0, 60) : null

    if (!name || !email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Bitte Name und eine gültige E-Mail angeben.' }, { status: 400 })
    }

    const { data: existing } = await supabase
      .from('lehrkraefte')
      .select('id, aktiv')
      .eq('email', email)
      .maybeSingle()

    if (existing) {
      if (existing.aktiv) {
        return NextResponse.json({ ok: true, status: 'already_active' })
      }
      return NextResponse.json({ ok: true, status: 'pending' })
    }

    const { error: insertError } = await supabase
      .from('lehrkraefte')
      .insert({ name, email, telefon, aktiv: false })

    if (insertError) {
      console.error('lehrkraefte insert error:', insertError)
      return NextResponse.json({ ok: false, error: 'db' }, { status: 500 })
    }

    try {
      await resend.emails.send({
        from: 'Lern² Website <info@lern2.com>',
        to: TO_EMAIL,
        subject: `Neue LK-Registrierung: ${name}`,
        html: `
          <h2>👩‍🏫 Neue Lehrkraft-Registrierung</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${telefon || '—'}</p>
          <p style="margin-top:20px;color:#888;font-size:12px">Bitte im Admin-Bereich unter lern2.com/admin freischalten.</p>
        `,
      })
    } catch (mailErr) {
      console.error('resend email error (lk-register):', mailErr)
    }

    return NextResponse.json({ ok: true, status: 'new' })
  } catch (e) {
    console.error('lk-register route error:', e)
    return NextResponse.json({ ok: false, error: 'unknown' }, { status: 500 })
  }
}
