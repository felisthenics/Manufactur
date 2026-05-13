import Image from "next/image"

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/coffee-beans.jpg"
              alt="Frisch geröstete Kaffeebohnen"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Über Uns
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Tradition trifft
              <br />
              <span className="italic font-medium">Handwerkskunst</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Im Herzen von Wehen, umgeben von der malerischen Landschaft des Taunus, 
                liegt unsere kleine Kaffeerösterei. Hier rösten wir mit Leidenschaft und 
                Hingabe erstklassige Kaffeebohnen aus den besten Anbaugebieten der Welt.
              </p>
              <p>
                Jede Röstung ist bei uns ein handwerklicher Prozess. Wir nehmen uns die Zeit, 
                die jede Bohne verdient – denn nur so entfaltet sich das volle Aroma. 
                Keine Massenproduktion, sondern echte Manufakturqualität.
              </p>
              <p>
                Besuchen Sie uns in unserem gemütlichen Café und erleben Sie den Unterschied, 
                den frisch gerösteter Kaffee macht. Bei uns ist jede Tasse ein Genussmoment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-light text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Arabica Bohnen</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-primary">Täglich</p>
                <p className="text-sm text-muted-foreground mt-1">Frisch geröstet</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-primary">Vor Ort</p>
                <p className="text-sm text-muted-foreground mt-1">Handverlesen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
