import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutz – Manufactur Café Rösterei am Taunus",
  description: "Datenschutzerklärung der Manufactur Café Rösterei am Taunus gemäß DSGVO.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-foreground/80 leading-relaxed">

            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
                Website ist:
              </p>
              <p className="mt-3">
                Lazaros Chatzigeorgiou<br />
                Manufactur Café Rösterei am Taunus<br />
                Aarstraße 243-245<br />
                65232 Taunusstein-Wehen<br />
                E-Mail:{" "}
                <a
                  href="mailto:info@manufactur-taunus.de"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  info@manufactur-taunus.de
                </a>
              </p>
            </section>

            {/* 2. Erhobene Daten & Zweck */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                2. Erhobene Daten &amp; Zweck der Verarbeitung
              </h2>

              <h3 className="font-medium text-foreground mt-4 mb-2">
                Kontaktformular
              </h3>
              <p>
                Wenn Sie uns über das Kontaktformular auf dieser Website kontaktieren,
                erheben wir folgende Daten:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Nachrichteninhalt</li>
              </ul>
              <p className="mt-3">
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur
                Kontaktaufnahme mit Ihnen verwendet. Eine Weitergabe an Dritte findet
                nicht statt, sofern dies nicht zur Bearbeitung Ihrer Anfrage notwendig ist.
              </p>

              <h3 className="font-medium text-foreground mt-6 mb-2">
                Vercel Analytics
              </h3>
              <p>
                Diese Website verwendet Vercel Analytics zur anonymisierten Auswertung von
                Nutzungsdaten (z. B. Seitenaufrufe, Herkunftsland, Gerättyp). Vercel
                Analytics verwendet <strong className="font-medium text-foreground">keine Cookies</strong> und
                erhebt keine personenbezogenen Daten. Es werden keine IP-Adressen
                gespeichert. Die Daten dienen ausschließlich der technischen Optimierung
                dieser Website.
              </p>
            </section>

            {/* 3. Rechtsgrundlage */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                3. Rechtsgrundlage
              </h2>
              <p>
                Die Verarbeitung der über das Kontaktformular übermittelten Daten erfolgt
                auf Grundlage von{" "}
                <strong className="font-medium text-foreground">
                  Art. 6 Abs. 1 lit. b DSGVO
                </strong>{" "}
                (Vertragsanbahnung bzw. vorvertragliche Maßnahmen) sowie{" "}
                <strong className="font-medium text-foreground">
                  Art. 6 Abs. 1 lit. f DSGVO
                </strong>{" "}
                (berechtigtes Interesse an der Beantwortung von Kundenanfragen).
              </p>
              <p className="mt-3">
                Die Nutzung von Vercel Analytics erfolgt auf Grundlage von{" "}
                <strong className="font-medium text-foreground">
                  Art. 6 Abs. 1 lit. f DSGVO
                </strong>{" "}
                (berechtigtes Interesse an der Analyse und Verbesserung des
                Webangebots).
              </p>
            </section>

            {/* 4. Speicherdauer */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                4. Speicherdauer
              </h2>
              <p>
                Die über das Kontaktformular übermittelten Daten werden gelöscht, sobald
                die jeweilige Anfrage abschließend bearbeitet wurde und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen – in der Regel nach spätestens
                12 Monaten.
              </p>
              <p className="mt-3">
                Die durch Vercel Analytics erhobenen anonymisierten Nutzungsdaten werden
                gemäß den Datenschutzbestimmungen von Vercel Inc. gespeichert und
                verarbeitet.
              </p>
            </section>

            {/* 5. Weitergabe an Dritte */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                5. Weitergabe an Dritte
              </h2>
              <p>
                Diese Website wird über die Infrastruktur von{" "}
                <strong className="font-medium text-foreground">Vercel Inc.</strong>
                {" "}(440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Vercel
                verarbeitet dabei technisch notwendige Verbindungsdaten (z. B.
                Server-Logs) gemäß ihrer eigenen Datenschutzrichtlinie. Mit Vercel
                besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
              </p>
              <p className="mt-3">
                Eine darüberhinausgehende Weitergabe Ihrer personenbezogenen Daten an
                Dritte findet nicht statt.
              </p>
            </section>

            {/* 6. Betroffenenrechte */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                6. Ihre Rechte als betroffene Person
              </h2>
              <p>
                Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
                personenbezogenen Daten:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong className="font-medium text-foreground">Auskunft</strong> –
                  Sie können Auskunft über die von uns zu Ihrer Person gespeicherten
                  Daten verlangen (Art. 15 DSGVO).
                </li>
                <li>
                  <strong className="font-medium text-foreground">Berichtigung</strong> –
                  Sie haben das Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO).
                </li>
                <li>
                  <strong className="font-medium text-foreground">Löschung</strong> –
                  Sie können die Löschung Ihrer personenbezogenen Daten verlangen
                  (Art. 17 DSGVO).
                </li>
                <li>
                  <strong className="font-medium text-foreground">Einschränkung</strong> –
                  Sie haben das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).
                </li>
                <li>
                  <strong className="font-medium text-foreground">Widerspruch</strong> –
                  Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen
                  (Art. 21 DSGVO).
                </li>
                <li>
                  <strong className="font-medium text-foreground">Datenübertragbarkeit</strong> –
                  Sie haben das Recht, Ihre Daten in einem gängigen Format zu erhalten
                  (Art. 20 DSGVO).
                </li>
              </ul>
              <p className="mt-3">
                Darüber hinaus haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde
                zu beschweren. Die zuständige Behörde in Hessen ist der Hessische
                Beauftragte für Datenschutz und Informationsfreiheit (HBDI).
              </p>
            </section>

            {/* 7. Kontakt für Datenschutzanfragen */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                7. Kontakt für Datenschutzanfragen
              </h2>
              <p>
                Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich
                bitte direkt an uns:
              </p>
              <p className="mt-3">
                E-Mail:{" "}
                <a
                  href="mailto:info@manufactur-taunus.de"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  info@manufactur-taunus.de
                </a>
                <br />
                Telefon: +49 (0) 6128 9716446
              </p>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">
                8. Cookies
              </h2>
              <p>
                Diese Website verwendet <strong className="font-medium text-foreground">keine Cookies</strong>.
                Es werden weder technisch notwendige noch Marketing-Cookies oder
                Tracking-Cookies eingesetzt. Ein Cookie-Banner ist daher nicht
                erforderlich.
              </p>
            </section>

            {/* Stand */}
            <p className="text-sm text-muted-foreground pt-4 border-t border-border">
              Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
