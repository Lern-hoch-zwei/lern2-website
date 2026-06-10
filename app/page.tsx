"use client";
import { useState } from "react";
import LanguageDropdown from "./components/LanguageDropdown";

const WA = "4915679576256";
const IG = "https://www.instagram.com/lern_hoch_zwei";
const FB = "https://www.facebook.com/share/1EHvQ67ZQ8/";

const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const msgs = {
  basis: `السلام عليكم فريق Lern²،\nأنا مهتم بباقة Basis (مرة في الأسبوع).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Basis-Paket (1x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  standard: `السلام عليكم فريق Lern²،\nأنا مهتم بباقة Standard (مرتين في الأسبوع).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Standard-Paket (2x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  premium: `السلام عليكم فريق Lern²،\nأنا مهتم بباقة Premium (تدريس فردي).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Premium-Paket (1-zu-1).\nKönnen Sie mir mehr Infos geben?`,
  but: `السلام عليكم فريق Lern²،\nأريد معرفة ما إذا كان طفلي يحق له الحصول على دروس مجانية عبر BuT.\n\nAsSalamu aleikum Lern²-Team,\nich möchte wissen ob mein Kind Anspruch auf kostenlose Nachhilfe über BuT hat.`,
  hero: `السلام عليكم فريق Lern²،\nأريد الاستفسار عن خدمات الدروس الخصوصية.\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für Nachhilfe bei Lern².\nKönnen Sie mir mehr Infos geben?`,
  general: `السلام عليكم فريق Lern²،\nأريد الاستفسار عن خدمات Lern².\n\nAsSalamu aleikum Lern²-Team,\nich möchte mehr über Lern² erfahren.`,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', kind: '', fach: '', tel: '' });

  const handleSubmit = () => {
    if (!form.name || !form.tel) return;
    const msg = `السلام عليكم فريق Lern²،\n\nAsSalamu aleikum Lern²-Team,\n\nNeue Anfrage über die Website:\n\n👤 Name: ${form.name}\n👶 Kind: ${form.kind}\n📚 Fach: ${form.fach}\n📞 Telefon: ${form.tel}\n\nBitte um Rückruf. Vielen Dank!`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>
      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .nav-wa { display: none !important; }
          .hero-section { min-height: 480px !important; }
          .hero-content { padding: 48px 20px 60px !important; }
          .hero-h1 { font-size: 32px !important; letter-spacing: -1px !important; }
          .hero-p { font-size: 15px !important; }
          .stats-bar { padding: 20px 12px !important; }
          .stats-item { min-width: 80px !important; padding: 8px 10px !important; }
          .stats-n { font-size: 18px !important; }
          .stats-l { font-size: 10px !important; }
          .section-pad { padding: 52px 20px !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .timeline-line { display: none !important; }
          .timeline-card { width: 90% !important; margin: 0 auto 32px !important; justify-content: center !important; }
          .timeline-num { left: calc(5% + 20px) !important; }
          .pakete-grid { grid-template-columns: 1fr !important; }
          .initiative-inner { flex-direction: column !important; padding: 28px 20px !important; }
          .footer-links { gap: 12px !important; }
          .nav-inner { padding: 0 16px !important; height: 60px !important; }
          .form-row { flex-direction: column !important; }
        }
      `}</style>

      {/* FLOATING WA BUTTON */}
      <a href={`https://wa.me/${WA}`} target="_blank" style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, boxShadow: '0 4px 16px rgba(37,211,102,0.4)', textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L0 24l6.337-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.18-1.355l-.371-.22-3.862.914.978-3.768-.242-.388A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      {/* NAV */}
       <nav style={{ padding: '0 32px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '42px', width: '42px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LanguageDropdown current="de" />
          <a className="nav-wa" href={waLink(msgs.general)} target="_blank" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 10px' }}>WhatsApp</a>
          <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>Kostenlos anfragen</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="Hintergrund" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.78)' }}></div>
        </div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, padding: '80px 48px', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(58,134,255,0.2)', border: '1px solid rgba(58,134,255,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>Professionelle Nachhilfe in Kassel</span>
          </div>
          <h1 className="hero-h1" style={{ fontSize: 'clamp(30px, 5vw, 58px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', color: '#fff', marginBottom: '18px' }}>
            Wir helfen Ihrem Kind,<br />bessere Noten<br /><span style={{ color: '#FFD60A' }}>zu erreichen.</span>
          </h1>
          <p className="hero-p" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '500px' }}>
            Individuelle Nachhilfe und Sprachförderung in Kassel — persönlich, strukturiert und für viele Familien vollständig kostenlos.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS anfragen</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar" style={{ backgroundColor: '#0F2A45', padding: '24px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '100%', l: 'kostenlos über BuT' },
            { n: '5 ★', l: '10 Google Bewertungen' },
            { n: 'Alle', l: 'Fächer & Klassen' },
            { n: '24h', l: 'Antwortzeit' },
          ].map((s, i) => (
            <div key={i} className="stats-item" style={{ flex: '1', minWidth: '120px', textAlign: 'center', padding: '10px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div className="stats-n" style={{ fontSize: '24px', fontWeight: '800', color: '#FFD60A' }}>{s.n}</div>
              <div className="stats-l" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '3px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Kennen Sie das?</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Viele Eltern stehen vor denselben Herausforderungen.</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              { icon: '⏰', text: 'Sie haben keine Zeit, Ihrem Kind bei den Hausaufgaben zu helfen?' },
              { icon: '📚', text: 'Sie verstehen den Schulstoff selbst nicht mehr?' },
              { icon: '🤷', text: 'Sie wissen nicht, wo Sie anfangen sollen?' },
              { icon: '🌍', text: 'Deutsch ist nicht Ihre Muttersprache und Sie können nicht helfen?' },
              { icon: '😟', text: 'Ihr Kind versteht den Stoff in der Schule nicht mehr?' },
              { icon: '👨‍🏫', text: 'Der Lehrer hat keine Zeit für individuelle Förderung?' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '14px', color: '#334455', lineHeight: '1.6', fontWeight: '500', margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Wir haben die Lösung — professionell, persönlich und für viele Familien kostenlos.</p>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt kostenlos anfragen</a>
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section className="section-pad" style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 32px' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>Über uns</p>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px', color: '#0F2A45' }}>Wir unterstützen Schüler auf dem Weg zu besseren Noten</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
          Seit vielen Jahren begleiten wir Kinder und Jugendliche mit und ohne Migrationshintergrund dabei, ihr volles Potenzial zu entfalten. Mit individueller Nachhilfe und Sprachförderung stärken wir Wissen, Selbstvertrauen und die Basis für eine erfolgreiche Zukunft.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {['Mathematik', 'Deutsch', 'Englisch', 'Physik', 'Chemie', 'Biologie', 'Arabisch', 'Französisch', 'Latein'].map(f => (
            <span key={f} style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', border: '1px solid #D6E4FF', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>Für alle Klassenstufen, auch für Geflüchtete</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {[
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=90',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=90',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=90',
            'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=90',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`Schüler ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Ablauf</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>Schritt für Schritt zur besseren Note</h2>
          <p style={{ fontSize: '15px', color: '#556678', textAlign: 'center', maxWidth: '560px', margin: '0 auto 52px' }}>
            Ihr Kind steht bei uns im Mittelpunkt — vom ersten Kennenlernen bis zum gemeinsamen Erfolg.
          </p>
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #FFD60A, #3A86FF)', transform: 'translateX(-50%)', zIndex: 0 }}></div>
            {[
              { n: '1', icon: '👥', t: 'Kennenlernen & Analyse', d: 'Wir starten mit einem persönlichen Gespräch und einer gründlichen Analyse, um den Lernstand und die Bedürfnisse Ihres Kindes genau zu verstehen.', side: 'right' },
              { n: '2', icon: '📅', t: 'Individueller Lernplan', d: 'Auf Basis der Analyse erstellen wir einen maßgeschneiderten Lernplan, der gezielt Stärken fördert und Schwächen Schritt für Schritt abbaut.', side: 'left' },
              { n: '3', icon: '🎓', t: 'Begleitung & Erfolgskontrolle', d: 'Wir begleiten Ihr Kind kontinuierlich, passen den Plan bei Bedarf an und halten Sie regelmäßig über die Fortschritte auf dem Laufenden.', side: 'right' },
            ].map((s, i) => (
              <div key={i} className="timeline-card" style={{ display: 'flex', justifyContent: s.side === 'right' ? 'flex-end' : 'flex-start', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                <div className="timeline-num" style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)', width: '40px', height: '40px', backgroundColor: '#FFD60A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', color: '#0F2A45', border: '3px solid #fff', zIndex: 2 }}>{s.n}</div>
                <div style={{ width: '44%', backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 16px rgba(58,134,255,0.08)' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7', margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS beraten lassen</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section className="section-pad" style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Angebote</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Das richtige Paket für jede Familie</h2>
          <div className="pakete-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Basis', sub: 'Der solide Einstieg.', key: 'basis', punkte: ['1x 90 Min pro Woche', 'Kleingruppe (max. 4 Schüler)', 'Hausaufgabenbetreuung', 'Lernfortschritt wird dokumentiert'], highlight: false },
              { t: 'Standard', sub: 'Empfohlen für die meisten Familien.', key: 'standard', punkte: ['2x 90 Min pro Woche', 'Kleingruppe (max. 4 Schüler)', 'Individuelles Lerntempo', 'Regelmäßige Eltern-Feedbacks', 'Fortschrittsanalyse monatlich', 'Prüfungsvorbereitung inklusive', 'Lückenanalyse & gezieltes Üben'], highlight: true },
              { t: 'Premium Excellence', sub: 'Das Rundum-Sorglos-Paket.', key: 'premium', punkte: ['Exklusive 1-zu-1 Betreuung', 'WhatsApp-Support Mo–Sa', 'Proaktive Erfolgs-Reports', 'Flexible Terminplanung'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #0F2A45' : '1px solid #E8EDF2', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: p.highlight ? '#0F2A45' : '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0F2A45', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Empfohlen für die meisten Familien</div>}
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: p.highlight ? '#fff' : '#0F2A45', marginBottom: '6px' }}>Lern² {p.t}</h3>
                <p style={{ fontSize: '13px', color: p.highlight ? 'rgba(255,255,255,0.6)' : '#8A9BAE', marginBottom: '18px' }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '22px' }}>
                  {p.punkte.map(punkt => (
                    <li key={punkt} style={{ fontSize: '14px', color: p.highlight ? 'rgba(255,255,255,0.9)' : '#556678', padding: '8px 0', borderBottom: `1px solid ${p.highlight ? 'rgba(255,255,255,0.1)' : '#F0F4F8'}`, display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#FFD60A', fontWeight: '800', flexShrink: 0 }}>✓</span>{punkt}
                    </li>
                  ))}
                </ul>
                <a href={waLink(msgs[p.key as keyof typeof msgs])} target="_blank" style={{ display: 'block', textAlign: 'center', backgroundColor: p.highlight ? '#FFD60A' : '#EEF4FF', color: '#0F2A45', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  {p.t === 'Basis' ? 'Basis anfragen' : p.t === 'Standard' ? 'Standard anfragen' : 'Premium anfragen'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Bewertungen</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>Das sagen unsere Familien</h2>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2" target="_blank" style={{ fontSize: '14px', color: '#556678', textDecoration: 'none' }}>⭐ 5 von 5 Sternen · 10 Bewertungen auf Google</a>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {[
              { name: 'عمرو ع', text: 'Sehr gute Nachhilfe! Mein Kind hat sich in kurzer Zeit deutlich verbessert. Der Unterricht ist verständlich und freundlich. Wir sind sehr zufrieden!' },
              { name: 'Abod A.', text: 'Die Lehrer sind freundlich und erklären alles klar. Mein Kind macht gute Fortschritte. Wir sind sehr zufrieden und dankbar.' },
              { name: 'Samer A.', text: 'Ich konnte meine Lücken schließen und fühle mich in der Schule deutlich sicherer, besonders in Klassenarbeiten.' },
              { name: 'Abdulkader O.', text: 'دوام التوفيق لمشروعكم الذي يهدف لتعزيز قدرات أبنائنا في اللغة الالمانية والإنكليزية.', translation: 'Stetiger Erfolg für euer Projekt, das die Fähigkeiten unserer Kinder in Deutsch und Englisch stärkt.' },
              { name: 'Nora H.', text: 'شكرا لكم بفضلكم وبفضل جهودكم اولادي اصبحوا افضل وعلاماتهم جيدة.', translation: 'Vielen Dank — dank eurer Bemühungen sind meine Kinder besser geworden und ihre Noten sind gut.' },
            ].map(r => (
              <div key={r.name} style={{ border: '1px solid #D6E4FF', borderRadius: '12px', padding: '22px', backgroundColor: '#fff' }}>
                <div style={{ color: '#FFD60A', fontSize: '14px', marginBottom: '10px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7', marginBottom: '8px' }}>"{r.text}"</p>
                {(r as any).translation && <p style={{ fontSize: '13px', color: '#8A9BAE', lineHeight: '1.6', marginBottom: '10px', fontStyle: 'italic' }}>"{(r as any).translation}"</p>}
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#0F2A45' }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section style={{ position: 'relative', padding: '72px 24px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/st2.jpg" alt="Hintergrund" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.82)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', marginBottom: '16px', lineHeight: '1.3' }}>
            Gemeinsam bauen wir neues Selbstvertrauen auf und schließen Wissenslücken nachhaltig.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0 28px' }}>
            {['Online oder Zuhause', 'Familienfreundlich', 'Sofort starten'].map(f => (
              <span key={f} style={{ color: '#FFD60A', fontSize: '14px', fontWeight: '600' }}>✓ {f}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Jetzt KOSTENLOS anfragen</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'transparent', color: '#FFD60A', border: '2px solid #FFD60A', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* KONTAKTFORMULAR */}
      <section id="kontakt" className="section-pad" style={{ padding: '72px 32px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Kontakt</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>Jetzt kostenlos anfragen</h2>
          <p style={{ fontSize: '15px', color: '#556678', textAlign: 'center', marginBottom: '36px' }}>Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden über WhatsApp.</p>
          <div style={{ backgroundColor: '#F7F9FC', border: '1px solid #E8EDF2', borderRadius: '16px', padding: '32px' }}>
            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>Ihr Name *</label>
                <input
                  type="text"
                  placeholder="z.B. Ahmad Al-Hassan"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>Name des Kindes</label>
                <input
                  type="text"
                  placeholder="z.B. Sara, Klasse 5"
                  value={form.kind}
                  onChange={e => setForm({ ...form, kind: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>Fach / Fächer</label>
                <input
                  type="text"
                  placeholder="z.B. Mathematik, Deutsch"
                  value={form.fach}
                  onChange={e => setForm({ ...form, fach: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>WhatsApp / Telefon *</label>
                <input
                  type="tel"
                  placeholder="z.B. 0151 12345678"
                  value={form.tel}
                  onChange={e => setForm({ ...form, tel: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              style={{ width: '100%', backgroundColor: form.name && form.tel ? '#FFD60A' : '#E8EDF2', color: form.name && form.tel ? '#0F2A45' : '#AAB', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '15px', cursor: form.name && form.tel ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
              📲 Anfrage über WhatsApp senden
            </button>
            <p style={{ fontSize: '12px', color: '#8A9BAE', textAlign: 'center', marginTop: '12px' }}>
              Mit dem Absenden öffnet sich WhatsApp mit Ihrer Anfrage. Wir antworten innerhalb von 24h.
            </p>
          </div>
        </div>
      </section>

      {/* INITIATIVE */}
      <section className="section-pad" style={{ padding: '56px 24px', backgroundColor: '#F7F9FC', borderTop: '1px solid #E8EDF2', borderBottom: '1px solid #E8EDF2' }}>
        <div className="initiative-inner" style={{ maxWidth: '880px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 44px', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(58,134,255,0.08)', border: '1px solid #D6E4FF' }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '14px', border: '1px solid #D6E4FF' }}>Lern² Initiative</div>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '800', marginBottom: '14px', color: '#0F2A45' }}>Chancengleichheit durch Bildung</h2>
            <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', margin: 0 }}>
              Beziehen Sie <strong>Wohngeld, Bürgergeld</strong> oder <strong>Kinderzuschuss</strong>? Dann ist die Nachhilfe für Sie zu <strong>100% kostenlos</strong> über das Bildungs- und Teilhabepaket (BuT).
            </p>
          </div>
          <a href={waLink(msgs.but)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>Anspruch kostenlos prüfen</a>
        </div>
      </section>

      {/* PARTNER */}
      
<section style={{ padding: '44px 24px', borderBottom: '1px solid #E8EDF2', textAlign: 'center' }}>
  <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Unser Partner, der uns vertraut</p>
  <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}>
    <img src="/klaroo.png" alt="KlarOo AI" style={{ height: '52px', objectFit: 'contain', display: 'block' }} />
  </a>
</section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Häufig gestellte Fragen</h2>
          {[
            { f: 'Wie viele Nachhilfestunden pro Woche sind sinnvoll?', a: 'In der Regel empfehlen wir 1–2 Termine pro Woche. Bei wichtigen Prüfungen kann eine intensivere Betreuung kurzfristig sinnvoll sein.' },
            { f: 'Welche Schulfächer und Jahrgangsstufen deckt unsere Nachhilfe ab?', a: 'Wir bieten Nachhilfe für alle Fächer von der Grundschule bis zum Abitur an — Mathematik, Deutsch, Englisch, Naturwissenschaften und mehr.' },
            { f: 'Kann ich monatlich kündigen?', a: 'Ja — keine langfristige Bindung. Stundenweise oder regelmäßig, ganz wie es passt.' },
            { f: 'Wer unterrichtet bei Lern²?', a: 'Engagierte Lehrkräfte, Studierende und Abiturienten mit sehr guten Noten — die mit Geduld und Motivation arbeiten.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #D6E4FF', backgroundColor: openFaq === i ? '#fff' : 'transparent', borderRadius: openFaq === i ? '8px' : '0', marginBottom: openFaq === i ? '8px' : '0' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '18px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F2A45' }}>{q.f}</span>
                <span style={{ fontSize: '20px', color: '#FFD60A', flexShrink: 0, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 16px 18px' }}>
                  <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.6', margin: 0 }}>{q.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFD60A', padding: '44px 24px' }}>
       <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/logo.png" alt="Lern²" style={{ display: 'block', margin: '0 auto 16px', height: '64px', width: '64px', borderRadius: '12px', objectFit: 'cover' }} />
          <p style={{ fontSize: '13px', color: '#0F2A45', marginBottom: '16px', opacity: 0.7 }}>© 2026 Lern² · Kassel · Alle Rechte vorbehalten</p>
          <div className="footer-links" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '14px' }}>
            <a href={`https://wa.me/${WA}`} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp</a>
            <a href={IG} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Instagram</a>
            <a href={FB} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Facebook</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.6 }}>Mit ❤️ entwickelt für die Zukunft unserer Kinder</p>
        </div>
      </footer>

    </main>
  )
}
