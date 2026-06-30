'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

function AdminLoginForm() {
  const [email, setEmail] = useState(() => typeof window !== 'undefined' ? localStorage.getItem('lern2_admin_email') || '' : '')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const errParam = searchParams.get('error')
    if (errParam === 'expired_link') {
      setError('Dieser Login-Link ist abgelaufen oder ungültig. Bitte fordere einen neuen an.')
    } else if (errParam === 'missing_code') {
      setError('Der Login-Link war unvollständig. Bitte fordere einen neuen an.')
    }
  }, [searchParams])

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/admin/auth/callback` },
    })
    setLoading(false)
    if (error) setError(error.message)
    else {
      localStorage.setItem('lern2_admin_email', email)
      setSent(true)
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
      <div style={{ maxWidth: '380px', width: '100%', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 28px', border: '1px solid #D6E4FF', boxShadow: '0 4px 24px rgba(58,134,255,0.08)' }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '48px', width: '48px', borderRadius: '10px', margin: '0 auto 20px', display: 'block' }} />
        <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', textAlign: 'center', marginBottom: '6px' }}>Lern² Admin</h1>
        {sent ? (
          <p style={{ fontSize: '14px', color: '#556678', textAlign: 'center', marginTop: '16px' }}>
            ✅ Login-Link wurde an <strong>{email}</strong> gesendet. Bitte E-Mail öffnen.
          </p>
        ) : (
          <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.com"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', marginBottom: '14px', fontFamily: "'Inter', sans-serif" }}
            />
            {error && <p style={{ color: '#B91C1C', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
            <button type="submit" disabled={loading}
              style={{ width: '100%', backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
              {loading ? 'Sende...' : 'Login-Link senden'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginForm />
    </Suspense>
  )
}
