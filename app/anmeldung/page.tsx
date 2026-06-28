"use client";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, User, Phone, Mail, MapPin, GraduationCap, Calendar, FileText, Heart } from "lucide-react";

const WA = "4915679576256";

type FormData = {
  // Stufe 1: Eltern
  vorname_eltern: string;
  nachname_eltern: string;
  telefon: string;
  email: string;
  strasse: string;
  plz_ort: string;
  // Stufe 2: Kind
  vorname_kind: string;
  nachname_kind: string;
  alter_kind: string;
  klassenstufe: string;
  schule: string;
  faecher: string;
  schwierigkeiten: string;
  // Stufe 3: Organisation
  unterrichtsform: string;
  zeiten: string;
  staatl_unterstuetzung: string;
  bewilligungsbescheid: string;
  anmerkungen: string;
  kommunikation: string;
  sprache_familie: string[];
  datenschutz_akzeptiert: boolean;
};
};

const empty: FormData = {
  vorname_eltern: '', nachname_eltern: '', telefon: '', email: '', strasse: '', plz_ort: '',
  vorname_kind: '', nachname_kind: '', alter_kind: '', klassenstufe: '', schule: '', faecher: '', schwierigkeiten: '',
  unterrichtsform: '', zeiten: '', staatl_unterstuetzung: '', bewilligungsbescheid: '', anmerkungen: '', kommunikation: '',
  sprache_familie: [],
  datenschutz_akzeptiert: false,
};

