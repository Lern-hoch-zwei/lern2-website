'use client'
import { useState } from 'react'

export default function LkRegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', telefon: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/lk/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!data.ok) {
        setError(data.error || 'Ein Fehler ist aufgetreten.')
        setLoading(false)
        return
      }
      setDone(true)
    } catch {
      setError('Verbindungsfehler. Bitte später erneut versuchen.')
      setLoading(false)
    }
  }

  const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', marginBottom: '14px', fontFamily: "'Inter', sans-serif" }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F9FC', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 28px', border: '1px solid #D6E4FF', boxShadow: '0 4px 24px rgba(58,134,255,0.08)' }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '48px', width: '48px', borderRadius: '10px', margin: '0 auto 20px', display: 'block' }} />
        <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', textAlign: 'center', marginBottom: '6px' }}>Als Lehrkraft registrieren</h1>

        {done ? (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '14px', color: '#1D9E75', fontWeight: '700', marginBottom: '8px' }}>✅ Registrierung eingegangen!</p>
            <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.6' }}>
              Dein Zugang muss noch von der Verwaltung freigeschaltet werden. Du bekommst Bescheid, sobald es so weit ist.
            </p>
            <a href="/lk/login" style={{ display: 'inline-block', marginTop: '16px', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>← Zurück zum Login</a>
          </div>
        ) : (
          <form onSubmit={submit} style={{ marginTop: '20px' }}>
            <input required placeholder="Vor- und Nachname" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
            <input required type="email" placeholder="E-Mail-Adresse" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
            <input placeholder="Telefon (optional)" value={form.telefon}
              onChange={(e) => setForm({ ...form, telefon: e.target.value })} style={inputStyle} />
            {error && <p style={{ color: '#B91C1C', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
            <button type="submit" disabled={loading}
              style={{ width: '100%', backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
              {loading ? 'Wird gesendet...' : 'Registrieren'}
            </button>
            <a href="/lk/login" style={{ display: 'block', textAlign: 'center', marginTop: '14px', color: '#3A86FF', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>Schon registriert? Zum Login</a>
          </form>
        )}
      </div>
    </main>
  )
}
