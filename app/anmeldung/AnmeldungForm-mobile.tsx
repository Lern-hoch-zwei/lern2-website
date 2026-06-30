"use client";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { t, dir, Lang } from "./translations";

const WA = "4915679576256";

type FormData = {
  vorname_eltern: string;
  nachname_eltern: string;
  telefon: string;
  email: string;
  strasse: string;
  plz_ort: string;
  vorname_kind: string;
  nachname_kind: string;
  alter_kind: string;
  klassenstufe: string;
  schule: string;
  faecher: string;
  schwierigkeiten: string;
  unterrichtsform: string;
  zeiten: string;
  staatl_unterstuetzung: string;
  bewilligungsbescheid: string;
  anmerkungen: string;
  kommunikation: string;
  sprache_familie: string[];
  datenschutz_akzeptiert: boolean;
};

const empty: FormData = {
  vorname_eltern: '', nachname_eltern: '', telefon: '', email: '', strasse: '', plz_ort: '',
  vorname_kind: '', nachname_kind: '', alter_kind: '', klassenstufe: '', schule: '', faecher: '', schwierigkeiten: '',
  unterrichtsform: '', zeiten: '', staatl_unterstuetzung: '', bewilligungsbescheid: '', anmerkungen: '', kommunikation: '',
  sprache_familie: [],
  datenschutz_akzeptiert: false,
};

