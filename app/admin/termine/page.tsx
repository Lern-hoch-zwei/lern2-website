import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from '../../components/LogoutButton'
import InactivityLogout from '../../components/InactivityLogout'
import AdminTermineList from './AdminTermineList'

export default async function AdminTerminePage() {
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
    redirect('/admin/login')
  }

  const { data: isAdmin } = await supabase
    .from('admin_users')
    .select('email')
    .ilike('email', user.email.trim().toLowerCase())
    .maybeSingle()

  if (!isAdmin) {
    redirect('/lk')
  }

  const { data: termine } = await supabase
    .from('termine')
    .select('*, lehrkraefte(name, email)')
    .order('datum', { ascending: false })
    .order('uhrzeit', { ascending: false })
    .limit(300)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '24px' }}>
      <InactivityLogout loginPath="/admin/login" />
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0F2A45', marginBottom: '6px' }}>
              Lern² Termine
            </h1>
            <p style={{ fontSize: '13px', color: '#8A9BAE' }}>
              Eingeloggt als: {user.email}
            </p>
          </div>
          <LogoutButton loginPath="/admin/login" />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <a href="/admin" style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>← Zur Lead-Übersicht</a>
          <a href="/api/admin/termine-export" style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>⬇️ Als CSV exportieren</a>
        </div>

        <AdminTermineList initialTermine={termine || []} />
      </div>
    </main>
  )
}
