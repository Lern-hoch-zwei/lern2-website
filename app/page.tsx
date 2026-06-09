"use client";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      {/* NAV */}
      <nav style={{ padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="https://wa.me/4915679576256" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 12px' }}>WhatsApp</a>
          <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Kostenlos anfragen</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="Hintergrund" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.75)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 48px', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>Professionelle Nachhilfe in Kassel</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 62px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', color: '#fff', marginBottom: '20px' }}>
            Wir helfen Ihrem Kind,<br />bessere Noten<br /><span style={{ color: '#FFD60A' }}>zu erreichen.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '36px', maxWidth: '500px' }}>
            Individuelle Nachhilfe und Sprachförderung in Kassel — persönlich, strukturiert und für viele Familien vollständig kostenlos.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '16px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>Jetzt KOSTENLOS anfragen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '16px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#0F2A45', padding: '28px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '100%', l: 'kostenlos über BuT' },
            { n: '5 ★', l: '10+ Google Bewertungen' },
            { n: 'Alle', l: 'Fächer & Klassenstufen' },
            { n: '24h', l: 'Antwortzeit' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '12px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: '26px', fontWeight: '800', color: '#FFD60A' }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ backgroundColor: '#F7F9FC', borderBottom: '1px solid #E8EDF2', padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Kennen Sie das?</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>Viele Eltern stehen vor denselben Herausforderungen.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: '⏰', text: 'Sie haben keine Zeit, Ihrem Kind bei den Hausaufgaben zu helfen?' },
              { icon: '📚', text: 'Sie verstehen den Schulstoff selbst nicht mehr?' },
              { icon: '🤷', text: 'Sie wissen nicht, wo Sie anfangen sollen?' },
              { icon: '🌍', text: 'Deutsch ist nicht Ihre Muttersprache und Sie können nicht helfen?' },
              { icon: '😟', text: 'Ihr Kind versteht den Stoff in der Schule nicht mehr?' },
              { icon: '👨‍🏫', text: 'Der Lehrer hat keine Zeit für individuelle Förderung?' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #E8EDF2', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '15px', color: '#334455', lineHeight: '1.6', fontWeight: '500' }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '20px' }}>Wir haben die Lösung — professionell, persönlich und für viele Familien kostenlos.</p>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt kostenlos anfragen</a>
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 32px' }}>
        <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Über uns</p>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px', color: '#0F2A45' }}>Wir unterstützen Schüler auf dem Weg zu besseren Noten</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
          Seit vielen Jahren begleiten wir Kinder und Jugendliche mit und ohne Migrationshintergrund dabei, ihr volles Potenzial zu entfalten. Mit individueller Nachhilfe und Sprachförderung stärken wir Wissen, Selbstvertrauen und die Basis für eine erfolgreiche Zukunft.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {['Mathematik', 'Deutsch', 'Englisch', 'Physik', 'Chemie', 'Biologie', 'Arabisch', 'Französisch', 'Latein'].map(f => (
            <span key={f} style={{ backgroundColor: '#F0F4F8', color: '#334455', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>Für alle Klassenstufen, auch für Geflüchtete</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
          {['/st1.png', '/st3.jpg', '/st4.png', '/st5.png'].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`Schüler ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section style={{ backgroundColor: '#F7F9FC', borderTop: '1px solid #E8EDF2', borderBottom: '1px solid #E8EDF2', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Ablauf</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>Schritt für Schritt zur besseren Note</h2>
          <p style={{ fontSize: '16px', color: '#556678', textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px' }}>
            Ihr Kind steht bei uns im Mittelpunkt — vom ersten Kennenlernen bis zum gemeinsamen Erfolg.
          </p>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertikale Linie */}
            <div style={{ position: 'absolute', left: '50%', top: '24px', bottom: '24px', width: '2px', backgroundColor: '#E8EDF2', transform: 'translateX(-50%)', zIndex: 0 }}></div>

            {[
              { n: '1', icon: '👥', t: 'Kennenlernen & Analyse', d: 'Wir starten mit einem persönlichen Gespräch und einer gründlichen Analyse, um den Lernstand und die Bedürfnisse Ihres Kindes genau zu verstehen.', side: 'right' },
              { n: '2', icon: '📅', t: 'Individueller Lernplan', d: 'Auf Basis der Analyse erstellen wir einen maßgeschneiderten Lernplan, der gezielt Stärken fördert und Schwächen Schritt für Schritt abbaut.', side: 'left' },
              { n: '3', icon: '🎓', t: 'Begleitung & Erfolgskontrolle', d: 'Wir begleiten Ihr Kind kontinuierlich, passen den Plan bei Bedarf an und halten Sie regelmäßig über die Fortschritte auf dem Laufenden.', side: 'right' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: s.side === 'right' ? 'flex-end' : 'flex-start', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
                {/* Nummer in der Mitte */}
                <div style={{ position: 'absolute', left: '50%', top: '24px', transform: 'translateX(-50%)', width: '48px', height: '48px', backgroundColor: '#FFD60A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', color: '#0F2A45', border: '3px solid #fff', boxShadow: '0 0 0 2px #FFD60A', zIndex: 2 }}>{s.n}</div>
                {/* Karte */}
                <div style={{ width: '45%', backgroundColor: '#fff', border: '1px solid #E8EDF2', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS beraten lassen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: '#F0F4F8', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Angebote</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>Das richtige Paket für jede Familie</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              {
                t: 'Basis', sub: 'Der solide Einstieg.',
                punkte: ['1x 90 Min pro Woche', 'Kleingruppe (max. 4 Schüler)', 'Hausaufgabenbetreuung', 'Lernfortschritt wird dokumentiert'],
                highlight: false
              },
              {
                t: 'Standard', sub: 'Empfohlen für die meisten Familien.',
                punkte: ['2x 90 Min pro Woche', 'Kleingruppe (max. 4 Schüler)', 'Individuelles Lerntempo', 'Regelmäßige Eltern-Feedbacks', 'Fortschrittsanalyse monatlich', 'Prüfungsvorbereitung inklusive', 'Lückenanalyse & gezieltes Üben'],
                highlight: true
              },
              {
                t: 'Premium Excellence', sub: 'Das Rundum-Sorglos-Paket.',
                punkte: ['Exklusive 1-zu-1 Betreuung', 'WhatsApp-Support Mo–Sa', 'Proaktive Erfolgs-Reports', 'Flexible Terminplanung'],
                highlight: false
              },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #0F2A45' : '1px solid #E8EDF2', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: p.highlight ? '#0F2A45' : '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0F2A45', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Empfohlen für die meisten Familien</div>}
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: p.highlight ? '#fff' : '#0F2A45', marginBottom: '6px' }}>Lern² {p.t}</h3>
                <p style={{ fontSize: '13px', color: p.highlight ? 'rgba(255,255,255,0.6)' : '#8A9BAE', marginBottom: '20px' }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {p.punkte.map(punkt => (
                    <li key={punkt} style={{ fontSize: '14px', color: p.highlight ? 'rgba(255,255,255,0.9)' : '#556678', padding: '8px 0', borderBottom: `1px solid ${p.highlight ? 'rgba(255,255,255,0.1)' : '#F0F4F8'}`, display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#FFD60A', fontWeight: '800', flexShrink: 0 }}>✓</span>{punkt}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/4915679576256" style={{ display: 'block', textAlign: 'center', backgroundColor: p.highlight ? '#FFD60A' : '#F0F4F8', color: '#0F2A45', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  {p.t === 'Basis' ? 'Basis anfragen' : p.t === 'Standard' ? 'Standard anfragen' : 'Premium anfragen'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section style={{ backgroundColor: '#F7F9FC', borderTop: '1px solid #E8EDF2', borderBottom: '1px solid #E8EDF2', padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Bewertungen</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>Das sagen unsere Familien</h2>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2" target="_blank" style={{ fontSize: '14px', color: '#556678', textDecoration: 'none' }}>⭐ 5 von 5 Sternen · 10+ Bewertungen auf Google</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { name: 'عمرو ع', text: 'Sehr gute Nachhilfe! Mein Kind hat sich in kurzer Zeit deutlich verbessert. Der Unterricht ist verständlich und freundlich. Wir sind sehr zufrieden!' },
              { name: 'Abod A.', text: 'Die Lehrer sind freundlich und erklären alles klar. Mein Kind macht gute Fortschritte. Wir sind sehr zufrieden und dankbar.' },
              { name: 'Samer A.', text: 'Ich konnte meine Lücken schließen und fühle mich in der Schule deutlich sicherer, besonders in Klassenarbeiten.' },
              { name: 'Abdulkader O.', text: 'دوام التوفيق لمشروعكم الذي يهدف لتعزيز قدرات أبنائنا في اللغة الالمانية والإنكليزية.', translation: 'Stetiger Erfolg für euer Projekt, das die Fähigkeiten unserer Kinder in Deutsch und Englisch stärkt.' },
              { name: 'Nora H.', text: 'شكرا لكم بفضلكم وبفضل جهودكم اولادي اصبحوا افضل وعلاماتهم جيدة.', translation: 'Vielen Dank — dank eurer Bemühungen sind meine Kinder besser geworden und ihre Noten sind gut.' },
            ].map(r => (
              <div key={r.name} style={{ border: '1px solid #E8EDF2', borderRadius: '12px', padding: '24px', backgroundColor: '#fff' }}>
                <div style={{ color: '#FFD60A', fontSize: '14px', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7', marginBottom: '8px' }}>"{r.text}"</p>
                {(r as any).translation && <p style={{ fontSize: '13px', color: '#8A9BAE', lineHeight: '1.6', marginBottom: '12px', fontStyle: 'italic' }}>"{(r as any).translation}"</p>}
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#0F2A45' }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section style={{ position: 'relative', padding: '80px 32px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/st2.jpg" alt="Hintergrund" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.82)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#fff', marginBottom: '16px', lineHeight: '1.3' }}>
            Gemeinsam bauen wir neues Selbstvertrauen auf und schließen Wissenslücken nachhaltig.
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0 32px' }}>
            {['Online oder Zuhause', 'Familienfreundlich', 'Sofort starten'].map(f => (
              <span key={f} style={{ color: '#FFD60A', fontSize: '14px', fontWeight: '600' }}>✓ {f}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/1YJEYPZZNyvxG8os5" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS anfragen</a>
            <a href="https://wa.me/4915679576256" style={{ backgroundColor: 'transparent', color: '#FFD60A', border: '2px solid #FFD60A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section style={{ padding: '48px 32px', textAlign: 'center', borderBottom: '1px solid #E8EDF2' }}>
        <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>Unser Partner, der uns vertraut</p>
        <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
          <img src="/klaroo.png" alt="KlarOo AI" style={{ height: '56px', objectFit: 'contain' }} />
        </a>
      </section>

      {/* FAQ ACCORDION */}
      <section style={{ backgroundColor: '#F7F9FC', padding: '80px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>Häufig gestellte Fragen</h2>
          {[
            { f: 'Wie viele Nachhilfestunden pro Woche sind sinnvoll?', a: 'In der Regel empfehlen wir 1–2 Termine pro Woche. Bei wichtigen Prüfungen kann eine intensivere Betreuung kurzfristig sinnvoll sein.' },
            { f: 'Welche Schulfächer und Jahrgangsstufen deckt unsere Nachhilfe ab?', a: 'Wir bieten Nachhilfe für alle Fächer von der Grundschule bis zum Abitur an — Mathematik, Deutsch, Englisch, Naturwissenschaften und mehr.' },
            { f: 'Kann ich monatlich kündigen?', a: 'Ja — keine langfristige Bindung. Stundenweise oder regelmäßig, ganz wie es passt.' },
            { f: 'Wer unterrichtet bei Lern²?', a: 'Engagierte Lehrkräfte, Studierende und Abiturienten mit sehr guten Noten — die mit Geduld und Motivation arbeiten.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #E8EDF2', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#0F2A45' }}>{q.f}</span>
                <span style={{ fontSize: '20px', color: '#FFD60A', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: '20px' }}>
                  <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.6' }}>{q.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFD60A', padding: '48px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '64px', width: '64px', borderRadius: '12px', objectFit: 'cover', marginBottom: '16px' }} />
          <div style={{ marginBottom: '16px' }}>
            <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer">
              <img src="/klaroo.png" alt="KlarOo AI" style={{ height: '32px', objectFit: 'contain', opacity: 0.7 }} />
            </a>
          </div>
          <p style={{ fontSize: '14px', color: '#0F2A45', marginBottom: '20px', opacity: 0.7 }}>© 2026 Lern² · Kassel · Alle Rechte vorbehalten</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="https://wa.me/4915679576256" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp</a>
            <a href="https://www.instagram.com/lern_hoch_2" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Instagram</a>
            <a href="https://www.facebook.com/share/1EHvQ67ZQ8/" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Facebook</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '13px', color: '#0F2A45', opacity: 0.6 }}>Mit ❤️ entwickelt für die Zukunft unserer Kinder</p>
        </div>
      </footer>

    </main>
  )
}
