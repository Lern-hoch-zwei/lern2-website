"use client";
import { useState } from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const waLink = (msg: string) =>
  `https://wa.me/4915679576256?text=${encodeURIComponent(msg)}`;

const msgs = {
  basis: `سلام تیم Lern²،\nمن به پکیج اساسی (یک بار در هفته) علاقه دارم.\nمعلومات بیشتر بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Basis-Paket (1x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  standard: `سلام تیم Lern²،\nمن به پکیج استندرد (دو بار در هفته) علاقه دارم.\nمعلومات بیشتر بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Standard-Paket (2x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  premium: `سلام تیم Lern²،\nمن به پکیج پریمیوم (درس خصوصی یک به یک) علاقه دارم.\nمعلومات بیشتر بدهید.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Premium-Paket (1-zu-1).\nKönnen Sie mir mehr Infos geben?`,
  but: `سلام تیم Lern²،\nمیخواهم بدانم آیا فرزندم حق درس مجانی از طریق BuT را دارد یا نه.\n\nAsSalamu aleikum Lern²-Team,\nich möchte wissen ob mein Kind Anspruch auf kostenlose Nachhilfe über BuT hat.`,
  hero: `سلام تیم Lern²،\nمیخواهم در مورد خدمات درس خصوصی معلومات بگیرم.\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für Nachhilfe bei Lern².\nKönnen Sie mir mehr Infos geben?`,
  general: `سلام تیم Lern²،\nمیخواهم در مورد خدمات Lern² معلومات بگیرم.\n\nAsSalamu aleikum Lern²-Team,\nich möchte mehr über Lern² erfahren.`,
};

export default function HomeFa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main dir="rtl" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      {/* NAV */}
      <nav style={{ padding: '0 32px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '42px', width: '42px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LanguageDropdown current="fa" />
          <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>مشوره رایگان</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '560px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="پس زمینه" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.78)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '72px 48px', maxWidth: '680px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(58,134,255,0.2)', border: '1px solid rgba(58,134,255,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>درس خصوصی حرفه‌ای در کاسل</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: '800', lineHeight: '1.2', color: '#fff', marginBottom: '20px' }}>
            به فرزندتان کمک می‌کنیم<br />نمرات بهتری<br /><span style={{ color: '#FFD60A' }}>بگیرد.</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '32px', maxWidth: '480px' }}>
            درس خصوصی فردی و آموزش زبان در کاسل — شخصی، منظم، و برای بسیاری از خانواده‌ها کاملاً رایگان.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>همین حالا رایگان مشوره بگیر</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>واتساپ</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#0F2A45', padding: '24px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '۱۰۰٪', l: 'رایگان از طریق BuT' },
            { n: '5 ★', l: 'بیش از ۱۰ نظر در Google' },
            { n: 'همه', l: 'مضامین و صنوف' },
            { n: 'ظرف ۲۴ ساعت', l: 'وقت پاسخ' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '12px 16px', borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: i === 3 ? '15px' : '24px', fontWeight: '800', color: '#FFD60A' }}>{s.n}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* مشکلات */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderBottom: '1px solid #D6E4FF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>آیا این را می‌شناسید؟</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>بسیاری از والدین با چالش‌های یکسانی روبرو هستند.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {[
              { icon: '⏰', text: 'وقت ندارید به فرزندتان در درس خانه کمک کنید؟' },
              { icon: '📚', text: 'مواد درسی را دیگر خودتان نمی‌فهمید؟' },
              { icon: '🤷', text: 'نمی‌دانید از کجا شروع کنید؟' },
              { icon: '🌍', text: 'زبان آلمانی زبان مادری‌تان نیست و نمی‌توانید کمک کنید؟' },
              { icon: '😟', text: 'فرزندتان دیگر مواد درسی را در مدرسه نمی‌فهمد؟' },
              { icon: '👨‍🏫', text: 'معلم وقت کافی برای توجه فردی ندارد؟' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '14px', color: '#334455', lineHeight: '1.7', fontWeight: '500', margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>ما راه حل داریم — حرفه‌ای، شخصی، و برای بسیاری از خانواده‌ها رایگان.</p>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>همین حالا رایگان مشوره بگیر</a>
          </div>
        </div>
      </section>

      {/* در باره ما */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 24px' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>درباره ما</p>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '16px', color: '#0F2A45' }}>شاگردان را در مسیر نمرات بهتر همراهی می‌کنیم</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.9', marginBottom: '24px', maxWidth: '700px' }}>
          سال‌هاست که کودکان و جوانان با پس‌زمینه‌های مختلف را در رسیدن به پتانسیل کامل‌شان همراهی می‌کنیم. با درس خصوصی فردی و آموزش زبان، دانش، اعتماد به نفس و پایه‌ای برای آینده موفق را تقویت می‌کنیم.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {['ریاضی', 'آلمانی', 'انگلیسی', 'فیزیک', 'کیمیا', 'بیولوژی', 'عربی', 'فرانسوی', 'لاتین'].map(f => (
            <span key={f} style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', border: '1px solid #D6E4FF', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>برای همه صنوف، از جمله پناهجویان</span>
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

      {/* BuT */}
      <section style={{ padding: '56px 24px', backgroundColor: '#F7F9FC', borderBottom: '1px solid #E8EDF2' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 40px', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(58,134,255,0.08)', border: '1px solid #D6E4FF' }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '14px', border: '1px solid #D6E4FF' }}>ابتکار Lern²</div>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '800', marginBottom: '14px', color: '#0F2A45' }}>برابری فرصت از طریق آموزش</h2>
            <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8', margin: 0 }}>
              آیا <strong>Wohngeld، Bürgergeld</strong> یا <strong>Kinderzuschuss</strong> می‌گیرید؟ در آن صورت درس خصوصی برای شما <strong>۱۰۰٪ رایگان</strong> است — از طریق BuT.
            </p>
          </div>
          <a href={waLink(msgs.but)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>بررسی رایگان حق</a>
        </div>
      </section>

      {/* سوالات متداول */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>سوالات متداول</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>سوالاتی که والدین می‌پرسند</h2>
          {[
            { f: 'در هفته چند جلسه درس منطقی است؟', a: 'معمولاً ۱-۲ جلسه در هفته توصیه می‌کنیم. قبل از امتحانات مهم، می‌توان موقتاً فشرده‌تر کار کرد.' },
            { f: 'کدام مضامین و صنوف پوشش داده می‌شوند؟', a: 'درس در همه مضامین از صنف اول تا دوازدهم — ریاضی، آلمانی، انگلیسی، علوم و بیشتر.' },
            { f: 'آیا می‌توانم ماهانه فسخ کنم؟', a: 'بله — بدون تعهد بلندمدت. ساعتی یا منظم، هر طور که راحت‌تر است.' },
            { f: 'در Lern² چه کسانی درس می‌دهند؟', a: 'معلمان مجرب، محصلان پوهنتون و فارغ‌التحصیلان با نمرات عالی — با صبر و انگیزه کار می‌کنند.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #D6E4FF', backgroundColor: openFaq === i ? '#fff' : 'transparent', borderRadius: openFaq === i ? '8px' : '0', marginBottom: openFaq === i ? '8px' : '0' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'right', padding: '18px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F2A45' }}>{q.f}</span>
                <span style={{ fontSize: '20px', color: '#FFD60A', flexShrink: 0, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 16px 18px' }}>
                  <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', margin: 0 }}>{q.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFD60A', padding: '44px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '64px', width: '64px', borderRadius: '12px', objectFit: 'cover', marginBottom: '16px' }} />
          <p style={{ fontSize: '13px', color: '#0F2A45', marginBottom: '16px', opacity: 0.7 }}>© 2026 Lern² · کاسل · تمام حقوق محفوظ است</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '14px' }}>
            <a href={waLink(msgs.general)} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>واتساپ</a>
            <a href="https://www.instagram.com/lern_hoch_2" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>اینستاگرام</a>
            <a href="https://www.facebook.com/share/1EHvQ67ZQ8/" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>فیسبوک</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.6 }}>با ❤️ برای آینده فرزندان ما ساخته شده</p>
        </div>
      </footer>
    </main>
  )
}
