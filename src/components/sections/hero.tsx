import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-max text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Wir schaffen Werte aus Daten.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          RAUM5 ist Ihr Partner für Data Science, Softwareentwicklung und
          KI-Consulting – von der Idee bis zur skalierbaren Lösung.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#contact">Projekt anfragen</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Intro-Call buchen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
