export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F9FC', minHeight: '100vh', padding: '0 0 80px' }}>

      <nav style={{ padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Lern²" style={{ height: '44px', width: '44px', borderRadius: '8px', objectFit: 'cover' }} />
        </a>
        <a href="/" style={{ color: '#0F2A45', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>← Zurück zur Startseite</a>
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#EEF4FF', color: '#3A86FF', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '20px', border: '1px solid #D6E4FF' }}>Rechtliches</div>
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0F2A45', marginBottom: '48px', letterSpacing: '-1px' }}>Datenschutzerklärung</h1>

        {[
          {
            title: '1. Datenschutz auf einen Blick',
            content: (
              <>
                <p><strong>Wer ist verantwortlich?</strong><br />Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (Kontaktdaten siehe Abschnitt „Hinweis zur verantwortlichen Stelle").</p>
                <p><strong>Wie erfassen wir Ihre Daten?</strong><br />Zum einen, indem Sie sie uns mitteilen – über das Kontaktformular oder unser Anmeldeformular (Google Forms). Zum anderen automatisch beim Besuch der Website (technische Daten wie Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).</p>
                <p><strong>Wofür nutzen wir Ihre Daten?</strong><br />Zur fehlerfreien Bereitstellung der Website, zur Bearbeitung Ihrer Anfragen sowie zur Anbahnung, Durchführung und Abrechnung unserer Nachhilfeleistungen (einschließlich der Förderung über Bildung und Teilhabe).</p>
                <p><strong>Welche Rechte haben Sie?</strong><br />Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf erteilter Einwilligungen und Widerspruch sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>
              </>
            )
          },
          {
            title: '2. Hosting',
            content: (
              <>
                <p>Wir hosten die Inhalte unserer Website beim folgenden Anbieter:</p>
                <p><strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
                <p>Vercel ermöglicht es uns, unsere Next.js-Website zu hosten und bereitzustellen. Alle personenbezogenen Daten, die Sie auf dieser Seite eingeben oder die automatisch erfasst werden, werden auf Servern von Vercel verarbeitet und gespeichert.</p>
                <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen Bereitstellung der Website). Wir haben mit Vercel einen Vertrag über Auftragsverarbeitung (AVV) geschlossen. Details: <a href="https://vercel.com/legal/privacy-policy" style={{ color: '#3A86FF' }} target="_blank">vercel.com/legal/privacy-policy</a></p>
              </>
            )
          },
          {
            title: '3. Allgemeine Hinweise und Pflichtinformationen',
            content: (
              <>
                <p><strong>Hinweis zur verantwortlichen Stelle:</strong></p>
                <p>Omar Matouk – Lern²<br />Grenzweg 15<br />34125 Kassel<br />Telefon: +49 15679 576256<br />E-Mail: info@lern2.com</p>
                <p><strong>Speicherdauer:</strong><br />Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>
                <p><strong>SSL-/TLS-Verschlüsselung:</strong><br />Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile und am Schloss-Symbol Ihres Browsers.</p>
              </>
            )
          },
          {
            title: '4. Ihre Rechte',
            content: (
              <>
                <p><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong><br />Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, Widerspruch einzulegen.</p>
                <p><strong>Beschwerderecht:</strong><br />Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständig ist insbesondere: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI), Wiesbaden.</p>
                <p><strong>Recht auf Auskunft, Berichtigung und Löschung:</strong><br />Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten.</p>
              </>
            )
          },
          {
            title: '5. Datenerfassung auf dieser Website',
            content: (
              <>
                <p><strong>Anmeldung über Google Forms:</strong><br />Für die Anmeldung nutzen wir Google Forms (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Die eingegebenen Daten werden in unserem Google-Workspace-Konto (Google Sheets) gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
                <p><strong>Verarbeitung von Daten Minderjähriger:</strong><br />Daten von Schüler:innen verarbeiten wir ausschließlich mit Einwilligung der Erziehungsberechtigten (Art. 8 DSGVO).</p>
              </>
            )
          },
          {
            title: '6. Speicherung in Google Workspace',
            content: (
              <p>Wir speichern Anmelde-, Schüler-, Termin- und Abrechnungsdaten in Google Workspace (Google Drive, Google Sheets; Google Ireland Limited). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. c DSGVO. Mit Google ist ein AVV (Google Workspace Data Processing Amendment) geschlossen.</p>
            )
          },
          {
            title: '7. Datenübermittlung an die Stadt Kassel (BuT)',
            content: (
              <p>Zur Abrechnung der Nachhilfeleistungen über das Bildungs- und Teilhabepaket übermitteln wir die erforderlichen Daten an die zuständige Stelle der Stadt Kassel. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. c DSGVO.</p>
            )
          },
          {
            title: '8. Kommunikation über WhatsApp Business',
            content: (
              <p>Für die Kommunikation nutzen wir WhatsApp Business (WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland). Wir nutzen WhatsApp ausschließlich für organisatorische Kommunikation. Sensible Unterlagen übermitteln wir per E-Mail. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            )
          },
          {
            title: '9. Soziale Medien (Facebook, Instagram)',
            content: (
              <p>Auf dieser Website sind Elemente von Facebook und Instagram eingebunden (Meta Platforms Ireland Limited). Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Eine Datenübermittlung in die USA erfolgt (DPF).</p>
            )
          },
          {
            title: '10. Google Fonts',
            content: (
              <p>Diese Seite nutzt Google Fonts zur einheitlichen Darstellung von Schriftarten. Die Schriftarten werden über Google-Server geladen. Weitere Informationen: <a href="https://developers.google.com/fonts/faq" style={{ color: '#3A86FF' }} target="_blank">developers.google.com/fonts/faq</a></p>
            )
          },
        ].map((s, i) => (
          <div key={i} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #E8EDF2', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F2A45', marginBottom: '16px' }}>{s.title}</h2>
            <div style={{ fontSize: '15px', color: '#556678', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>{s.content}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
