import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impressum – Manufactur Café Rösterei am Taunus",
  description: "Impressum der Manufactur Café Rösterei am Taunus in Taunusstein-Wehen.",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
            Impressum
          </h1>

          <div className="space-y-10 text-foreground/80 leading-relaxed">

            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Lazaros Chatzigeorgiou<br />
                Manufactur Café Rösterei am Taunus<br />
                Aarstraße 243-245<br />
                65232 Taunusstein-Wehen
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Kontakt
              </h2>
              <p>
                Telefon: +49 (0) 6128 9716446<br />
                E-Mail:{" "}
                <a
                  href="mailto:info@manufactur-taunus.de"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  info@manufactur-taunus.de
                </a>
              </p>
            </section>

            {/* Steuer */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Steuerliche Angaben
              </h2>
              <p>
                Steuernummer: [PLATZHALTER – bitte ergänzen]<br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                [PLATZHALTER – bitte ergänzen]
              </p>
            </section>

            {/* Aufsichtsbehörde */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Zuständige Aufsichtsbehörde
              </h2>
              <p>Ordnungsamt Taunusstein</p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
