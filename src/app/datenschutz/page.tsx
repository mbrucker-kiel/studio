import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function Datenschutz() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <p className="text-muted-foreground mb-12">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.  Nachfolgend
        möchten wir Sie über den Umgang mit Ihren Daten aufklären.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Verantwortliche Stelle</h2>
        <p className="text-muted-foreground">
          Martin Brucker & Frederik Brinkmann
          <br />
          Feldstraße 38
          <br />
          24105 Kiel
          <br />
          E-Mail:{" "}
          <a href="mailto:martinmartin@raum5.tech" className="text-primary hover:underline">martinmartin@raum5.tech</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:fredfred@raum5. tech" className="text-primary hover:underline">fredfred@raum5.tech</a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Server-Logfiles</h2>
        <p className="text-muted-foreground mb-4">
          Unser Webserver (nginx) speichert bei jedem Zugriff auf unsere Website
          automatisch Informationen in sogenannten Server-Logfiles. Dies sind:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
        </ul>
        <p className="text-muted-foreground">
          Die Speicherung dieser Daten erfolgt aus Gründen der technischen
          Sicherheit, insbesondere zur Abwehr von Angriffsversuchen auf unseren
          Webserver. Ein Rückschluss auf einzelne Personen ist uns anhand dieser
          Daten nicht möglich.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
        <p className="text-muted-foreground">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten (Name, E-Mail-Adresse, etc.) zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert. Diese Daten werden per E-Mail an uns weitergeleitet und
          nicht auf dem Webserver gespeichert. Eine Weitergabe dieser Daten an
          Dritte findet ohne Ihre Einwilligung nicht statt.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="text-muted-foreground">
          Unsere Website verwendet keine Cookies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tracking und externe Dienste</h2>
        <p className="text-muted-foreground">
          Wir verwenden keine Tracking-Tools und keine externen Dienste, die
          personenbezogene Daten verarbeiten.  Ihre Privatsphäre bleibt
          vollumfänglich geschützt.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ihre Betroffenenrechte</h2>
        <p className="text-muted-foreground">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (DSGVO)
          jederzeit das Recht auf unentgeltliche Auskunft über Ihre bei uns
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung und ggf.  ein Recht auf
          Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>
      </section>
    </div>
  );
}
