export default function Impressum() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', padding: '0 0 80px' }}>

      <nav style={{ padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover' }} />
        </a>
        <a href="/" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>← Zurück zur Startseite</a>
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '20px', border: '1px solid #D6E4FF' }}>Rechtliches</div>
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0F2A45', marginBottom: '48px', letterSpacing: '-1px' }}>Impressum</h1>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #E8EDF2', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Angaben gemäß § 5 DDG</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8' }}>
            <strong style={{ color: '#0F2A45' }}>Lern²</strong><br />
            Grenzweg 15<br />
            34125 Kassel
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #E8EDF2', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Kontakt</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8' }}>
            Telefon: <a href="tel:+4915679576256" style={{ color: '#3A86FF', textDecoration: 'none' }}>+49 15679 576256</a><br />
            E-Mail: <a href="mailto:info@lern2.com" style={{ color: '#3A86FF', textDecoration: 'none' }}>info@lern2.com</a>
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #E8EDF2', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Verantwortlich für den Inhalt</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8' }}>
            Gemäß § 55 Abs. 2 RStV:<br />
            <strong style={{ color: '#0F2A45' }}>Lern²</strong><br />
            Grenzweg 15, 34125 Kassel
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #E8EDF2' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Verbraucherstreitbeilegung</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8' }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  )
}
