'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function login() {
    setLoading(true)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:
          `${window.location.origin}/admin`
      }
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage(
        'Magic Link wurde versendet.'
      )
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        maxWidth: 420,
        margin: '80px auto',
        padding: 20
      }}
    >
      <h1>Lern² Verwaltung</h1>

      <input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        style={{
          width:'100%',
          padding:12,
          marginTop:20
        }}
      />

      <button
        onClick={login}
        disabled={loading}
        style={{
          width:'100%',
          marginTop:20,
          padding:12
        }}
      >
        {loading ? 'Senden...' : 'Magic Link senden'}
      </button>

      <p style={{marginTop:20}}>
        {message}
      </p>

    </main>
  )
}
