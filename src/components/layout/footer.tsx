import Link from 'next/link';
import { Raum5Logo } from '../icons';

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container-max section-padding !py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link href="#home" aria-label="Zurück zum Anfang">
            <Raum5Logo className="h-7 w-auto text-muted-foreground" />
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/impressum" className="transition-colors hover:text-foreground">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-foreground">
              Datenschutz
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RAUM5. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
