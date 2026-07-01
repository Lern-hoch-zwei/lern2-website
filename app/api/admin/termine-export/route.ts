import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function csvEscape(value: any): string {
  if (value === null || value === undefined) return ''
  const str = String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"'
  }
  return str
}

const STATUS_LABELS: Record<string, string> = {
  geplant: 'Geplant',
  stattgefunden: 'Stattgefunden',
  abgesagt_lk: 'Abgesagt von LK',
  abgesagt_eltern_entschuldigt: 'Abgesagt (entschuldigt)',
  abgesagt_eltern_unentschuldigt: 'Abgesagt (unentschuldigt)',
  verspaetet: 'Verspätet',
}

export async function GET() {
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

  const { data: termine, error } = await supabase
    .from('termine')
    .select('*, lehrkraefte(name, email)')
    .order('datum', { ascending: false })
    .order('uhrzeit', { ascending: false })

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  const header = [
    'Datum', 'Uhrzeit', 'Dauer (Min)', 'Lehrkraft', 'LK-E-Mail',
    'Schüler', 'Fach', 'Status', 'Notizen', 'Eingetragen am',
  ].join(',')

  const rows = (termine || []).map((t: any) => [
    csvEscape(t.datum),
    csvEscape(t.uhrzeit?.slice(0, 5)),
    csvEscape(t.dauer_minuten),
    csvEscape(t.lehrkraefte?.name),
    csvEscape(t.lehrkraefte?.email),
    csvEscape(t.schueler_name),
    csvEscape(t.fach),
    csvEscape(STATUS_LABELS[t.status] || t.status),
    csvEscape(t.notizen),
    csvEscape(new Date(t.created_at).toLocaleString('de-DE')),
  ].join(','))

  const csv = '\uFEFF' + [header, ...rows].join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="lern2-termine-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
