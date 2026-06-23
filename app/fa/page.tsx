"use client";
import { useState } from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const WA = "4915679576256";
const IG = "https://www.instagram.com/lern_hoch_zwei";
const FB = "https://www.facebook.com/share/1EHvQ67ZQ8/";

const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const msgs = {
  basis: `سلام علیکم، تیم Lern²،\nمن به بستهٔ Basis (هفته‌ای یک بار) علاقه‌مند هستم.\nلطفاً معلومات بیشتری برایم بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Basis-Paket (1x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  standard: `سلام علیکم، تیم Lern²،\nمن به بستهٔ Standard (هفته‌ای دو بار) علاقه‌مند هستم.\nلطفاً معلومات بیشتری برایم بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Standard-Paket (2x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  premium: `سلام علیکم، تیم Lern²،\nمن به بستهٔ Premium (درس خصوصی انفرادی) علاقه‌مند هستم.\nلطفاً معلومات بیشتری برایم بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Premium-Paket (1-zu-1).\nKönnen Sie mir mehr Infos geben?`,
  but: `سلام علیکم، تیم Lern²،\nمی‌خواهم بدانم که آیا فرزندم حق دریافت درس‌های رایگان از طریق BuT را دارد یا خیر.\n\nAsSalamu aleikum Lern²-Team,\nich möchte wissen ob mein Kind Anspruch auf kostenlose Nachhilfe über BuT hat.`,
  hero: `سلام علیکم، تیم Lern²،\nمی‌خواهم دربارهٔ خدمات درس خصوصی شما معلومات بگیرم.\nلطفاً معلومات بیشتری برایم بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für Nachhilfe bei Lern².\nKönnen Sie mir mehr Infos geben?`,
  general: `سلام علیکم، تیم Lern²،\nمی‌خواهم دربارهٔ خدمات Lern² معلومات بگیرم.\n\nAsSalamu aleikum Lern²-Team,\nich möchte mehr über Lern² erfahren.`,
};

export default function HomeDari() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', kind: '', fach: '', tel: '' });

  const handleSubmit = () => {
    if (!form.name || !form.tel) return;
    const msg = `سلام علیکم، تیم Lern²،\n\nAsSalamu aleikum Lern²-Team,\n\nNeue Anfrage über die Website:\n\n👤 Name: ${form.name}\n👶 Kind: ${form.kind}\n📚 Fach: ${form.fach}\n📞 Telefon: ${form.tel}\n\nBitte um Rückruf. Vielen Dank!`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <main dir="rtl" style={{ fontFamily: "'Vazirmatn', 'Tahoma', 'Segoe UI', 'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>
      <style>{`
        * { box-sizing: border-box; letter-spacing: normal !important; }
        @media (max-width: 768px) {
          .nav-wa { display: none !important; }
          .hero-section { min-height: 480px !important; }
          .hero-content { padding: 48px 20px 60px !important; }
          .hero-h1 { font-size: 32px !important; }
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
      <nav style={{ padding: '0 32px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '42px', width: '42px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LanguageDropdown current="fa" />
          <a className="nav-wa" href={waLink(msgs.general)} target="_blank" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 10px' }}>WhatsApp</a>
          <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>استعلام رایگان</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="پس‌زمینه" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.78)' }}></div>
        </div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, padding: '80px 48px', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(58,134,255,0.2)', border: '1px solid rgba(58,134,255,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>تدریس خصوصی حرفه‌ای در کاسل</span>
          </div>
          <h1 className="hero-h1" style={{ fontSize: 'clamp(30px, 5vw, 58px)', fontWeight: '800', lineHeight: '1.3', color: '#fff', marginBottom: '18px' }}>
            ما به فرزند شما کمک می‌کنیم<br />تا نمرات<br /><span style={{ color: '#FFD60A' }}>بهتری بگیرد.</span>
          </h1>
          <p className="hero-p" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.9', marginBottom: '32px', maxWidth: '500px' }}>
            تدریس خصوصی انفرادی و حمایت زبانی در کاسل — شخصی، منظم و برای بسیاری از خانواده‌ها کاملاً رایگان.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>همین حالا رایگان استعلام کنید</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar" style={{ backgroundColor: '#0F2A45', padding: '24px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '۱۰۰٪', l: 'رایگان از طریق BuT' },
            { n: '۵ ★', l: '۱۰ نظر در Google' },
            { n: 'همه', l: 'مضامین و صنف‌ها' },
            { n: '۲۴ ساعت', l: 'زمان پاسخ' },
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
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>آیا این برایتان آشناست؟</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>بسیاری از والدین با همین چالش‌ها روبرو هستند.</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              { icon: '⏰', text: 'وقت ندارید که در انجام تکالیف به فرزندتان کمک کنید؟' },
              { icon: '📚', text: 'خودتان دیگر مطالب درسی را نمی‌فهمید؟' },
              { icon: '🤷', text: 'نمی‌دانید از کجا شروع کنید؟' },
              { icon: '🌍', text: 'زبان آلمانی زبان مادری‌تان نیست و نمی‌توانید کمک کنید؟' },
              { icon: '😟', text: 'فرزندتان دیگر درس‌ها را در مکتب نمی‌فهمد؟' },
              { icon: '👨‍🏫', text: 'معلم وقت کافی برای توجه انفرادی ندارد؟' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '14px', color: '#334455', lineHeight: '1.8', fontWeight: '500', margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>ما راه‌حل داریم — حرفه‌ای، شخصی و برای بسیاری از خانواده‌ها رایگان.</p>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>همین حالا رایگان استعلام کنید</a>
          </div>
        </div>
      </section>

      {/* دربارهٔ ما */}
      <section className="section-pad" style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>دربارهٔ ما</p>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '16px', color: '#0F2A45' }}>ما شاگردان را در مسیر رسیدن به نمرات بهتر حمایت می‌کنیم</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '2', margin: '0 auto 24px', maxWidth: '700px' }}>
          سال‌هاست که کودکان و نوجوانان را از پیشینه‌های گوناگون همراهی می‌کنیم تا تمام توان‌شان را شکوفا سازند. با تدریس خصوصی انفرادی و حمایت زبانی، دانش، اعتمادبه‌نفس و پایه‌ای برای آینده‌ای موفق را تقویت می‌کنیم.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px', justifyContent: 'center' }}>
          {['ریاضی', 'آلمانی', 'انگلیسی', 'فزیک', 'کیمیا', 'بیولوژی', 'عربی', 'فرانسوی', 'لاتین'].map(f => (
            <span key={f} style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', border: '1px solid #D6E4FF', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>برای تمام صنف‌ها، از جمله پناهندگان</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {[
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=90',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=90',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=90',
            'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=90',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`شاگرد ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* روند کار */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>روند کار</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>قدم‌به‌قدم به سوی نمرات بهتر</h2>
          <p style={{ fontSize: '15px', color: '#556678', textAlign: 'center', maxWidth: '560px', margin: '0 auto 52px', lineHeight: '1.9' }}>
            فرزند شما محور توجه ماست — از نخستین آشنایی تا موفقیت مشترک.
          </p>
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #FFD60A, #3A86FF)', transform: 'translateX(-50%)', zIndex: 0 }}></div>
            {[
              { n: '۱', icon: '👥', t: 'آشنایی و ارزیابی', d: 'با یک گفت‌وگوی شخصی و یک ارزیابی همه‌جانبه آغاز می‌کنیم تا سطح و نیازهای فرزند شما را دقیق بفهمیم.', side: 'right' },
              { n: '۲', icon: '📅', t: 'پلان آموزشی انفرادی', d: 'بر اساس ارزیابی، یک پلان ویژه می‌سازیم که نقاط قوت را تقویت و نقاط ضعف را قدم‌به‌قدم برطرف می‌کند.', side: 'left' },
              { n: '۳', icon: '🎓', t: 'همراهی و کنترل موفقیت', d: 'فرزند شما را به‌طور مداوم همراهی می‌کنیم، پلان را در صورت نیاز تنظیم می‌کنیم و شما را به‌طور منظم از پیشرفت آگاه می‌سازیم.', side: 'right' },
            ].map((s, i) => (
              <div key={i} className="timeline-card" style={{ display: 'flex', justifyContent: s.side === 'right' ? 'flex-end' : 'flex-start', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                <div className="timeline-num" style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)', width: '40px', height: '40px', backgroundColor: '#FFD60A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', color: '#0F2A45', border: '3px solid #fff', zIndex: 2 }}>{s.n}</div>
                <div className="timeline-inner" style={{ width: '44%', backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 16px rgba(58,134,255,0.08)' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.9', margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>مشاورهٔ رایگان بگیرید</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* بسته‌ها */}
      <section className="section-pad" style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>بسته‌ها</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>بستهٔ مناسب برای هر خانواده</h2>
          <div className="pakete-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'اساسی', sub: 'یک آغاز مطمئن.', key: 'basis', punkte: ['هفته‌ای یک بار ۹۰ دقیقه', 'گروه کوچک (حداکثر ۴ شاگرد)', 'کمک در انجام تکالیف', 'ثبت و مستندسازی پیشرفت'], highlight: false },
              { t: 'ستندرد', sub: 'پیشنهاد برای اکثر خانواده‌ها.', key: 'standard', punkte: ['هفته‌ای دو بار ۹۰ دقیقه', 'گروه کوچک (حداکثر ۴ شاگرد)', 'سرعت یادگیری انفرادی', 'بازخورد منظم به والدین', 'تحلیل ماهانهٔ پیشرفت', 'آماده‌سازی برای امتحانات شامل است', 'تحلیل کمبودها و تمرین هدفمند'], highlight: true },
              { t: 'پریمیوم', sub: 'بستهٔ همه‌جانبه.', key: 'premium', punkte: ['تدریس انفرادی اختصاصی ۱:۱', 'پشتیبانی واتساپ، دوشنبه تا شنبه', 'گزارش‌های موفقیت فعال', 'زمان‌بندی انعطاف‌پذیر قرارها'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #0F2A45' : '1px solid #E8EDF2', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: p.highlight ? '#0F2A45' : '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0F2A45', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>پیشنهاد برای اکثر خانواده‌ها</div>}
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
                  استعلام
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نظرات */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>نظرات</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>خانواده‌های ما چه می‌گویند</h2>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2" target="_blank" style={{ fontSize: '14px', color: '#556678', textDecoration: 'none' }}>⭐ ۵ از ۵ ستاره · ۱۰ نظر در Google</a>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {[
              { name: 'عمرو ع', text: 'درس کمکی بسیار خوب! فرزندم در مدت کوتاه به‌طور چشمگیری پیشرفت کرد. تدریس قابل‌فهم و دوستانه است. ما بسیار راضی هستیم!' },
              { name: 'Abod A.', text: 'معلمان مهربان هستند و همه‌چیز را واضح توضیح می‌دهند. فرزندم پیشرفت خوبی دارد. ما بسیار راضی و سپاسگزار هستیم.' },
              { name: 'Samer A.', text: 'توانستم کمبودهایم را جبران کنم و در مکتب، به‌ویژه در امتحانات، احساس اطمینان بیشتری می‌کنم.' },
              { name: 'Abdulkader O.', text: 'برای پروژهٔ شما که هدفش تقویت توانایی فرزندان ما در زبان آلمانی و انگلیسی است، آرزوی موفقیت دائمی دارم.' },
              { name: 'Nora H.', text: 'از شما سپاسگزارم؛ به لطف تلاش‌های شما فرزندانم بهتر شده‌اند و نمراتشان خوب است.' },
            ].map(r => (
              <div key={r.name} style={{ border: '1px solid #D6E4FF', borderRadius: '12px', padding: '22px', backgroundColor: '#fff' }}>
                <div style={{ color: '#FFD60A', fontSize: '14px', marginBottom: '10px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.8', marginBottom: '8px' }}>&quot;{r.text}&quot;</p>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#0F2A45' }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section style={{ position: 'relative', padding: '72px 24px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/st2.jpg" alt="پس‌زمینه" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.82)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '800', color: '#fff', marginBottom: '16px', lineHeight: '1.6' }}>
            با هم اعتمادبه‌نفس تازه می‌سازیم و کمبودهای دانش را به‌طور پایدار جبران می‌کنیم.
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0 28px' }}>
            {['آنلاین یا در خانه', 'مناسب برای خانواده', 'همین حالا شروع کنید'].map(f => (
              <span key={f} style={{ color: '#FFD60A', fontSize: '14px', fontWeight: '600' }}>✓ {f}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>همین حالا رایگان استعلام کنید</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'transparent', color: '#FFD60A', border: '2px solid #FFD60A', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* تماس با ما */}
      <section id="kontakt" className="section-pad" style={{ padding: '72px 32px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>تماس با ما</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>همین حالا رایگان استعلام کنید</h2>
          <p style={{ fontSize: '15px', color: '#556678', textAlign: 'center', marginBottom: '36px' }}>فورم را پر کنید — ما طی ۲۴ ساعت از طریق واتساپ با شما تماس می‌گیریم.</p>
          <div style={{ backgroundColor: '#F7F9FC', border: '1px solid #E8EDF2', borderRadius: '16px', padding: '32px' }}>
            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>نام شما *</label>
                <input
                  type="text"
                  placeholder="مثال: احمد رحیمی"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>نام فرزند</label>
                <input
                  type="text"
                  placeholder="مثال: سارا، صنف ۵"
                  value={form.kind}
                  onChange={e => setForm({ ...form, kind: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>مضمون / مضامین</label>
                <input
                  type="text"
                  placeholder="مثال: ریاضی، آلمانی"
                  value={form.fach}
                  onChange={e => setForm({ ...form, fach: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F2A45', display: 'block', marginBottom: '6px' }}>واتساپ / تیلفون *</label>
                <input
                  type="tel"
                  placeholder="مثال: 0151 12345678"
                  value={form.tel}
                  onChange={e => setForm({ ...form, tel: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff' }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              style={{ width: '100%', backgroundColor: form.name && form.tel ? '#FFD60A' : '#E8EDF2', color: form.name && form.tel ? '#0F2A45' : '#AAB', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '15px', cursor: form.name && form.tel ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
              📲 ارسال درخواست از طریق واتساپ
            </button>
            <p style={{ fontSize: '12px', color: '#8A9BAE', textAlign: 'center', marginTop: '12px' }}>
              با ارسال، واتساپ همراه با درخواست شما باز می‌شود. ما طی ۲۴ ساعت پاسخ می‌دهیم.
            </p>
          </div>
        </div>
      </section>

      {/* ابتکار (BuT) */}
      <section className="section-pad" style={{ padding: '56px 24px', backgroundColor: '#F7F9FC', borderTop: '1px solid #E8EDF2', borderBottom: '1px solid #E8EDF2' }}>
        <div className="initiative-inner" style={{ maxWidth: '880px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 44px', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(58,134,255,0.08)', border: '1px solid #D6E4FF' }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '14px', border: '1px solid #D6E4FF' }}>ابتکار Lern²</div>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '800', marginBottom: '14px', color: '#0F2A45' }}>برابری فرصت‌ها از طریق آموزش</h2>
            <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.9', margin: 0 }}>
              آیا <strong>Wohngeld یا Bürgergeld</strong> یا <strong>Kinderzuschuss</strong> دریافت می‌کنید؟ در این صورت درس کمکی برای شما <strong>۱۰۰٪ رایگان</strong> است — از طریق برنامهٔ آموزش و مشارکت (BuT).
            </p>
          </div>
          <a href={waLink(msgs.but)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>بررسی رایگان استحقاق</a>
        </div>
      </section>

      {/* PARTNER */}
      <section style={{ padding: '44px 24px', borderBottom: '1px solid #E8EDF2', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '600' }}>شریک</p>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>شریکی که به ما اعتماد دارد</h2>
        <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}>
          <img src="/klaroo.png" alt="KlarOo AI" style={{ height: '72px', objectFit: 'contain', display: 'block' }} />
        </a>
      </section>

      {/* سوالات متداول */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>سوالات متداول</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>پرسش‌های پرتکرار</h2>
          {[
            { f: 'در هفته چند ساعت درس کمکی منطقی است؟', a: 'معمولاً ۱ تا ۲ نوبت در هفته پیشنهاد می‌کنیم. پیش از امتحانات مهم، حمایت فشرده برای مدت کوتاه می‌تواند مفید باشد.' },
            { f: 'کدام مضامین و صنف‌ها را پوشش می‌دهیم؟', a: 'ما در تمام مضامین از صنف اول تا صنف دوازدهم درس کمکی ارائه می‌دهیم — ریاضی، آلمانی، انگلیسی، علوم طبیعی و بیشتر.' },
            { f: 'آیا می‌توانم ماهانه لغو کنم؟', a: 'بله — هیچ تعهد درازمدتی وجود ندارد. ساعتی یا منظم، هرطور که برایتان مناسب باشد.' },
            { f: 'چه کسی در Lern² تدریس می‌کند؟', a: 'معلمان متعهد، محصلان و فارغان مکتب با نمرات عالی — که با صبر و انگیزه کار می‌کنند.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #D6E4FF', backgroundColor: openFaq === i ? '#fff' : 'transparent', borderRadius: openFaq === i ? '8px' : '0', marginBottom: openFaq === i ? '8px' : '0' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'right', padding: '18px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F2A45' }}>{q.f}</span>
                <span style={{ fontSize: '20px', color: '#FFD60A', flexShrink: 0, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 16px 18px' }}>
                  <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.9', margin: 0 }}>{q.a}</p>
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
          <p style={{ fontSize: '13px', color: '#0F2A45', marginBottom: '16px', opacity: 0.7 }}>© ۲۰۲۶ Lern² · کاسل · تمام حقوق محفوظ است</p>
          <div className="footer-links" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '14px' }}>
            <a href={`https://wa.me/${WA}`} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp</a>
            <a href={IG} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Instagram</a>
            <a href={FB} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Facebook</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.6 }}>با ❤️ برای آیندهٔ فرزندان ما ساخته شده است</p>
        </div>
      </footer>

    </main>
  )
}