export default function AnmeldungForm({ lang }: { lang: Lang }) {
  const tt = t[lang];
  const rtl = dir[lang] === 'rtl';

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormData>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upd = (k: keyof FormData, v: string | boolean) => setForm({ ...form, [k]: v as any });
  const toggleSprache = (s: string) => {
    const has = form.sprache_familie.includes(s);
    setForm({ ...form, sprache_familie: has ? form.sprache_familie.filter(x => x !== s) : [...form.sprache_familie, s] });
  };

  const step1Valid = !!(form.vorname_eltern && form.nachname_eltern && form.telefon && form.email);
  const step2Valid = !!(form.vorname_kind && form.klassenstufe);
  const step3Valid = !!form.datenschutz_akzeptiert;

  const submit = async () => {
    if (!step3Valid) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/anmeldung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(tt.errorGeneric);
        setSubmitting(false);
        return;
      }
      setDone(true);
    } catch {
      setError(tt.errorConnection);
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff', fontFamily: "'Inter', sans-serif" };
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' };

  if (done) {
    return (
      <main dir={rtl ? 'rtl' : 'ltr'} style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ maxWidth: '520px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '16px', padding: '48px 32px', border: '1px solid #D6E4FF', boxShadow: '0 4px 24px rgba(58,134,255,0.08)' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Check size={36} color="#3A86FF" strokeWidth={2.5} />
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0F2A45', marginBottom: '12px' }}>{tt.successTitle}</h1>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', marginBottom: '24px' }}>{tt.successText}</p>
          <a href="/" style={{ display: 'inline-block', backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>{tt.backHome}</a>
        </div>
      </main>
    );
  }

  return (
    <main dir={rtl ? 'rtl' : 'ltr'} style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', padding: '24px 16px 60px' }}>
      <style>{`
        @media (max-width: 768px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
          .anmeldung-card { padding: 24px 18px !important; }
        }
      `}</style>

      <a href={`https://wa.me/${WA}`} target="_blank" style={{ position: 'fixed', bottom: '24px', [rtl ? 'left' : 'right']: '24px', width: '56px', height: '56px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, boxShadow: '0 4px 16px rgba(37,211,102,0.4)', textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L0 24l6.337-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.18-1.355l-.371-.22-3.862.914.978-3.768-.242-.388A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href="/"><img src="/logo.png" alt="Lern²" style={{ height: '52px', width: '52px', borderRadius: '10px', objectFit: 'cover' }} /></a>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '600' }}>{tt.badge}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: '800', color: '#0F2A45', marginBottom: '10px', letterSpacing: '-1px' }}>{tt.title}</h1>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.6' }}>{tt.subtitle}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: step >= n ? '#3A86FF' : '#fff',
                border: step >= n ? '2px solid #3A86FF' : '2px solid #D6E4FF',
                color: step >= n ? '#fff' : '#8A9BAE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '800', fontSize: '14px',
                transition: 'all 0.2s ease',
              }}>
                {step > n ? <Check size={18} strokeWidth={3} /> : n}
              </div>
              {n < 3 && (
                <div style={{ width: '40px', height: '2px', backgroundColor: step > n ? '#3A86FF' : '#D6E4FF', transition: 'background-color 0.2s ease' }}></div>
              )}
            </div>
          ))}
        </div>

        <div className="anmeldung-card" style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '16px', padding: '32px 28px', boxShadow: '0 4px 24px rgba(58,134,255,0.06)' }}>
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', marginBottom: '8px' }}>{tt.step1Title}</h2>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>{tt.step1Sub}</p>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>{tt.vornameEltern}</label>
                  <input type="text" value={form.vorname_eltern} onChange={(e) => upd('vorname_eltern', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{tt.nachnameEltern}</label>
                  <input type="text" value={form.nachname_eltern} onChange={(e) => upd('nachname_eltern', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>{tt.telefon}</label>
                  <input type="tel" value={form.telefon} onChange={(e) => upd('telefon', e.target.value)} placeholder="0151 ..." style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{tt.email}</label>
                  <input type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.strasse}</label>
                <input type="text" value={form.strasse} onChange={(e) => upd('strasse', e.target.value)} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>{tt.plzOrt}</label>
                <input type="text" value={form.plz_ort} onChange={(e) => upd('plz_ort', e.target.value)} placeholder="34125 Kassel" style={inputStyle} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', marginBottom: '8px' }}>{tt.step2Title}</h2>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>{tt.step2Sub}</p>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>{tt.vornameKind}</label>
                  <input type="text" value={form.vorname_kind} onChange={(e) => upd('vorname_kind', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{tt.nachnameKind}</label>
                  <input type="text" value={form.nachname_kind} onChange={(e) => upd('nachname_kind', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>{tt.alterKind}</label>
                  <input type="number" value={form.alter_kind} onChange={(e) => upd('alter_kind', e.target.value)} min="5" max="20" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>{tt.klassenstufe}</label>
                  <select value={form.klassenstufe} onChange={(e) => upd('klassenstufe', e.target.value)} style={inputStyle}>
                    <option value="">{tt.bitteWaehlen}</option>
                    {tt.klassenstufeOptions.map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.schule}</label>
                <input type="text" value={form.schule} onChange={(e) => upd('schule', e.target.value)} placeholder={tt.schulePlaceholder} style={inputStyle} />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.faecher}</label>
                <input type="text" value={form.faecher} onChange={(e) => upd('faecher', e.target.value)} placeholder={tt.faecherPlaceholder} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>{tt.schwierigkeiten}</label>
                <textarea value={form.schwierigkeiten} onChange={(e) => upd('schwierigkeiten', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', marginBottom: '8px' }}>{tt.step3Title}</h2>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>{tt.step3Sub}</p>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.unterrichtsform}</label>
                <select value={form.unterrichtsform} onChange={(e) => upd('unterrichtsform', e.target.value)} style={inputStyle}>
                  <option value="">{tt.bitteWaehlen}</option>
                  {tt.unterrichtsformOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.zeiten}</label>
                <input type="text" value={form.zeiten} onChange={(e) => upd('zeiten', e.target.value)} placeholder={tt.zeitenPlaceholder} style={inputStyle} />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>{tt.staatlUnterstuetzung}</label>
                  <select value={form.staatl_unterstuetzung} onChange={(e) => upd('staatl_unterstuetzung', e.target.value)} style={inputStyle}>
                    <option value="">{tt.bitteWaehlen}</option>
                    {tt.staatlOptions.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{tt.bewilligungsbescheid}</label>
                  <select value={form.bewilligungsbescheid} onChange={(e) => upd('bewilligungsbescheid', e.target.value)} style={inputStyle}>
                    <option value="">{tt.bitteWaehlen}</option>
                    {tt.bewilligungOptions.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>{tt.kommunikation}</label>
                <select value={form.kommunikation} onChange={(e) => upd('kommunikation', e.target.value)} style={inputStyle}>
                  <option value="">{tt.bitteWaehlen}</option>
                  {tt.kommunikationOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>{tt.spracheFamilie}</label>
                <p style={{ fontSize: '12px', color: '#8A9BAE', marginBottom: '10px', marginTop: '-2px' }}>{tt.spracheSub}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                  {tt.spracheOptions.map((s) => {
                    const active = form.sprache_familie.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleSprache(s)}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: active ? '2px solid #3A86FF' : '1px solid #D6E4FF',
                          backgroundColor: active ? '#EEF4FF' : '#fff',
                          color: active ? '#0F2A45' : '#556678',
                          fontSize: '14px',
                          fontWeight: active ? '700' : '500',
                          cursor: 'pointer',
                          fontFamily: "'Inter', sans-serif",
                          textAlign: 'center',
                          transition: 'all 0.15s ease',
                        }}>
                        {active ? '✓ ' : ''}{s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>{tt.anmerkungen}</label>
                <textarea value={form.anmerkungen} onChange={(e) => upd('anmerkungen', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', backgroundColor: '#F7F9FC', padding: '14px', borderRadius: '10px', border: '1px solid #D6E4FF' }}>
                <input
                  type="checkbox"
                  checked={form.datenschutz_akzeptiert}
                  onChange={(e) => upd('datenschutz_akzeptiert', e.target.checked)}
                  style={{ marginTop: '3px', flexShrink: 0, width: '16px', height: '16px', accentColor: '#3A86FF', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '13px', color: '#334455', lineHeight: '1.6' }}>
                  {tt.datenschutzPre}<a href="/datenschutz" target="_blank" style={{ color: '#3A86FF', textDecoration: 'underline' }}>{tt.datenschutzLink}</a>{tt.datenschutzPost}
                </span>
              </label>
            </div>
          )}

          {error && (
            <div style={{ marginTop: '16px', padding: '12px 14px', backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '8px', fontSize: '14px', color: '#B91C1C' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', gap: '10px' }}>
            {step > 1 ? (
              <button onClick={() => setStep((step - 1) as 1 | 2 | 3)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'transparent', color: '#3A86FF', border: '1px solid #D6E4FF', padding: '12px 18px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                {rtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />} {tt.buttonZurueck}
              </button>
            ) : <div></div>}

            {step < 3 ? (
              <button
                onClick={() => setStep((step + 1) as 1 | 2 | 3)}
                disabled={(step === 1 && !step1Valid) || (step === 2 && !step2Valid)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  backgroundColor: ((step === 1 && step1Valid) || (step === 2 && step2Valid)) ? '#FFD60A' : '#E8EDF2',
                  color: ((step === 1 && step1Valid) || (step === 2 && step2Valid)) ? '#0F2A45' : '#AAB',
                  padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px',
                  cursor: ((step === 1 && step1Valid) || (step === 2 && step2Valid)) ? 'pointer' : 'not-allowed',
                  fontFamily: "'Inter', sans-serif", transition: 'all 0.2s ease',
                }}>
                {tt.buttonWeiter} {rtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={!step3Valid || submitting}
                style={{
                  backgroundColor: step3Valid && !submitting ? '#FFD60A' : '#E8EDF2',
                  color: step3Valid && !submitting ? '#0F2A45' : '#AAB',
                  padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px',
                  cursor: step3Valid && !submitting ? 'pointer' : 'not-allowed',
                  fontFamily: "'Inter', sans-serif", transition: 'all 0.2s ease',
                }}>
                {submitting ? tt.buttonWirdGesendet : tt.buttonAbsenden}
              </button>
            )}
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#8A9BAE', marginTop: '20px' }}>
          {tt.footerPre}<a href="mailto:info@lern2.com" style={{ color: '#3A86FF', textDecoration: 'none' }}>info@lern2.com</a>.
        </p>
      </div>
    </main>
  );
}
