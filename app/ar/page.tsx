"use client";
import LanguageDropdown from "../components/LanguageDropdown";
import { useState } from "react";

const waLink = (msg: string) =>
  `https://wa.me/4915679576256?text=${encodeURIComponent(msg)}`;

const msgs = {
  basis: `السلام عليكم فريق Lern²،\nأنا مهتم بالباقة الأساسية (مرة في الأسبوع).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Basis-Paket (1x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  standard: `السلام عليكم فريق Lern²،\nأنا مهتم بالباقة الاعتيادية (مرتين في الأسبوع).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Standard-Paket (2x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  premium: `السلام عليكم فريق Lern²،\nأنا مهتم بالباقة المميزة (تدريس فردي).\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Premium-Paket (1-zu-1).\nKönnen Sie mir mehr Infos geben?`,
  but: `السلام عليكم فريق Lern²،\nأريد معرفة ما إذا كان طفلي يحق له الحصول على دروس مجانية عبر BuT.\n\nAsSalamu aleikum Lern²-Team,\nich möchte wissen ob mein Kind Anspruch auf kostenlose Nachhilfe über BuT hat.`,
  hero: `السلام عليكم فريق Lern²،\nأريد الاستفسار عن خدمات الدروس الخصوصية.\nهل يمكنكم إعطائي مزيداً من المعلومات؟\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für Nachhilfe bei Lern².\nKönnen Sie mir mehr Infos geben?`,
  general: `السلام عليكم فريق Lern²،\nأريد الاستفسار عن خدمات Lern².\n\nAsSalamu aleikum Lern²-Team,\nich möchte mehr über Lern² erfahren.`,
};

export default function HomeAr() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main dir="rtl" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      {/* NAV */}
      <nav style={{ padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LanguageDropdown current="ar" />
          <a href={waLink(msgs.general)} target="_blank" style={{ color: '#666', fontSize: '14px', textDecoration: 'none', padding: '8px 12px' }}>واتساب</a>
          <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>استفسر مجاناً</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="خلفية" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.78)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 48px', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(58,134,255,0.2)', border: '1px solid rgba(58,134,255,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>دروس خصوصية احترافية في كاسل</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 62px)', fontWeight: '800', lineHeight: '1.2', color: '#fff', marginBottom: '20px' }}>
            نساعد طفلكم على<br />تحقيق<br /><span style={{ color: '#FFD60A' }}>نتائج أفضل.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '36px', maxWidth: '500px' }}>
            دروس خصوصية فردية وتعليم لغات في كاسل — شخصية، منظمة، ومجانية تماماً للعائلات المستحقة.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '16px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>استفسر الآن مجاناً</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '16px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>واتساب</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#0F2A45', padding: '28px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '100%', l: 'مجاناً عبر BuT' },
            { n: '5 ★', l: 'أكثر من 10 تقييم على Google' },
            { n: 'جميع', l: 'المواد والمراحل الدراسية' },
            { n: 'خلال 24 ساعة', l: 'وقت الرد' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '12px 20px', borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: i === 3 ? '16px' : '26px', fontWeight: '800', color: '#FFD60A' }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderBottom: '1px solid #D6E4FF', padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>هل تعرفون هذا؟</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>كثير من الأهالي يواجهون نفس التحديات.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: '⏰', text: 'ليس لديكم وقت لمساعدة طفلكم في الواجبات المنزلية؟' },
              { icon: '📚', text: 'لا تفهمون المناهج الدراسية بعد الآن؟' },
              { icon: '🤷', text: 'لا تعرفون من أين تبدأون؟' },
              { icon: '🌍', text: 'اللغة الألمانية ليست لغتكم الأم ولا تستطيعون المساعدة؟' },
              { icon: '😟', text: 'طفلكم لا يفهم المادة في المدرسة؟' },
              { icon: '👨‍🏫', text: 'المعلم ليس لديه وقت للاهتمام الفردي؟' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0 2px 8px rgba(58,134,255,0.06)' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '15px', color: '#334455', lineHeight: '1.7', fontWeight: '500' }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '20px' }}>لدينا الحل — احترافي، شخصي، ومجاني للعائلات المستحقة.</p>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>استفسر الآن مجاناً</a>
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 32px' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>عنّا</p>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '16px', color: '#0F2A45' }}>ندعم الطلاب في طريقهم نحو نتائج أفضل</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.9', marginBottom: '24px', maxWidth: '700px' }}>
          منذ سنوات ونحن نرافق الأطفال والشباب من خلفيات مختلفة لمساعدتهم على تحقيق إمكاناتهم الكاملة. من خلال دروس خصوصية فردية وتعليم اللغات، نعزز المعرفة والثقة بالنفس كأساس لمستقبل ناجح.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {['الرياضيات', 'اللغة الألمانية', 'اللغة الإنجليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'اللغة العربية', 'اللغة الفرنسية', 'اللاتينية'].map(f => (
            <span key={f} style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', border: '1px solid #D6E4FF', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>لجميع المراحل، بما فيها اللاجئون</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=90',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=90',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=90',
            'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=90',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`طالب ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>كيف نعمل</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>خطوة بخطوة نحو نتائج أفضل</h2>
          <p style={{ fontSize: '16px', color: '#556678', textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}>
            طفلكم في مركز اهتمامنا — من أول لقاء حتى النجاح المشترك.
          </p>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #FFD60A, #3A86FF)', transform: 'translateX(-50%)', zIndex: 0 }}></div>
            {[
              { n: '١', icon: '👥', t: 'التعارف والتقييم', d: 'نبدأ بمحادثة شخصية وتقييم شامل لفهم مستوى طفلكم واحتياجاته بدقة.', side: 'right' },
              { n: '٢', icon: '📅', t: 'خطة تعليمية فردية', d: 'بناءً على التقييم، نضع خطة تعليمية مخصصة تعزز نقاط القوة وتعالج نقاط الضعف خطوة بخطوة.', side: 'left' },
              { n: '٣', icon: '🎓', t: 'المتابعة وقياس النجاح', d: 'نرافق طفلكم باستمرار، ونعدّل الخطة عند الحاجة، ونطلعكم بانتظام على التقدم المحرز.', side: 'right' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: s.side === 'right' ? 'flex-end' : 'flex-start', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
                <div style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)', width: '44px', height: '44px', backgroundColor: '#FFD60A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', color: '#0F2A45', border: '3px solid #fff', boxShadow: '0 0 0 2px #FFD60A', zIndex: 2 }}>{s.n}</div>
                <div style={{ width: '44%', backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(58,134,255,0.08)' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.8' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>استشارة مجانية الآن</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>واتساب</a>
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>باقاتنا</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>الباقة المناسبة لكل عائلة</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'الأساسية', sub: 'البداية الصحيحة.', key: 'basis', punkte: ['مرة واحدة أسبوعياً 90 دقيقة', 'مجموعة صغيرة (حد أقصى 4 طلاب)', 'مساعدة في الواجبات المنزلية', 'توثيق التقدم الدراسي'], highlight: false },
              { t: 'الاعتيادية', sub: 'الأنسب لمعظم العائلات.', key: 'standard', punkte: ['مرتان أسبوعياً 90 دقيقة', 'مجموعة صغيرة (حد أقصى 4 طلاب)', 'وتيرة تعلم فردية', 'تقارير دورية للأهل', 'تحليل التقدم شهرياً', 'تحضير للامتحانات مشمول', 'تحليل الثغرات وتمارين مركزة'], highlight: true },
              { t: 'المميزة', sub: 'الباقة الشاملة.', key: 'premium', punkte: ['تدريس فردي حصري 1-على-1', 'دعم واتساب الاثنين - السبت', 'تقارير نجاح استباقية للأهل', 'مرونة في تحديد المواعيد'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #0F2A45' : '1px solid #E8EDF2', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: p.highlight ? '#0F2A45' : '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0F2A45', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>الأنسب لمعظم العائلات</div>}
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: p.highlight ? '#fff' : '#0F2A45', marginBottom: '6px' }}>Lern² {p.t}</h3>
                <p style={{ fontSize: '13px', color: p.highlight ? 'rgba(255,255,255,0.6)' : '#8A9BAE', marginBottom: '20px' }}>{p.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {p.punkte.map(punkt => (
                    <li key={punkt} style={{ fontSize: '14px', color: p.highlight ? 'rgba(255,255,255,0.9)' : '#556678', padding: '8px 0', borderBottom: `1px solid ${p.highlight ? 'rgba(255,255,255,0.1)' : '#F0F4F8'}`, display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#FFD60A', fontWeight: '800', flexShrink: 0 }}>✓</span>{punkt}
                    </li>
                  ))}
                </ul>
                <a href={waLink(msgs[p.key as keyof typeof msgs])} target="_blank" style={{ display: 'block', textAlign: 'center', backgroundColor: p.highlight ? '#FFD60A' : '#EEF4FF', color: '#0F2A45', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  استفسر عن الباقة
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>التقييمات</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '8px', textAlign: 'center', color: '#0F2A45' }}>ماذا يقول أهالينا</h2>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a href="https://www.google.com/maps/place/Lern%C2%B2" target="_blank" style={{ fontSize: '14px', color: '#556678', textDecoration: 'none' }}>⭐ 5 من 5 نجوم · أكثر من 10 تقييم على Google</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { name: 'عمرو ع', text: 'دروس ممتازة! طفلي تحسّن بشكل ملحوظ في وقت قصير. الشرح واضح وأسلوب التعامل رائع. نحن سعداء جداً وننصح به بشدة.' },
              { name: 'Abod A.', text: 'الدروس جيدة جداً. المعلمون ودودون ويشرحون كل شيء بوضوح. طفلي يتعلم كثيراً ويحرز تقدماً ممتازاً.' },
              { name: 'Samer A.', text: 'تمكنت من سد الثغرات في دراستي وأشعر بثقة أكبر في المدرسة، خاصة في الاختبارات.' },
              { name: 'Abdulkader O.', text: 'دوام التوفيق لمشروعكم الذي يهدف لتعزيز قدرات أبنائنا في اللغة الالمانية والإنكليزية.' },
              { name: 'Nora H.', text: 'شكراً لكم، بفضلكم وبفضل جهودكم أولادي أصبحوا أفضل وعلاماتهم جيدة. شكراً لجهودكم.' },
            ].map(r => (
              <div key={r.name} style={{ border: '1px solid #D6E4FF', borderRadius: '12px', padding: '24px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(58,134,255,0.06)' }}>
                <div style={{ color: '#FFD60A', fontSize: '14px', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.8', marginBottom: '12px' }}>"{r.text}"</p>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#0F2A45' }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section style={{ position: 'relative', padding: '80px 32px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/st2.jpg" alt="خلفية" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.82)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#fff', marginBottom: '16px', lineHeight: '1.5' }}>
            معاً نبني ثقة جديدة ونسد الفجوات المعرفية بشكل دائم.
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0 32px' }}>
            {['أونلاين أو في المنزل', 'مناسب للعائلات', 'ابدأ الآن'].map(f => (
              <span key={f} style={{ color: '#FFD60A', fontSize: '14px', fontWeight: '600' }}>✓ {f}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>استفسر الآن مجاناً</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'transparent', color: '#FFD60A', border: '2px solid #FFD60A', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>واتساب</a>
          </div>
        </div>
      </section>

      {/* INITIATIVE */}
      <section style={{ padding: '60px 32px', backgroundColor: '#F7F9FC', borderBottom: '1px solid #E8EDF2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '40px 48px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(58,134,255,0.08)', border: '1px solid #D6E4FF' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', border: '1px solid #D6E4FF' }}>مبادرة Lern²</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '800', marginBottom: '16px', color: '#0F2A45' }}>تكافؤ الفرص من خلال التعليم</h2>
            <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8' }}>
              نؤمن بأن كل طفل يستحق أفضل رعاية تعليمية. هل تتلقون <strong>Wohngeld أو Bürgergeld أو Kinderzuschuss</strong>؟ إذن الدروس الخصوصية <strong>مجانية 100%</strong> لكم عبر BuT.
            </p>
          </div>
          <a href={waLink(msgs.but)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>تحقق من أهليتك مجاناً</a>
        </div>
      </section>

      {/* PARTNER */}
      <section style={{ padding: '48px 32px', textAlign: 'center', borderBottom: '1px solid #E8EDF2' }}>
        <p style={{ fontSize: '12px', color: '#8A9BAE', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>شريكنا الذي يثق بنا</p>
        <a href="https://klarooai.com/de" target="_blank" rel="noopener noreferrer">
          <img src="/klaroo.png" alt="KlarOo AI" style={{ height: '56px', objectFit: 'contain' }} />
        </a>
      </section>

      {/* FAQ */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>الأسئلة الشائعة</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: '#0F2A45' }}>أسئلة يطرحها أهالينا كثيراً</h2>
          {[
            { f: 'كم عدد حصص الدروس الخصوصية الأسبوعية المناسبة؟', a: 'نوصي عادةً بـ 1-2 مواعيد أسبوعياً. قبل الاختبارات المهمة يمكن تكثيف الدروس مؤقتاً.' },
            { f: 'ما المواد والمراحل الدراسية التي تغطيها دروسكم؟', a: 'نقدم دروساً في جميع المواد من الابتدائية حتى الثانوية — الرياضيات، اللغات، العلوم وغيرها.' },
            { f: 'هل يمكنني الإلغاء شهرياً؟', a: 'نعم — لا ارتباط طويل الأمد. حصص فردية أو منتظمة، كيفما يناسبكم.' },
            { f: 'من يدرّس في Lern²؟', a: 'معلمون متحمسون وطلاب جامعيون وخريجون بدرجات ممتازة — يعملون بصبر وتحفيز.' },
          ].map((q, i) => (
            <div key={i} style={{ borderBottom: '1px solid #D6E4FF', backgroundColor: openFaq === i ? '#fff' : 'transparent', borderRadius: openFaq === i ? '8px' : '0', marginBottom: openFaq === i ? '8px' : '0' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'right', padding: '20px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#0F2A45' }}>{q.f}</span>
                <span style={{ fontSize: '20px', color: '#FFD60A', flexShrink: 0, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 16px 20px' }}>
                  <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7' }}>{q.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFD60A', padding: '48px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '72px', width: '72px', borderRadius: '14px', objectFit: 'cover', marginBottom: '20px' }} />
          <p style={{ fontSize: '14px', color: '#0F2A45', marginBottom: '20px', opacity: 0.7 }}>© 2026 Lern² · كاسل · جميع الحقوق محفوظة</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href={waLink(msgs.general)} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>واتساب</a>
            <a href="https://www.instagram.com/lern_hoch_2" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>إنستغرام</a>
            <a href="https://www.facebook.com/share/1EHvQ67ZQ8/" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>فيسبوك</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '13px', color: '#0F2A45', opacity: 0.6 }}>طُوِّر بـ ❤️ من أجل مستقبل أطفالنا</p>
        </div>
      </footer>

    </main>
  )
}
