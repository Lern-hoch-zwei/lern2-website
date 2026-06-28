'use client'
import { useState } from 'react'

type Lead = {
  id: string
  name?: string
  tel?: string
  kind?: string
  vorname_eltern?: string
  nachname_eltern?: string
  vorname_kind?: string
  telefon?: string
  fach?: string
  faecher?: string
  status?: string
  notizen?: string
  sprache_familie?: string
  created_at: string
}

const STATUS_OPTIONS = [
  { value: 'neu', label: 'Neu', color: '#3A86FF' },
  { value: 'kontaktiert', label: 'Kontaktiert', color: '#F2A623' },
  { value: 'im_unterricht', label: 'Im Unterricht', color: '#1D9E75' },
  { value: 'abgelehnt', label: 'Abgelehnt', color: '#E24B4A' },
]

function statusColor(status: string) {
  return STATUS_OPTIONS.find(s => s.value === status)?.color || '#8A9BAE'
}

export default function AdminLeadList({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState('')
  const [savingId, setSavingId] = useState<string | null>(null)
  const [openNoteId, setOpenNoteId] = useState<string | null>(null)
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({})

  const updateStatus = async (id: string, status: string) => {
    setSavingId(id)
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l))
    await fetch('/api/admin/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setSavingId(null)
  }

  const saveNote = async (id: string) => {
    const notizen = noteDrafts[id] ?? ''
    setSavingId(id)
    setLeads(leads.map(l => l.id === id ? { ...l, notizen } : l))
    await fetch('/api/admin/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: leads.find(l => l.id === id)?.status, notizen }),
    })
    setSavingId(null)
    setOpenNoteId(null)
  }

  const filtered = leads.filter(l => {
    if (!search.trim()) return true
    const haystack = [
      l.name, l.vorname_eltern, l.nachname_eltern, l.vorname_kind, l.kind,
      l.tel, l.telefon, l.fach, l.faecher,
    ].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(search.toLowerCase())