export default function Anmeldung() {
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
        body: JSON.stringify({ ...form, lang: 'de' }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.');
        setSubmitting(false);
        return;
      }
      setDone(true);
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.');
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6E4FF', fontSize: '14px', outline: 'none', backgroundColor: '#fff', fontFamily: "'Inter', sans-serif" };
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#0F2A45', marginBottom: '6px' };

  if (done) {
    return (
      <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ maxWidth: '520px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '16px', padding: '48px 32px', border: '1px solid #D6E4FF', boxShadow: '0 4px 24px rgba(58,134,255,0.08)' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Check size={36} color="#3A86FF" strokeWidth={2.5} />
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0F2A45', marginBottom: '12px' }}>Vielen Dank!</h1>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.7', marginBottom: '24px' }}>
            Ihre Anmeldung ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <a href="/" style={{ display: 'inline-block', backgroundColor: '#FFD60A', color: '#0F2A45', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Zurück zur Startseite</a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', padding: '24px 16px 60px' }}>
      <style>{`
        @media (max-width: 768px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Float WhatsApp */}
      <a href={`https://wa.me/${WA}`} target="_blank" style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, boxShadow: '0 4px 16px rgba(37,211,102,0.4)', textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L0 24l6.337-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.18-1.355l-.371-.22-3.862.914.978-3.768-.242-.388A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href="/"><img src="/logo.png" alt="Lern²" style={{ height: '52px', width: '52px', borderRadius: '10px', objectFit: 'cover' }} /></a>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: '#3A86FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '600' }}>Anmeldung</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: '800', color: '#0F2A45', marginBottom: '10px', letterSpacing: '-1px' }}>Anmeldeformular</h1>
          <p style={{ fontSize: '15px', color: '#556678', lineHeight: '1.6' }}>
            In 3 Schritten zur Nachhilfe. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        {/* Progress */}
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

        {/* Form Card */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #D6E4FF', borderRadius: '16px', padding: '32px 28px', boxShadow: '0 4px 24px rgba(58,134,255,0.06)' }}>
          {/* STEP 1: ELTERN */}
          {step === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} color="#3A86FF" strokeWidth={2} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', margin: 0 }}>Schritt 1: Eltern</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>
                Bitte alle Namen <strong>wie im Personalausweis</strong> eingeben.
              </p>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Vorname (Erziehungsberechtigte/r)*</label>
                  <input type="text" value={form.vorname_eltern} onChange={(e) => upd('vorname_eltern', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Nachname (Erziehungsberechtigte/r)*</label>
                  <input type="text" value={form.nachname_eltern} onChange={(e) => upd('nachname_eltern', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Telefon (bevorzugt WhatsApp)*</label>
                  <input type="tel" value={form.telefon} onChange={(e) => upd('telefon', e.target.value)} placeholder="0151 ..." style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>E-Mail-Adresse*</label>
                  <input type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Straße und Hausnummer</label>
                <input type="text" value={form.strasse} onChange={(e) => upd('strasse', e.target.value)} style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>PLZ und Ort</label>
                <input type="text" value={form.plz_ort} onChange={(e) => upd('plz_ort', e.target.value)} placeholder="34125 Kassel" style={inputStyle} />
              </div>
            </div>
          )}

          {/* STEP 2: KIND */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={20} color="#3A86FF" strokeWidth={2} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', margin: 0 }}>Schritt 2: Über das Kind</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>
                Erzählen Sie uns über das Kind, das gefördert werden soll.
              </p>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Vorname des Kindes*</label>
                  <input type="text" value={form.vorname_kind} onChange={(e) => upd('vorname_kind', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Nachname des Kindes</label>
                  <input type="text" value={form.nachname_kind} onChange={(e) => upd('nachname_kind', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Alter des Kindes</label>
                  <input type="number" value={form.alter_kind} onChange={(e) => upd('alter_kind', e.target.value)} min="5" max="20" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Klassenstufe*</label>
                  <select value={form.klassenstufe} onChange={(e) => upd('klassenstufe', e.target.value)} style={inputStyle}>
                    <option value="">Bitte wählen</option>
                    {['Grundschule (1-4)', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Berufsschule / Sonstiges'].map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Schule</label>
                <input type="text" value={form.schule} onChange={(e) => upd('schule', e.target.value)} placeholder="Name der Schule" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>In welchen Fächern braucht das Kind Unterstützung?</label>
                <input type="text" value={form.faecher} onChange={(e) => upd('faecher', e.target.value)} placeholder="z. B. Mathe, Deutsch, Englisch" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Welche Schwierigkeiten hat das Kind aktuell? (optional)</label>
                <textarea value={form.schwierigkeiten} onChange={(e) => upd('schwierigkeiten', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          )}

          {/* STEP 3: ORGANISATION */}
          {step === 3 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={20} color="#3A86FF" strokeWidth={2} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0F2A45', margin: 0 }}>Schritt 3: Organisation</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#556678', marginBottom: '20px' }}>
                Letzte Details — fast geschafft.
              </p>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Bevorzugte Unterrichtsform</label>
                <select value={form.unterrichtsform} onChange={(e) => upd('unterrichtsform', e.target.value)} style={inputStyle}>
                  <option value="">Bitte wählen</option>
                  <option>Vor Ort in Kassel</option>
                  <option>Online</option>
                  <option>Beides möglich</option>
                </select>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Passende Zeiten (Tage / Uhrzeiten)</label>
                <input type="text" value={form.zeiten} onChange={(e) => upd('zeiten', e.target.value)} placeholder="z. B. Mo + Mi, nachmittags ab 15 Uhr" style={inputStyle} />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Beziehen Sie staatliche Unterstützung?</label>
                  <select value={form.staatl_unterstuetzung} onChange={(e) => upd('staatl_unterstuetzung', e.target.value)} style={inputStyle}>
                    <option value="">Bitte wählen</option>
                    <option>Ja — Bürgergeld</option>
                    <option>Ja — Wohngeld</option>
                    <option>Ja — Kinderzuschlag</option>
                    <option>Nein</option>
                    <option>Weiß nicht</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Bewilligungsbescheid vorhanden?</label>
                  <select value={form.bewilligungsbescheid} onChange={(e) => upd('bewilligungsbescheid', e.target.value)} style={inputStyle}>
                    <option value="">Bitte wählen</option>
                    <option>Ja</option>
                    <option>Nein</option>
                    <option>Habe ich beantragt</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Bevorzugte Kommunikation</label>
                <select value={form.kommunikation} onChange={(e) => upd('kommunikation', e.target.value)} style={inputStyle}>
                  <option value="">Bitte wählen</option>
                  <option>WhatsApp</option>
                  <option>Telefon</option>
                  <option>E-Mail</option>
                  <option>Egal</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>Welche Sprache(n) sprechen Sie zuhause?</label>
                <p style={{ fontSize: '12px', color: '#8A9BAE', marginBottom: '10px', marginTop: '-2px' }}>Mehrfachauswahl möglich</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                  {['Deutsch', 'Arabisch', 'Türkisch', 'Farsi / Dari', 'Andere'].map((s) => {
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
                <label style={labelStyle}>Weitere Anmerkungen? (optional)</label>
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
                  Ich habe die <a href="/datenschutz" target="_blank" style={{ color: '#3A86FF', textDecoration: 'underline' }}>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.*
                </span>
              </label>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{ marginTop: '16px', padding: '12px 14px', backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '8px', fontSize: '14px', color: '#B91C1C' }}>
              {error}
            </div>
          )}

          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', gap: '10px' }}>
            {step > 1 ? (
              <button onClick={() => setStep((step - 1) as 1 | 2 | 3)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'transparent', color: '#3A86FF', border: '1px solid #D6E4FF', padding: '12px 18px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                <ChevronLeft size={16} /> Zurück
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
                Weiter <ChevronRight size={16} />
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
                {submitting ? 'Wird gesendet …' : 'Anmeldung absenden'}
              </button>
            )}
          </div>
        </div>

        {/* Footer-Hinweis */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#8A9BAE', marginTop: '20px' }}>
          Bei Fragen erreichen Sie uns jederzeit über WhatsApp unten rechts oder unter <a href="mailto:info@lern2.com" style={{ color: '#3A86FF', textDecoration: 'none' }}>info@lern2.com</a>.
        </p>
      </div>
    </main>
  );
}
