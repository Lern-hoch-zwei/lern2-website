export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#FAFAF7',
        margin: 0,
      }}
    >
      {/* NAV */}
      <nav
        style={{
          backgroundColor: '#FFD60A',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{ fontSize: '26px', fontWeight: 'bold', color: '#2F2B29' }}
        >
          Lern²
        </span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href="https://wa.me/4915679576256"
            style={{
              backgroundColor: '#2F2B29',
              color: '#FFD60A',
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            WhatsApp
          </a>
          <a
            href="https://forms.gle/1YJEYPZZNyvxG8os5"
            style={{
              backgroundColor: '#2F2B29',
              color: '#FFD60A',
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Jetzt anmelden
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: '80px 32px',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '20px',
            lineHeight: '1.2',
          }}
        >
          Wir helfen Ihrem Kind, bessere Noten zu erreichen
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: '#555',
            marginBottom: '32px',
            lineHeight: '1.7',
          }}
        >
          Individuelle Nachhilfe und Sprachförderung in Kassel und Umgebung,
          damit Ihr Kind sein Potenzial entfaltet.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://forms.gle/1YJEYPZZNyvxG8os5"
            style={{
              backgroundColor: '#FFD60A',
              color: '#2F2B29',
              padding: '16px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Jetzt KOSTENLOS Beratung anfragen
          </a>
          <a
            href="https://wa.me/4915679576256"
            style={{
              backgroundColor: '#2F2B29',
              color: '#FFD60A',
              padding: '16px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '60px 32px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          Wir unterstützen Schüler auf dem Weg zu besseren Noten
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          Seit vielen Jahren begleiten wir Kinder und Jugendliche mit und ohne
          Migrationshintergrund dabei, ihr volles Potenzial zu entfalten. Mit
          individueller Nachhilfe und Sprachförderung stärken wir Wissen,
          Selbstvertrauen und die Basis für eine erfolgreiche Zukunft.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          {[
            'Mathematik',
            'Physik',
            'Chemie',
            'Biologie',
            'Arabisch',
            'Deutsch',
            'Englisch',
            'Französisch',
          ].map((f) => (
            <span
              key={f}
              style={{
                backgroundColor: '#FFD60A',
                color: '#2F2B29',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '14px',
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* SO LÄUFTS AB */}
      <section
        style={{ padding: '60px 32px', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Schritt für Schritt zur besseren Note
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            {
              n: '1',
              t: 'Kennenlernen & Analyse',
              d: 'Wir starten mit einem persönlichen Gespräch und einer gründlichen Analyse, um den Lernstand und die Bedürfnisse Ihres Kindes genau zu verstehen.',
            },
            {
              n: '2',
              t: 'Individueller Lernplan',
              d: 'Auf Basis der Analyse erstellen wir einen maßgeschneiderten Lernplan, der gezielt Stärken fördert und Schwächen Schritt für Schritt abbaut.',
            },
            {
              n: '3',
              t: 'Begleitung & Erfolgskontrolle',
              d: 'Wir begleiten Ihr Kind kontinuierlich, passen den Plan bei Bedarf an und halten Sie regelmäßig über die Fortschritte auf dem Laufenden.',
            },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '12px',
                border: '1.5px solid #eee',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFD60A',
                  color: '#2F2B29',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#2F2B29',
                    marginBottom: '8px',
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}
                >
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAKETE */}
      <section style={{ backgroundColor: '#2F2B29', padding: '60px 32px' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#FFD60A',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Unsere Kursangebote
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              t: 'Lern² Basis',
              sub: 'Der solide Einstieg.',
              punkte: [
                '1x 90 Min pro Woche in Kleingruppe (max. 4 Schüler)',
                'Hilfe bei aktuellen Hausaufgaben',
                'Solide Grundbetreuung',
              ],
            },
            {
              t: 'Lern² Standard',
              sub: 'Kontinuierliche Förderung.',
              punkte: [
                '2x 90 Min pro Woche in Kleingruppe (max. 4 Schüler)',
                'Individuelles Lerntempo',
                'Regelmäßige Feedback-Gespräche für Eltern',
              ],
            },
            {
              t: 'Lern² Premium',
              sub: 'Das Rundum-Sorglos-Paket.',
              punkte: [
                'Exklusive 1-zu-1 Betreuung',
                'Bevorzugter WhatsApp-Support (Mo-Sa)',
                'Proaktive Erfolgs-Reports für Eltern',
              ],
            },
          ].map((p) => (
            <div
              key={p.t}
              style={{
                flex: '1',
                minWidth: '220px',
                backgroundColor: '#FAFAF7',
                borderRadius: '12px',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#2F2B29',
                  marginBottom: '8px',
                }}
              >
                {p.t}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '16px',
                }}
              >
                {p.sub}
              </p>
              <ul style={{ paddingLeft: '16px', marginBottom: '24px' }}>
                {p.punkte.map((punkt) => (
                  <li
                    key={punkt}
                    style={{
                      fontSize: '14px',
                      color: '#444',
                      marginBottom: '8px',
                      lineHeight: '1.5',
                    }}
                  >
                    {punkt}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/4915679576256"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#FFD60A',
                  color: '#2F2B29',
                  padding: '12px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Paket anfragen
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BuT */}
      <section
        style={{
          backgroundColor: '#FFD60A',
          padding: '60px 32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '16px',
          }}
        >
          Nachhilfe 100% kostenlos durch BuT
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#2F2B29',
            maxWidth: '600px',
            margin: '0 auto 28px',
            lineHeight: '1.7',
          }}
        >
          Beziehen Sie Wohngeld, Bürgergeld oder Kinderzuschuss? Dann ist die
          Nachhilfe für Sie zu 100% kostenlos über das Bildungs- und
          Teilhabepaket (BuT).
        </p>
        <a
          href="https://forms.gle/1YJEYPZZNyvxG8os5"
          style={{
            backgroundColor: '#2F2B29',
            color: '#FFD60A',
            padding: '16px 28px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Jetzt Anspruch kostenlos prüfen
        </a>
      </section>

      {/* BEWERTUNGEN */}
      <section
        style={{ padding: '60px 32px', maxWidth: '900px', margin: '0 auto' }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '8px',
            textAlign: 'center',
          }}
        >
          Das sagen unsere Familien
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#888',
            marginBottom: '36px',
            fontSize: '14px',
          }}
        >
          ⭐⭐⭐⭐⭐ 5 von 5 Sternen · 10+ Bewertungen
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {[
            {
              name: 'عمرو ع',
              text: 'Sehr gute Nachhilfe! Mein Kind hat sich in kurzer Zeit deutlich verbessert. Der Unterricht ist verständlich und freundlich. Wir sind sehr zufrieden.',
            },
            {
              name: 'Abod A.',
              text: 'Die Nachhilfe ist sehr gut. Die Lehrer sind freundlich und erklären alles klar und verständlich. Mein Kind lernt dort viel und macht gute Fortschritte.',
            },
            {
              name: 'Samer A.',
              text: 'Ich habe bei Lern² Nachhilfe genommen und bin sehr zufrieden. Ich konnte meine Lücken schließen und fühle mich in der Schule deutlich sicherer.',
            },
          ].map((r) => (
            <div
              key={r.name}
              style={{
                flex: '1',
                minWidth: '220px',
                backgroundColor: '#fff',
                border: '1.5px solid #eee',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                }}
              >
                "{r.text}"
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#2F2B29',
                  fontSize: '14px',
                }}
              >
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '60px 32px',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2F2B29',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Häufig gestellte Fragen
        </h2>
        {[
          {
            f: 'Wie viele Nachhilfestunden pro Woche sind sinnvoll?',
            a: 'In der Regel empfehlen wir 1–2 Termine pro Woche. Bei wichtigen Prüfungen kann eine intensivere Betreuung kurzfristig sinnvoll sein.',
          },
          {
            f: 'Welche Fächer und Jahrgangsstufen deckt ihr ab?',
            a: 'Wir bieten Nachhilfe für alle gängigen Fächer von der Grundschule bis zum Abitur an.',
          },
          {
            f: 'Kann ich monatlich kündigen?',
            a: 'Ja — keine langfristige Bindung. Stundenweise oder regelmäßig, ganz wie es passt.',
          },
          {
            f: 'Wer unterrichtet bei Lern²?',
            a: 'Unser Team besteht aus engagierten Lehrkräften und Studierenden, die mit Geduld und Motivation arbeiten.',
          },
        ].map((q) => (
          <div
            key={q.f}
            style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#2F2B29',
                marginBottom: '8px',
              }}
            >
              {q.f}
            </h3>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
              {q.a}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#2F2B29',
          color: '#FAFAF7',
          padding: '40px 32px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#FFD60A',
            marginBottom: '12px',
          }}
        >
          Lern²
        </p>
        <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '16px' }}>
          Kassel · info@lern2.de · +49 15679 576256
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <a
            href="https://wa.me/4915679576256"
            style={{ color: '#FFD60A', fontSize: '14px' }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/lern_hoch_2"
            style={{ color: '#FFD60A', fontSize: '14px' }}
          >
            Instagram
          </a>
          <a
            href="https://lern2.com/impressum"
            style={{ color: '#aaa', fontSize: '14px' }}
          >
            Impressum
          </a>
          <a
            href="https://lern2.com/datenschutz"
            style={{ color: '#aaa', fontSize: '14px' }}
          >
            Datenschutz
          </a>
        </div>
        <p style={{ fontSize: '13px', color: '#666' }}>
          © 2026 Lern² · Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
