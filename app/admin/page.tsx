import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import AdminLeadList from './AdminLeadList'

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

  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0F2A45', marginBottom: '6px' }}>
          Lern² Admin
        </h1>
        <p style={{ fontSize: '13px', color: '#8A9BAE', marginBottom: '24px' }}>
          Eingeloggt als: {user?.email || 'unbekannt'}
        </p>

        <AdminLeadList initialLeads={leads || []} />
      </div>
    </main>
  )
}
