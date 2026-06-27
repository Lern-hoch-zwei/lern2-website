"use client";
import { useState } from "react";
import LanguageDropdown from "./components/LanguageDropdown";
import { Clock, BookOpen, HelpCircle, Languages, Frown, Users, Hand, ClipboardList, GraduationCap } from "lucide-react";

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

    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        tel:  form.tel,
        kind: form.kind,
        fach: form.fach,
        lang: 'de',
      }),
    }).catch(() => {});

    const msg = `السلام عليكم فريق Lern²،\n\nAsSalamu aleikum Lern²-Team,\n\nNeue Anfrage über die Website:\n\n👤 Name: ${form.name}\n👶 Kind: ${form.kind}\n📚 Fach: ${form.fach}\n📞 Telefon: ${form.tel}\n\nBitte um Rückruf. Vielen Dank!`;
    window.open(waLink(msg), '_blank');
  };
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>
      <style>{`
        * { box-sizing: border-box; }

        /* === BUTTON HOVER-ANIMATIONEN (Etappe 1) === */
        .cta-primary {
          background-color: #FFD60A;
          color: #0F2A45;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          display: inline-block;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 2px 8px rgba(255,214,10,0.25);
          white-space: nowrap;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          background-color: #FFDE3D;
          box-shadow: 0 8px 24px rgba(255,214,10,0.5);
        }
        .cta-primary:active { transform: translateY(0); }

        .cta-primary-sm {
          background-color: #FFD60A;
          color: #0F2A45;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          display: inline-block;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          white-space: nowrap;
        }
        .cta-primary-sm:hover {
          transform: translateY(-1px);
          background-color: #FFDE3D;
          box-shadow: 0 6px 16px rgba(255,214,10,0.45);
        }

        .cta-card {
          display: block;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          color: #0F2A45;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .cta-card-highlight { background-color: #FFD60A; }
        .cta-card-normal { background-color: #EEF4FF; }
        .cta-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15,42,69,0.12);
        }
        .cta-card-highlight:hover { background-color: #FFDE3D; }
        .cta-card-normal:hover { background-color: #DCE7FF; }

        .review-card {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: #fff;
          border: 1px solid #D6E4FF;
          border-radius: 12px;
          padding: 14px 22px;
          text-decoration: none;
          box-shadow: 0 2px 12px rgba(58,134,255,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .review-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(58,134,255,0.18);
        }

        .footer-link {
          color: #0F2A45;
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover { opacity: 0.7; }

        @media (max-width: 768px) {
          .ueberuns-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .ueberuns-images { display: none !important; }
          .hero-section { min-height: 480px !important; }
          .hero-content { padding: 48px 20px 60px !important; }
          .hero-h1 { font-size: 32px !important; letter-spacing: -1px !important; }
          .hero-p { font-size: 15px !important; }
          .stats-bar { padding: 20px 12px !important; }
          .stats-item { flex: 1 1 45% !important; min-width: 0 !important; padding: 10px 8px !important; border-right: none !important; }
          .stats-n { font-size: 18px !important; }
          .stats-l { font-size: 10px !important; }
          .section-pad { padding: 52px 20px !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .timeline-line { display: none !important; }
          .timeline-card { width: 100% !important; margin: 0 auto 36px !important; justify-content: center !important; }
          .timeline-inner { width: 100% !important; padding-top: 40px !important; text-align: center !important; }
          .timeline-num { left: 50% !important; top: -20px !important; }
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
      <nav className="nav-inner" style={{ padding: '0 32px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '42px', width: '42px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <LanguageDropdown current="de" />
          <a href="#kontakt" className="cta-primary-sm">Unverbindlich anfragen</a>
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
            <a href="#kontakt" className="cta-primary">Unverbindlich anfragen</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar" style={{ backgroundColor: '#0F2A45', padding: '24px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '5 ★', l: '10+ Google Bewertungen' },
            { n: 'Alle', l: 'Fächer & Klassen' },
            { n: '4', l: 'Sprachen: DE · AR · TR · FA' },
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
              { Icon: Clock, text: 'Sie haben keine Zeit, Ihrem Kind bei den Hausaufgaben zu helfen?' },
              { Icon: BookOpen, text: 'Sie verstehen den Schulstoff selbst nicht mehr?' },
              { Icon: HelpCircle, text: 'Sie wissen nicht, wo Sie anfangen sollen?' },
              { Icon: Languages, text: 'Deutsch ist nicht Ihre Muttersprache und Sie können nicht helfen?' },
              { Icon: Frown, text: 'Ihr Kind versteht den Stoff in der Schule nicht mehr?' },
              { Icon: Users, text: 'Der Lehrer hat keine Zeit für individuelle Förderung?' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p.Icon size={20} color="#3A86FF" strokeWidth={2} />
                </div>
                <p style={{ fontSize: '14px', color: '#334455', lineHeight: '1.6', fontWeight: '500', margin: 0, alignSelf: 'center' }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Wir haben die Lösung — professionell, persönlich und für viele Familien kostenlos.</p>
            <a href="#kontakt" className="cta-primary">Unverbindlich anfragen</a>
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section className="ueberuns-section section-pad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 32px' }}>
        <div className="ueberuns-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div className="ueberuns-text" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>Über uns</p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px', color: '#0F2A45' }}>Wir unterstützen Schüler auf dem Weg zu besseren Noten</h2>
            <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.8' }}>
              Lern² steht für individuelle Förderung, die wirklich ankommt. Wir verstehen, dass jedes Kind anders lernt — und genau darauf gehen wir ein. Mit engagierten Lehrkräften, klaren Strukturen und einem familiären Umfeld helfen wir Schülern, ihre Stärken zu entdecken und ihre Schwächen Schritt für Schritt zu überwinden.
            </p>
          </div>
          <div className="ueberuns-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {['/s1.png', '/s2.png', '/s3.png', '/s4.png'].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1 / 1', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={src} alt={`Schüler ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>So funktioniert's</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>Schritt für Schritt zur besseren Note</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', textAlign: 'center', marginBottom: '48px', maxWidth: '640px', margin: '0 auto 48px' }}>
            Wir machen den Einstieg in die Nachhilfe so einfach wie möglich — von der ersten Anfrage bis zum messbaren Lernerfolg.
          </p>
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#D6E4FF', transform: 'translateX(-50%)', zIndex: 0 }}></div>
            {[
              { n: '1', Icon: Hand, t: 'Kontaktaufnahme & Erstgespräch', d: 'Sie melden sich bei uns. In einem unverbindlichen Gespräch lernen wir Sie und Ihr Kind kennen, klären die Ziele und beantworten alle Fragen.', side: 'left' },
              { n: '2', Icon: ClipboardList, t: 'Bedarfsanalyse & Lernplan', d: 'Wir ermitteln die genauen Schwachstellen und erstellen einen individuellen Lernplan, der zu Ihrem Kind passt — mit klaren Schritten und realistischen Zielen.', side: 'right' },
              { n: '3', Icon: GraduationCap, t: 'Begleitung & Erfolgskontrolle', d: 'Wir begleiten Ihr Kind kontinuierlich, passen den Plan bei Bedarf an und halten Sie regelmäßig über die Fortschritte auf dem Laufenden.', side: 'right' },
            ].map((s, i) => (
              <div key={i} className="timeline-card" style={{ position: 'relative', display: 'flex', justifyContent: s.side === 'left' ? 'flex-start' : 'flex-end', marginBottom: '36px', zIndex: 1 }}>
                <div className="timeline-num" style={{ position: 'absolute', left: '50%', top: '12px', transform: 'translateX(-50%)', fontWeight: '900', fontSize: '40px', color: '#0F2A45', zIndex: 2, lineHeight: 1, letterSpacing: '-1px', backgroundColor: '#EEF4FF', padding: '0 10px' }}>{s.n}</div>
                  <s.Icon size={24} color="#FFD60A" strokeWidth={2.2} />
                </div>
                <div className="timeline-inner" style={{ width: '44%', backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 16px rgba(58,134,255,0.08)' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#3A86FF', letterSpacing: '1.5px', marginBottom: '6px' }}>SCHRITT {s.n}</p>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7', margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="#kontakt" className="cta-primary">Beratungsgespräch vereinbaren</a>
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
                <a href="#kontakt" className={`cta-card ${p.highlight ? 'cta-card-highlight' : 'cta-card-normal'}`}>
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
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '24px', textAlign: 'center', color: '#0F2A45' }}>Das sagen unsere Familien</h2>

          {/* Klickbare Google-Karte mit echten Sternen */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2/@51.3149851,9.2958103,11z/data=!4m8!3m7!1s0xa9148e796413ea5d:0x6e8eac13c724b5cb!8m2!3d51.3148861!4d9.4606148!9m1!1b1!16s%2Fg%2F11xkt5230z?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="review-card">
              <svg width="22" height="22" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ color: '#FFD60A', fontSize: '16px', letterSpacing: '1px' }}>★★★★★</span>
                  <span style={{ fontSize: '15px', fontWeight: '800', color: '#0F2A45' }}>5,0</span>
                </div>
                <span style={{ fontSize: '13px', color: '#556678' }}>10+ Bewertungen auf Google · ansehen ↗</span>
              </div>
            </a>
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
            <a href="#kontakt" className="cta-primary">Unverbindlich anfragen</a>
          </div>
        </div>
      </section>

      {/* KONTAKTFORMULAR */}
      <section id="kontakt" className="section-pad" style={{ padding: '72px 32px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Kontakt</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>Unverbindlich anfragen</h2>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.6', textAlign: 'center', marginBottom: '32px' }}>
            Schicken Sie uns Ihre Daten — wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="form-row" style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' }}>Ihr Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  placeholder="Vor- und Nachname"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' }}>Name des Kindes</label>
                <input
                  type="text"
                  value={form.kind}
                  onChange={(e) => setForm({...form, kind: e.target.value})}
                  placeholder="Vorname"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' }}>Fach</label>
                <input
                  type="text"
                  value={form.fach}
                  onChange={(e) => setForm({...form, fach: e.target.value})}
                  placeholder="z. B. Mathe, Deutsch"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' }}>Telefon</label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({...form, tel: e.target.value})}
                  placeholder="0151 ..."
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!form.name || !form.tel}
              style={{ width: '100%', backgroundColor: form.name && form.tel ? '#FFD60A' : '#E8EDF2', color: form.name && form.tel ? '#0F2A45' : '#AAB', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '15px', cursor: form.name && form.tel ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
              📲 Anfrage über WhatsApp senden
            </button>
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
          <a href="#kontakt" className="cta-primary">Anspruch prüfen</a>
        </div>
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
            <a href={`https://wa.me/${WA}`} target="_blank" className="footer-link">WhatsApp</a>
            <a href={IG} target="_blank" className="footer-link">Instagram</a>
            <a href={FB} target="_blank" className="footer-link">Facebook</a>
            <a href="/impressum" className="footer-link">Impressum</a>
            <a href="/datenschutz" className="footer-link">Datenschutz</a>
          </div>
          <p style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.6, marginBottom: '10px' }}>Mit ❤️ entwickelt für die Zukunft unserer Kinder</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '6px' }}>
            <span style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.7, fontWeight: '500' }}>Technologie-Partner:</span>
            <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'inline-flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 backgroundColor: '#fff',
                 padding: '8px 14px',
                 borderRadius: '8px',
                 textDecoration: 'none',
                 boxShadow: '0 2px 6px rgba(15,42,69,0.12)',
                 transition: 'transform 0.2s ease, box-shadow 0.2s ease'
               }}
               onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,42,69,0.2)'; }}
               onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(15,42,69,0.12)'; }}
            >
              <img src="/klaroo.png" alt="Klaroo AI" style={{ height: '32px', width: 'auto', objectFit: 'contain', display: 'block' }} />
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}
