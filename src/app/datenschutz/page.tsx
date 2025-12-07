
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function Datenschutz() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
      <div className="prose prose-invert">
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend
          möchten wir Sie über den Umgang mit Ihren Daten aufklären.
        </p>

        <h2>Verantwortliche Stelle</h2>
        <p>
          Martin Brucker & Frederik Brinkmann
          <br />
          Feldstraße 38
          <br />
          24105 Kiel
          <br />
          E-Mail:{" "}
          <a href="mailto:martinmartin@raum5.tech">martinmartin@raum5.tech</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:fredfred@raum5.tech">fredfred@raum5.tech</a>
        </p>

        <h2>Server-Logfiles</h2>
        <p>
          Unser Webserver (nginx) speichert bei jedem Zugriff auf unsere Website
          automatisch Informationen in sogenannten Server-Logfiles. Dies sind:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
        </ul>
        <p>
          Die Speicherung dieser Daten erfolgt aus Gründen der technischen
          Sicherheit, insbesondere zur Abwehr von Angriffsversuchen auf unseren
          Webserver. Ein Rückschluss auf einzelne Personen ist uns anhand dieser
          Daten nicht möglich.
        </p>

        <h2>Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten (Name, E-Mail-Adresse, etc.) zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert. Diese Daten werden per E-Mail an uns weitergeleitet und
          nicht auf dem Webserver gespeichert. Eine Weitergabe dieser Daten an
          Dritte findet ohne Ihre Einwilligung nicht statt.
        </p>

        <h2>Cookies</h2>
        <p>
          Unsere Website verwendet keine Cookies.
        </p>

        <h2>Tracking und externe Dienste</h2>
        <p>
          Wir verwenden keine Tracking-Tools und keine externen Dienste, die
          personenbezogene Daten verarbeiten. Ihre Privatsphäre bleibt
          vollumfänglich geschützt.
        </p>

        <h2>Ihre Betroffenenrechte</h2>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (DSGVO)
          jederzeit das Recht auf unentgeltliche Auskunft über Ihre bei uns
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung und ggf. ein Recht auf
          Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>
      </div>
    </div>
  );
}
