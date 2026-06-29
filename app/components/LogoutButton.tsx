'use client'
import { createBrowserClient } from '@supabase/ssr'

export default function LogoutButton({ loginPath }: { loginPath: string }) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = loginPath
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '6px 14px', borderRadius: '6px', border: '1px solid #D6E4FF',
        backgroundColor: '#fff', color: '#B91C1C', fontSize: '12px', fontWeight: '700',
        cursor: 'pointer', fontFamily: "'Inter', sans-serif",
      }}>
      Abmelden
    </button>
  )
}
