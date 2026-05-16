import { User } from "lucide-react"

export function TeamSection() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Über Uns
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance">
            Das Gesicht hinter
            <br />
            <span className="italic font-medium">der Manufactur</span>
          </h2>
        </div>

        {/* Owner */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Foto-Platzhalter */}
          <div className="relative aspect-[3/4] bg-secondary overflow-hidden flex flex-col items-center justify-center gap-4 max-w-sm mx-auto w-full lg:max-w-none">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <User size={48} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground tracking-wider uppercase">
              Foto: Lazaros Chatzigeorgiou
            </p>
            {/* Platzhalter-Notiz – kann entfernt werden sobald echtes Bild vorhanden */}
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/60 px-4">
              Platzhalter – bitte durch echtes Foto ersetzen
            </p>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-2 leading-snug">
              Hallo, ich bin
              <br />
              <span className="italic font-medium">Lazaros</span>
            </h3>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Gründer & Röster
            </p>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Meine griechischen Wurzeln haben mir früh beigebracht, was es
                bedeutet, Menschen mit Herzlichkeit zu empfangen. Kaffee ist
                für mich kein Produkt – er ist ein Ritual, das Menschen
                zusammenbringt. Dieses Ritual möchte ich mit jedem Gast teilen.
              </p>
              <p>
                Was als Traum begann, ist heute die Manufactur in
                Taunusstein-Wehen: eine Rösterei, ein Café und ein Ort, an dem
                man sich wohlfühlen soll. Ich röste jeden Kaffee selbst –
                mit Zeit, Sorgfalt und dem Anspruch, dass jede Bohne ihr volles
                Potenzial entfaltet.
              </p>
              <p>
                Kommen Sie vorbei. Ich freue mich, Sie persönlich zu begrüßen,
                Ihnen unsere Röstmaschine zu zeigen und mit Ihnen gemeinsam den
                perfekten Kaffee zu entdecken.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-lg font-light italic text-primary">
                „Jede Tasse, die wir servieren, erzählt eine Geschichte –
                von der Bohne bis in Ihre Hand."
              </p>
              <p className="text-sm text-muted-foreground mt-2">– Lazaros Chatzigeorgiou</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-secondary p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light mb-6">
              Unser <span className="italic font-medium">Team</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hinter der Manufactur steckt ein kleines, eingespieltes Team, das
              dieselbe Überzeugung teilt: Gastfreundschaft ist keine
              Dienstleistung, sondern eine Haltung. Wir begrüßen jeden Gast so,
              als würde er bei uns zu Hause ankommen.
            </p>

            {/* Team-Foto-Platzhalter */}
            <div className="relative aspect-[16/6] bg-muted overflow-hidden flex flex-col items-center justify-center gap-3">
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <User size={28} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                Teamfoto – Platzhalter
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
