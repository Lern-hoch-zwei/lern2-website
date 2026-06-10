"use client";
import { useState } from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const waLink = (msg: string) =>
  `https://wa.me/4915679576256?text=${encodeURIComponent(msg)}`;

const msgs = {
  basis: `Merhaba Lern² Ekibi,\nTemel Paket (haftada 1 kez) hakkında bilgi almak istiyorum.\nBilgi verir misiniz?\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Basis-Paket (1x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  standard: `Merhaba Lern² Ekibi,\nStandart Paket (haftada 2 kez) hakkında bilgi almak istiyorum.\nBilgi verir misiniz?\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Standard-Paket (2x pro Woche).\nKönnen Sie mir mehr Infos geben?`,
  premium: `Merhaba Lern² Ekibi,\nPremium Paket (birebir özel ders) hakkında bilgi almak istiyorum.\nBilgi verir misiniz?\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für das Premium-Paket (1-zu-1).\nKönnen Sie mir mehr Infos geben?`,
  but: `Merhaba Lern² Ekibi,\nÇocuğumun BuT üzerinden ücretsiz ders alma hakkı olup olmadığını öğrenmek istiyorum.\n\nAsSalamu aleikum Lern²-Team,\nich möchte wissen ob mein Kind Anspruch auf kostenlose Nachhilfe über BuT hat.`,
  hero: `Merhaba Lern² Ekibi,\nÖzel ders hizmetleriniz hakkında bilgi almak istiyorum.\nBilgi verir misiniz?\n\nAsSalamu aleikum Lern²-Team,\nich interessiere mich für Nachhilfe bei Lern².\nKönnen Sie mir mehr Infos geben?`,
  general: `Merhaba Lern² Ekibi,\nLern² hizmetleri hakkında bilgi almak istiyorum.\n\nAsSalamu aleikum Lern²-Team,\nich möchte mehr über Lern² erfahren.`,
};

export default function HomeTr() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#0A0A0A', margin: 0 }}>

      {/* NAV */}
      <nav style={{ padding: '0 32px', height: '68px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <img src="/logo.png" alt="Lern²" style={{ height: '42px', width: '42px', borderRadius: '8px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LanguageDropdown current="tr" />
          <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>Ücretsiz bilgi al</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '560px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/full.png" alt="Arka plan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,42,69,0.78)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, padding: '72px 48px', maxWidth: '680px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(58,134,255,0.2)', border: '1px solid rgba(58,134,255,0.4)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFD60A', display: 'inline-block' }}></span>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>Kassel'de profesyonel özel ders</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', color: '#fff', marginBottom: '20px' }}>
            Çocuğunuzun daha iyi<br />notlar almasına<br /><span style={{ color: '#FFD60A' }}>yardımcı oluyoruz.</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '480px' }}>
            Kassel'de bireysel özel ders ve dil desteği — kişisel, düzenli ve birçok aile için tamamen ücretsiz.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Ücretsiz bilgi al</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#0F2A45', padding: '24px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '%100', l: 'BuT ile ücretsiz' },
            { n: '5 ★', l: "Google'da 10 değerlendirme" },
            { n: 'Tüm', l: 'dersler ve sınıflar' },
            { n: '24 saat içinde', l: 'yanıt süresi' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '12px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: i === 3 ? '15px' : '24px', fontWeight: '800', color: '#FFD60A' }}>{s.n}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderBottom: '1px solid #D6E4FF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Bunu biliyor musunuz?</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Birçok ebeveyn aynı zorluklarla karşılaşıyor.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {[
              { icon: '⏰', text: 'Çocuğunuza ödev konusunda yardımcı olmak için zamanınız yok mu?' },
              { icon: '📚', text: 'Okul müfredatını artık kendiniz anlayamıyor musunuz?' },
              { icon: '🤷', text: 'Nereden başlayacağınızı bilmiyor musunuz?' },
              { icon: '🌍', text: 'Almanca ana diliniz değil ve yardımcı olamıyor musunuz?' },
              { icon: '😟', text: 'Çocuğunuz okulda dersleri artık anlamıyor mu?' },
              { icon: '👨‍🏫', text: 'Öğretmenin bireysel ilgi için zamanı yok mu?' },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '12px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: '14px', color: '#334455', lineHeight: '1.6', fontWeight: '500', margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>Çözümümüz var — profesyonel, kişisel ve pek çok aile için ücretsiz.</p>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Hemen ücretsiz bilgi al</a>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 24px' }}>
        <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600' }}>Hakkımızda</p>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '16px', color: '#0F2A45' }}>Öğrencileri daha iyi notlara ulaşmalarında destekliyoruz</h2>
        <p style={{ fontSize: '16px', color: '#556678', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
          Yıllardır farklı geçmişlerden gelen çocuk ve gençlere potansiyellerini gerçekleştirmeleri için rehberlik ediyoruz. Bireysel özel ders ve dil desteğiyle bilgiyi, özgüveni ve başarılı bir gelecek için temeli güçlendiriyoruz.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {['Matematik', 'Almanca', 'İngilizce', 'Fizik', 'Kimya', 'Biyoloji', 'Arapça', 'Fransızca', 'Latince'].map(f => (
            <span key={f} style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', border: '1px solid #D6E4FF', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>{f}</span>
          ))}
          <span style={{ backgroundColor: '#FFFBEA', color: '#7A6500', border: '1px solid #FFE566', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>Tüm sınıflar, mülteciler dahil</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {[
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=90',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=90',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=90',
            'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=90',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={src} alt={`Öğrenci ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* SÜREÇ */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', borderTop: '1px solid #D6E4FF', borderBottom: '1px solid #D6E4FF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Süreç</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: '#0F2A45' }}>Adım adım daha iyi notlara</h2>
          <p style={{ fontSize: '16px', color: '#556678', textAlign: 'center', maxWidth: '560px', margin: '0 auto 52px' }}>
            Çocuğunuz bizim için merkezdedir — ilk tanışmadan ortak başarıya kadar.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { n: '1', icon: '👥', t: 'Tanışma & Değerlendirme', d: 'Kişisel bir görüşme ve kapsamlı bir değerlendirmeyle başlıyoruz — çocuğunuzun seviyesini ve ihtiyaçlarını tam olarak anlamak için.' },
              { n: '2', icon: '📅', t: 'Bireysel Öğrenme Planı', d: 'Değerlendirmeye dayanarak güçlü yönleri destekleyen ve zayıf yönleri adım adım gideren özel bir plan oluşturuyoruz.' },
              { n: '3', icon: '🎓', t: 'Takip & Başarı Kontrolü', d: 'Çocuğunuza sürekli eşlik ediyoruz, planı gerektiğinde güncelliyoruz ve ilerleme hakkında düzenli olarak bilgi veriyoruz.' },
            ].map((s) => (
              <div key={s.n} style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '14px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#FFD60A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', color: '#0F2A45', flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#0F2A45' }}>{s.t}</h3>
                  <p style={{ fontSize: '14px', color: '#556678', lineHeight: '1.7', margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waLink(msgs.hero)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Ücretsiz danışmanlık al</a>
            <a href={waLink(msgs.general)} target="_blank" style={{ backgroundColor: '#EEF4FF', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PAKETLER */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Paketler</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Her aile için doğru paket</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Temel', sub: 'Sağlam bir başlangıç.', key: 'basis', punkte: ['Haftada 1x 90 dakika', 'Küçük grup (maks. 4 öğrenci)', 'Ödev yardımı', 'İlerleme belgelenir'], highlight: false },
              { t: 'Standart', sub: "Çoğu aile için tavsiye edilir.", key: 'standard', punkte: ['Haftada 2x 90 dakika', 'Küçük grup (maks. 4 öğrenci)', 'Bireysel öğrenme hızı', 'Düzenli ebeveyn geri bildirimi', 'Aylık ilerleme analizi', 'Sınav hazırlığı dahil', 'Eksik analizi ve hedefli pratik'], highlight: true },
              { t: 'Premium', sub: 'Tam kapsamlı paket.', key: 'premium', punkte: ['Özel 1-e-1 ders', 'WhatsApp desteği Pzt-Cmt', 'Proaktif başarı raporları', 'Esnek randevu planlaması'], highlight: false },
            ].map(p => (
              <div key={p.t} style={{ border: p.highlight ? '2px solid #0F2A45' : '1px solid #E8EDF2', borderRadius: '12px', padding: '28px', position: 'relative', backgroundColor: p.highlight ? '#0F2A45' : '#fff' }}>
                {p.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFD60A', color: '#0F2A45', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Çoğu aile için tavsiye edilir</div>}
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
                  Paket hakkında bilgi al
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuT */}
      <section style={{ padding: '56px 24px', backgroundColor: '#F7F9FC', borderBottom: '1px solid #E8EDF2' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '36px 40px', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 24px rgba(58,134,255,0.08)', border: '1px solid #D6E4FF' }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '14px', border: '1px solid #D6E4FF' }}>Lern² Girişimi</div>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '800', marginBottom: '14px', color: '#0F2A45' }}>Eğitim yoluyla fırsat eşitliği</h2>
            <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', margin: 0 }}>
              <strong>Wohngeld, Bürgergeld</strong> veya <strong>Kinderzuschuss</strong> alıyor musunuz? O zaman özel dersler sizin için <strong>%100 ücretsiz</strong> — BuT programı aracılığıyla.
            </p>
          </div>
          <a href={waLink(msgs.but)} target="_blank" style={{ backgroundColor: '#FFD60A', color: '#0F2A45', padding: '14px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap' }}>Ücretsiz hak kontrolü</a>
        </div>
      </section>

      {/* SSS */}
      <section style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F7F9FC 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>SSS</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#0F2A45' }}>Sık sorulan sorular</h2>
          {[
            { f: 'Haftada kaç ders saati mantıklı?', a: 'Genellikle haftada 1–2 randevu öneriyoruz. Önemli sınavlar öncesinde yoğunlaştırılmış çalışma da mümkün.' },
            { f: 'Hangi dersler ve sınıf seviyeleri kapsanıyor?', a: "İlkokuldan liseye kadar tüm dersler — Matematik, Almanca, İngilizce, Fen Bilimleri ve daha fazlası." },
            { f: 'Aylık iptal edebilir miyim?', a: 'Evet — uzun vadeli bağlayıcılık yok. Saatlik veya düzenli, size nasıl uygunsa.' },
            { f: "Lern²'de kim ders veriyor?", a: 'Çok iyi notlara sahip öğretmenler, üniversite öğrencileri ve mezunlar — sabır ve motivasyonla çalışıyorlar.' },
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
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '64px', width: '64px', borderRadius: '12px', objectFit: 'cover', marginBottom: '16px' }} />
          <p style={{ fontSize: '13px', color: '#0F2A45', marginBottom: '16px', opacity: 0.7 }}>© 2026 Lern² · Kassel · Tüm hakları saklıdır</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '14px' }}>
            <a href={waLink(msgs.general)} target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp</a>
            <a href="https://www.instagram.com/lern_hoch_zwei" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Instagram</a>
            <a href="https://www.facebook.com/share/1EHvQ67ZQ8/" target="_blank" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>Facebook</a>
            <a href="/impressum" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Impressum</a>
            <a href="/datenschutz" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none' }}>Datenschutz</a>
          </div>
          <p style={{ fontSize: '12px', color: '#0F2A45', opacity: 0.6 }}>Çocuklarımızın geleceği için ❤️ ile geliştirildi</p>
        </div>
      </footer>
    </main>
  )
}
