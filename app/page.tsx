export default function Home() {
  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      {/* NAV */}
      <nav style={{ padding: '0 24px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F0F0', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <span style={{ fontSize: '20px', fontWeight: '800', color: '#0A0A0A' }}>Lern²</span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/4915679576256" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 12px' }}>WhatsApp</a>
          <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px' }}>Kostenlos anfragen</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '560px', overflow: 'hidden' }}>
        <div style={{ padding: '60px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFFBEA', border: '1px solid #FFE566', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#7A6500', fontWeight: '500' }}>100% kostenlos über das BuT-Paket</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-1.5px', color: '#0A0A0A', marginBottom: '16px' }}>
            Wir helfen Ihrem Kind,<br />bessere Noten<br /><span style={{ color: '#FFD60A' }}>zu erreichen.</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.7', marginBottom: '32px', maxWidth: '420px' }}>
            Individuelle Nachhilfe und Sprachförderung in Kassel und Umgebung, damit Ihr Kind sein Potenzial entfaltet.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS anfragen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: '#F5F5F5', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '300px' }}>
          <img src="/full.png" alt="Lern² Nachhilfe" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0', padding: '28px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '100%', l: 'kostenlos über BuT' },
            { n: '5 ★', l: '10+ Google Bewertungen' },
            { n: 'Alle', l: 'Fächer & Klassenstufen' },
            { n: '24h', l: 'Antwortzeit' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '12px 16px' }}>
              <div style={{ fontSize: '26px', fontWeight: '800', color: '#0A0A0A' }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ÜBER UNS */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Über uns</p>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px' }}>Wir unterstützen Schüler auf dem Weg zu besseren Noten</h2>
        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
          Seit vielen Jahren begleiten wir Kinder und Jugendliche mit und ohne Migrationshintergrund dabei, ihr volles Potenzial zu entfalten. Mit individueller Nachhilfe und Sprachförderung stärken wir Wissen, Selbstvertrauen und die Basis für eine erfolgreiche Zukunft.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {['Mathematik', 'Physik', 'Chemie', 'Biologie', 'Arabisch', 'Deutsch', 'Englisch', 'Französisch'].map(f => (
            <span key={f} style={{ backgroundColor: '#F5F5F5', color: '#444', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>Für alle Klassenstufen, auch für Geflüchtete</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {['/st1.png', '/st2.jpg', '/st3.jpg', '/st4.png', '/st5.png'].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`Schüler ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Ablauf</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px', textAlign: 'center' }}>Schritt für Schritt zur besseren Note</h2>
          <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Ihr Kind steht bei uns im Mittelpunkt — vom ersten Kennenlernen bis zum gemeinsamen Erfolg.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { n: '1', icon: '👥', t: 'Kennenlernen & Analyse', d: 'Wir starten mit einem persönlichen Gespräch und einer gründlichen Analyse, um den Lernstand und die Bedürfnisse Ihres Kindes genau zu verstehen.' },
              { n: '2', icon: '📅', t: 'Individueller Lernplan', d: 'Auf Basis der Analyse erstellen wir einen maßgeschneiderten Lernplan, der gezielt Stärken fördert und Schwächen Schritt für Schritt abbaut.' },
              { n: '3', icon: '🎓', t: 'Begleitung & Erfolgskontrolle', d: 'Wir begleiten Ihr Kind kontinuierlich, passen den Plan bei Bedarf an und halten Sie regelmäßig über die Fortschritte auf dem Laufenden.' },
            ].map(s => (
              <div key={s.n} style={{ backgroundColor: '#fff', border: '1px solid #EBEBEB', borderRadius: '12px', padding: '28px' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#FFD60A', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '15px', marginBottom: '16px' }}>{s.n}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px' }}>{s.t}</h3>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS beraten lassen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: '#F5F5F5', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Angebote</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center' }}>Unsere Kursangebote</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Basis', sub: 'Der solide Einstieg. Ideal, um den aktuellen Schulstoff aufzufrischen.', punkte: ['1x 90 Min pro Woche in Kleingruppe (max. 4 Schüler)', 'Hilfe bei aktuellen Hausaufgaben', 'Solide Grundbetreuung'], highlight: false },
              { t: 'Standard', sub: 'Kontinuierliche Förderung für bessere Noten.', punkte: ['2x 90 Min pro Woche in Kleingruppe (max. 4 Schüler)', 'Individuelles Lerntempo statt Massenabfertigung', 'Regelmäßige Feedback-Gespräche für Eltern'], highlight: true },
              { t: 'Premium Excellence', sub: 'Das Rundum-Sorglos-Paket.', punkte: ['Exklusive 1-zu-1 Betreuung', 'Bevorzugter WhatsApp-Support (Mo-Sa)', 'Proaktive Erfolgs-Reports für Eltern'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #FFD60A' : '1px solid #EBEBEB', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0A0A0A', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Beliebteste Wahl</div>}
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0A0A0A', marginBottom: '6px' }}>Lern² {p.t}</h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '20px' }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {p.punkte.map(punkt => (
                    <li key={punkt} style={{ fontSize: '14px', color: '#555', padding: '8px 0', borderBottom: '1px solid #F5F5F5', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#FFD60A', fontWeight: '800', flexShrink: 0 }}>✓</span>{punkt}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/4915679576256" style={{ display: 'block', textAlign: 'center', backgroundColor: p.highlight ? '#FFD60A' : '#F5F5F5', color: '#0A0A0A', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>{p.t === 'Basis' ? 'Basis-Paket anfragen' : p.t === 'Standard' ? 'Standard-Paket anfragen' : 'Premium-Paket anfragen'}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Bewertungen</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '8px', textAlign: 'center' }}>Sie werden uns lieben</h2>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2" target="_blank" style={{ fontSize: '14px', color: '#666', textDecoration: 'none' }}>⭐ 5 von 5 Sternen · 10+ Bewertungen auf Google</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { name: 'عمرو ع', text: 'Sehr gute Nachhilfe! Mein Kind hat sich in kurzer Zeit deutlich verbessert. Der Unterricht ist verständlich und freundlich. Wir sind sehr zufrieden und können es nur weiterempfehlen.' },
              { name: 'Abod A.', text: 'Die Nachhilfe ist sehr gut. Die Lehrer sind freundlich und erklären alles klar und verständlich. Mein Kind lernt dort viel und macht gute Fortschritte.' },
              { name: 'Samer A.', text: 'Ich habe bei Lern² Nachhilfe genommen und bin sehr zufrieden. Ich konnte meine Lücken schließen und fühle mich in der Schule deutlich sicherer, besonders in Klassenarbeiten.' },
              { name: 'Abdulkader O.', text: 'دوام التوفيق لمشروعكم الذي يهدف لتعزيز قدرات أبنائنا في اللغة الالمانية والإنكليزية.', translation: 'Stetiger Erfolg für euer Projekt, das darauf abzielt, die Fähigkeit unserer Kinder in der deutschen und englischen Sprache zu stärken.' },
              { name: 'Nora H.', text: 'شكرا لكم بفضلكم وبفضل جهودكم اولادي اصبحوا افضل وعلاماتهم جيدة شكرا لجهودكم.', translation: 'Vielen Dank. Dank euch und dank eurer Bemühungen sind meine Kinder besser geworden und ihre Noten sind gut.' },
            ].map(r => (
              <div key={r.name} style={{ border: '1px solid #EBEBEB', borderRadius: '12px', padding: '24px', backgroundColor: '#fff' }}>
                <div style={{ color: '#FFD60A', fontSize: '14px', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '8px' }}>"{r.text}"</p>
                {(r as any).translation && <p style={{ fontSize: '13px', color: '#999', lineHeight: '1.6', marginBottom: '12px', fontStyle: 'italic' }}>"{(r as any).translation}"</p>}
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#0A0A0A' }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section style={{ backgroundColor: '#2F2B29', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#FAFAF7', marginBottom: '16px', lineHeight: '1.3' }}>
            Gemeinsam bauen wir neues Selbstvertrauen auf und schließen Wissenslücken nachhaltig.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px', marginTop: '24px' }}>
            {['Online oder Zuhause', 'Familienfreundliche Leistung', 'Beginne sofort mit dem Lernen'].map(f => (
              <span key={f} style={{ color: '#FFD60A', fontSize: '14px', fontWeight: '500' }}>✓ {f}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS beraten lassen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: 'transparent', color: '#FFD60A', border: '2px solid #FFD60A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* BuT */}
      <section style={{ backgroundColor: '#FFFBEA', borderTop: '1px solid #FFE566', borderBottom: '1px solid #FFE566', padding: '72px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px', color: '#0A0A0A' }}>Lern² Initiative: Chancengleichheit durch Bildung</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>Wir glauben, dass jedes Kind die beste Förderung verdient, unabhängig vom Einkommen der Eltern. Beziehen Sie <strong>Wohngeld, Bürgergeld</strong> oder <strong>Kinderzuschuss</strong>? Dann ist die Nachhilfe für Sie zu 100% kostenlos.</p>
          </div>
          <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0A0A0A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>Jetzt Anspruch kostenlos prüfen</a>
        </div>
      </section>

      {/* PARTNER */}
      <section style={{ padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #F0F0F0' }}>
        <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Unser Partner, der uns vertraut</p>
        <a href="https://klarooai.com/de" target="_blank" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0A0A0A' }}>KlarOo <span style={{ color: '#FFD60A' }}>AI</span></span>
        </a>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#FAFAFA', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#BBB', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center' }}>Häufig gestellte Fragen</h2>
          {[
            { f: 'Wie viele Nachhilfestunden pro Woche sind sinnvoll?', a: 'In der Regel empfehlen wir 1–2 Termine pro Woche, je nach aktuellem Lernstand und Ziel. Bei wichtigen Prüfungen kann eine intensivere Betreuung kurzfristig sinnvoll sein.' },
            { f: 'Welche Schulfächer und Jahrgangsstufen deckt unsere Nachhilfe ab?', a: 'Wir bieten Nachhilfe für alle gängigen Schulfächer wie Mathematik, Deutsch, Englisch und Naturwissenschaften von der Grundschule bis zum Abitur an.' },
            { f: 'Wie flexibel sind die Verträge? Kann ich monatlich kündigen?', a: 'Bei uns bist du flexibel: Sie können sowohl stundenweise buchen als auch regelmäßige wöchentliche Termine vereinbaren — ohne langfristige Bindung.' },
            { f: 'Wer unterrichtet bei Lern² und welche Qualifikationen haben die Nachhilfelehrer?', a: 'Unser Team besteht aus engagierten Lehrkräften, Studierenden und Abiturientinnen und Abiturienten mit sehr guten Noten, die mit Geduld und Motivation arbeiten.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #EBEBEB', padding: '24px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0A0A0A', marginBottom: '8px' }}>{q.f}</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>{q.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFD60A', padding: '48px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: '800', color: '#0A0A0A', marginBottom: '16px' }}>Lern²</div>
          <p style={{ fontSize: '14px', color: '#2F2B29', marginBottom: '20px' }}>© 2026 Lern² · Kassel · Alle Rechte vorbehalten</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="https://wa.me/4915679576256" style={{ color: '#2F2B29', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp</a>
            <a href="https://www.instagram.com/lern_hoch_2" style={{ color: '#2F2B29', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Instagram</a>
            <a href="https://www.facebook.com/share/1EHvQ67ZQ8/" style={{ color: '#2F2B29', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Facebook</a>
            <a href="https://lern2.com/impressum" style={{ color: '#2F2B29', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="https://lern2.com/datenschutz" style={{ color: '#2F2B29', fontSize: '14px', textDecoration: 'none' }}>Datenschutzrichtlinie</a>
          </div>
          <p style={{ fontSize: '13px', color: '#2F2B29' }}>Mit ❤️ entwickelt für die Zukunft unserer Kinder</p>
        </div>
      </footer>

    </main>
  )
}
