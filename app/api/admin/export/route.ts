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

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  const columns = [
    'created_at', 'vorname_eltern', 'nachname_eltern', 'telefon', 'email',
    'strasse', 'plz_ort', 'vorname_kind', 'nachname_kind', 'alter_kind',
    'klassenstufe', 'schule', 'faecher', 'schwierigkeiten', 'unterrichtsform',
    'zeiten', 'staatl_unterstuetzung', 'bewilligungsbescheid', 'sprache_familie',
    'status', 'lk1', 'lk2', 'lk3', 'notizen', 'lang', 'source',
  ]

  const header = columns.join(',')
  const rows = (leads || []).map((lead: any) =>
    columns.map(col => csvEscape(lead[col])).join(',')
  )

  const csv = '\uFEFF' + [header, ...rows].join('\n')

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="lern2-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
