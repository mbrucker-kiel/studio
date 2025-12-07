
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <div className="prose prose-invert">
        <p>
          Martin Brucker & Frederik Brinkmann
          <br />
          Feldstraße 38
          <br />
          24105 Kiel
        </p>
        <p>
          <strong>Kontakt:</strong>
          <br />
          Telefon: +4943167937060
          <br />
          E-Mail:{" "}
          <a href="mailto:martinmartin@raum5.tech">martinmartin@raum5.tech</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:fredfred@raum5.tech">fredfred@raum5.tech</a>
        </p>
        <div className="mt-8">
          <iframe
            width="600"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.130593,54.330115,10.150593,54.340115&amp;layer=mapnik&amp;marker=54.335115,10.140593"
            style={{ border: "1px solid black" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
