"use client";
import { useState } from "react";

const langs = [
  { code: 'de', label: 'Deutsch', flag: 'de', href: '/' },
  { code: 'ar', label: 'العربية', flag: 'sy', href: '/ar' },
  { code: 'tr', label: 'Türkçe', flag: 'tr', href: '/tr' },
  { code: 'fa', label: 'داری', flag: 'af', href: '/fa' },
];

export default function LanguageDropdown({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const active = langs.find(l => l.code === current) || langs[0];

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#F0F4F8', border: 'none', borderRadius: '8px', padding: '7px 12px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', color: '#0F2A45' }}>
        <img src={`https://flagcdn.com/w20/${active.flag}.png`} width="18" alt={active.code} style={{ borderRadius: '2px' }} />
        <span>{active.code.toUpperCase()}</span>
        <span style={{ fontSize: '10px', color: '#8A9BAE' }}>▾</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '44px', right: 0, backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #E8EDF2', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', minWidth: '150px', zIndex: 200, overflow: 'hidden' }}>
          {langs.map(l => (
            <a key={l.code} href={l.href} onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', textDecoration: 'none', color: l.code === current ? '#0F2A45' : '#556678', fontWeight: l.code === current ? '700' : '500', fontSize: '14px', backgroundColor: l.code === current ? '#F0F4F8' : 'transparent' }}>
              <img src={`https://flagcdn.com/w20/${l.flag}.png`} width="18" alt={l.code} style={{ borderRadius: '2px' }} />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

