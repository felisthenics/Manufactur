import Image from "next/image"
import { Coffee, Cake, UtensilsCrossed, Armchair } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Espresso & Kaffeespezialitäten",
  },
  {
    icon: Cake,
    title: "Hausgemachtes Gebäck & Kuchen",
  },
  {
    icon: UtensilsCrossed,
    title: "Tiramisu & Börekschnecke",
  },
  {
    icon: Armchair,
    title: "Innen- und Außensitzplätze",
  },
]

export function CafeSection() {
  return (
    <section id="cafe" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Das Café
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Gemütlich.
              <br />
              <span className="italic font-medium">Authentisch.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Unser kleines Café in Taunusstein-Wehen lädt
              zum Verweilen ein. Genießen Sie frisch gerösteten Kaffee
              direkt am Entstehungsort – mit Blick auf unsere Röstmaschine.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-medium">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="Café Interieur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/latte-art.jpg"
                  alt="Latte Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/cake.jpg"
                  alt="Hausgemachter Kuchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
