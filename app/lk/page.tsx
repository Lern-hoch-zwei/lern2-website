import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import LkKalender from './LkKalender'

export default async function LkPage() {
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

  const { data: lehrkraft } = await supabase
    .from('lehrkraefte')
    .select('*')
    .eq('email', user?.email)
    .maybeSingle()

  if (!lehrkraft) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '380px' }}>
          <p style={{ fontSize: '16px', color: '#0F2A45', fontWeight: '700' }}>Kein Lehrkraft-Profil gefunden.</p>
          <p style={{ fontSize: '14px', color: '#8A9BAE', marginTop: '8px', lineHeight: '1.6' }}>
            Eingeloggt als: {user?.email || 'unbekannt'}.
          </p>
          <a href="/lk/register" style={{ display: 'inline-block', marginTop: '16px', backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
            Jetzt registrieren
          </a>
        </div>
      </main>
    )
  }

  if (!lehrkraft.aktiv) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '380px' }}>
          <p style={{ fontSize: '16px', color: '#0F2A45', fontWeight: '700' }}>⏳ Dein Zugang wartet auf Freischaltung</p>
          <p style={{ fontSize: '14px', color: '#8A9BAE', marginTop: '8px', lineHeight: '1.6' }}>
            Die Verwaltung schaltet deinen Account in Kürze frei. Du bekommst dann Bescheid.
          </p>
        </div>
      </main>
    )
  }

  const { data: termine } = await supabase
    .from('termine')
    .select('*')
    .eq('lehrkraft_id', lehrkraft.id)
    .order('datum', { ascending: false })
    .order('uhrzeit', { ascending: false })
    .limit(100)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0F2A45', marginBottom: '4px' }}>
          Lern² Kalender
        </h1>
        <p style={{ fontSize: '13px', color: '#8A9BAE', marginBottom: '24px' }}>
          {lehrkraft.name} · {user?.email}
        </p>

        <LkKalender lehrkraftId={lehrkraft.id} initialTermine={termine || []} />
      </div>
    </main>
  )
}
