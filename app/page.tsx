export default function Home() {
  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      <nav style={{ padding: '0 48px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F0F0', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <span style={{ fontSize: '20px', fontWeight: '800', color: '#0A0A0A' }}>Lern²</span>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href="https://wa.me/4915679576256" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 14px' }}>WhatsApp</a>
          <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Kostenlos anfragen</a>
        </div>
      </nav>

      {/* HERO MIT BILD */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '580px', overflow: 'hidden' }}>
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFFBEA', border: '1px solid #FFE566', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#7A6500', fontWeight: '500' }}>100% kostenlos über das BuT-Paket</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-1.5px', color: '#0A0A0A', marginBottom: '20px' }}>
            Ihr Kind verdient<br />die beste<br /><span style={{ color: '#FFD60A' }}>Förderung.</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#666', lineHeight: '1.7', marginBottom: '36px', maxWidth: '420px' }}>
            Individuelle Nachhilfe in Kassel — professionell, flexibel und für viele Familien vollständig kostenlos.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt kostenlos anfragen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: '#F5F5F5', color: '#0A0A0A', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <img src="/full.png" alt="Lern² Nachhilfe" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0', padding: '32px 48px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '100%', l: 'kostenlos über BuT' },
            { n: '5 ★', l: '10+ Google Bewertungen' },
            { n: 'Alle', l: 'Fächer & Klassenstufen' },
            { n: '24h', l: 'Antwortzeit' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '150px', textAlign: 'center', padding: '16px 24px', borderRight: i < 3 ? '1px solid #F0F0F0' : 'none' }}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#0A0A0A' }}>{s.n}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '96px 48px' }}>
        <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Ablauf</p>
        <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px' }}>In 3 Schritten zum Erfolg.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { n: '1', t: 'Kennenlernen', d: 'Kostenloses Erstgespräch — wir analysieren Lernstand und Ziele.' },
            { n: '2', t: 'Individueller Plan', d: 'Maßgeschneiderter Lernplan gezielt auf Ihr Kind abgestimmt.' },
            { n: '3', t: 'Erfolgskontrolle', d: 'Regelmäßige Rückmeldungen — Sie sind immer informiert.' },
          ].map(s => (
            <div key={s.n} style={{ backgroundColor: '#FAFAFA', border: '1px solid #EBEBEB', borderRadius: '12px', padding: '32px' }}>
              <div style={{ width: '36px', height: '36px', backgroundColor: '#FFD60A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', marginBottom: '20px' }}>{s.n}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{s.t}</h3>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAKETE */}
      <section style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0', padding: '96px 48px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Angebote</p>
          <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center' }}>Das richtige Paket.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Basis', sub: 'Der solide Einstieg', punkte: ['1x 90 Min / Woche', 'Kleingruppe max. 4 Schüler', 'Hausaufgabenbetreuung'], highlight: false },
              { t: 'Standard', sub: 'Für bessere Noten', punkte: ['2x 90 Min / Woche', 'Individuelles Lerntempo', 'Eltern-Feedback regelmäßig'], highlight: true },
              { t: 'Premium', sub: 'Rundum-Betreuung', punkte: ['1-zu-1 Unterricht', 'WhatsApp-Support Mo–Sa', 'Proaktive Erfolgsreports'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #FFD60A' : '1px solid #EBEBEB', borderRadius: '12px', padding: '32px', position: 'relative', backgroundColor: '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0A0A0A', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>}
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0A0A0A', marginBottom: '6px' }}>Lern² {p.t}</h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '24px' }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
                  {p.punkte.map(punkt => (
                    <li key={punkt} style={{ fontSize: '14px', color: '#555', padding: '10px 0', borderBottom: '1px solid #F5F5F5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#FFD60A', fontWeight: '800' }}>✓</span>{punkt}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/4915679576256" style={{ display: 'block', textAlign: 'center', backgroundColor: p.highlight ? '#FFD60A' : '#F5F5F5', color: '#0A0A0A', padding: '13px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Anfragen</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuT */}
      <section style={{ backgroundColor: '#FFFBEA', borderTop: '1px solid #FFE566', borderBottom: '1px solid #FFE566', padding: '72px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px' }}>Nachhilfe kostenlos durch BuT.</h2>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.7', marginBottom: '28px' }}>Beziehen Sie Wohngeld, Bürgergeld oder Kinderzuschuss? Dann übernimmt der Staat die Kosten — wir erledigen den Papierkram.</p>
          <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Anspruch kostenlos prüfen</a>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '96px 48px' }}>
        <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Bewertungen</p>
        <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center' }}>Das sagen unsere Familien.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { name: 'عمرو ع', text: 'Sehr gute Nachhilfe! Mein Kind hat sich in kurzer Zeit deutlich verbessert.' },
            { name: 'Abod A.', text: 'Die Lehrer sind freundlich und erklären alles klar. Mein Kind macht gute Fortschritte.' },
            { name: 'Samer A.', text: 'Ich konnte meine Lücken schließen und fühle mich in der Schule deutlich sicherer.' },
          ].map(r => (
            <div key={r.name} style={{ border: '1px solid #EBEBEB', borderRadius: '12px', padding: '28px', backgroundColor: '#fff' }}>
              <div style={{ color: '#FFD60A', fontSize: '16px', marginBottom: '14px' }}>★★★★★</div>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>"{r.text}"</p>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#0A0A0A' }}>{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #F0F0F0', padding: '40px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span style={{ fontSize: '18px', fontWeight: '800' }}>Lern²</span>
          <p style={{ fontSize: '13px', color: '#AAA', marginTop: '4px' }}>Kassel · info@lern2.de · +49 15679 576256</p>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/4915679576256" style={{ color: '#AAA', fontSize: '13px', textDecoration: 'none' }}>WhatsApp</a>
          <a href="https://www.instagram.com/lern_hoch_2" style={{ color: '#AAA', fontSize: '13px', textDecoration: 'none' }}>Instagram</a>
          <a href="https://lern2.com/impressum" style={{ color: '#AAA', fontSize: '13px', textDecoration: 'none' }}>Impressum</a>
          <a href="https://lern2.com/datenschutz" style={{ color: '#AAA', fontSize: '13px', textDecoration: 'none' }}>Datenschutz</a>
        </div>
        <p style={{ fontSize: '13px', color: '#CCC' }}>© 2026 Lern²</p>
      </footer>

    </main>
  )
}
