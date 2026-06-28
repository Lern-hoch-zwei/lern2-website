import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

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

  const { data: leads, error: leadsError } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50)

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0F2A45', marginBottom: '6px' }}>
          Lern² Admin
        </h1>
        <p style={{ fontSize: '13px', color: '#8A9BAE', marginBottom: '24px' }}>
          Eingeloggt als: {user?.email || 'unbekannt'}
          </p>
        {leadsError && (
          <p style={{ color: 'red', fontSize: '13px', backgroundColor: '#FFF5F5', padding: '10px', borderRadius: '8px' }}>
            Fehler beim Laden: {leadsError.message}
          </p>
        )}
        <p style={{ display: 'none' }}>
        </p>

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #D6E4FF', padding: '8px' }}>
          {leads && leads.length > 0 ? (
            leads.map((lead: any) => (
              <div key={lead.id} style={{ padding: '14px 16px', borderBottom: '1px solid #F0F4F8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#0F2A45', fontSize: '15px' }}>
                    {lead.vorname_eltern || lead.name || 'Unbekannt'} {lead.nachname_eltern || ''}
                  </strong>
                  <span style={{ fontSize: '12px', color: '#8A9BAE' }}>
                    {new Date(lead.created_at).toLocaleDateString('de-DE')}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#556678', marginTop: '4px' }}>
                  📞 {lead.telefon || lead.tel || '—'} · Kind: {lead.vorname_kind || lead.kind || '—'} · Status: {lead.status || 'neu'}
                </p>
              </div>
            ))
          ) : (
            <p style={{ padding: '20px', color: '#8A9BAE', textAlign: 'center' }}>Noch keine Anmeldungen vorhanden.</p>
          )}
        </div>
      </div>
    </main>
  )
}
