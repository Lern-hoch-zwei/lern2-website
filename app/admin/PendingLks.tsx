'use client'
import { useState } from 'react'

type PendingLk = {
  id: string
  name: string
  email: string
  telefon?: string
  created_at: string
}

export default function PendingLks({ initialPending }: { initialPending: PendingLk[] }) {
  const [pending, setPending] = useState(initialPending)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const approve = async (id: string) => {
    setSavingId(id)
    setError(null)
    try {
      const res = await fetch('/api/admin/lk-approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      if (!data.ok) {
        setError('Freischalten fehlgeschlagen: ' + (data.error || 'unbekannter Fehler'))
        setSavingId(null)
        return
      }
      setPending(pending.filter(p => p.id !== id))
    } catch {
      setError('Verbindungsfehler beim Freischalten.')
    }
    setSavingId(null)
  }

  if (pending.length === 0) return null

  return (
    <div style={{ backgroundColor: '#FFF8DC', border: '1px solid #FFD60A', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#0F2A45', marginBottom: '10px' }}>
        ⏳ Wartende LK-Registrierungen ({pending.length})
      </h2>
      {error && (
        <p style={{ color: '#B91C1C', fontSize: '13px', marginBottom: '10px', backgroundColor: '#FFF5F5', padding: '8px', borderRadius: '6px' }}>{error}</p>
      )}
      {pending.map((lk) => (
        <div key={lk.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: '1px solid rgba(255,214,10,0.3)' }}>
          <div>
            <strong style={{ fontSize: '14px', color: '#0F2A45' }}>{lk.name}</strong>
            <p style={{ fontSize: '12px', color: '#556678', margin: '2px 0 0' }}>{lk.email} {lk.telefon && `· ${lk.telefon}`}</p>
          </div>
          <button
            onClick={() => approve(lk.id)}
            disabled={savingId === lk.id}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#1D9E75', color: '#fff', fontWeight: '700', fontSize: '12px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
            {savingId === lk.id ? '...' : '✓ Freischalten'}
          </button>
        </div>
      ))}
    </div>
  )
}
