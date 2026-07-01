import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminLeadList from './AdminLeadList'
import PendingLks from './PendingLks'
import LogoutButton from '../components/LogoutButton'
import InactivityLogout from '../components/InactivityLogout'

export default async function AdminPage() {
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

  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  const { data: pendingLks } = await supabase
    .from('lehrkraefte')
    .select('*')
    .eq('aktiv', false)
    .order('created_at', { ascending: false })

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '24px' }}>
      <InactivityLogout loginPath="/admin/login" />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0F2A45', marginBottom: '6px' }}>
              Lern² Admin
            </h1>
            <p style={{ fontSize: '13px', color: '#8A9BAE' }}>
              Eingeloggt als: {user.email}
            </p>
          </div>
          <LogoutButton loginPath="/admin/login" />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <a href="/api/admin/export" style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>⬇️ Leads als CSV</a>
          <a href="/admin/termine" style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>📅 Termine ansehen</a>
          <a href="/admin/schueler" style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid #D6E4FF', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>🎓 Schüler verwalten</a>
        </div>

        <PendingLks initialPending={pendingLks || []} />

        <AdminLeadList initialLeads={leads || []} />
      </div>
    </main>
  )
}
