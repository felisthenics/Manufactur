import Image from "next/image"
import { Coffee, Cake, Clock, MapPin } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Kaffeespezialitäten",
    description: "Espresso, Cappuccino, Latte Macchiato und mehr – alles frisch zubereitet.",
  },
  {
    icon: Cake,
    title: "Hausgemachte Kuchen",
    description: "Täglich frisch gebackene Kuchen und Torten nach Familienrezepten.",
  },
  {
    icon: Clock,
    title: "Gemütliche Atmosphäre",
    description: "Nehmen Sie sich Zeit und genießen Sie in unserem einladenden Ambiente.",
  },
  {
    icon: MapPin,
    title: "Im Herzen von Wehen",
    description: "Zentral gelegen und gut erreichbar – mit Parkplätzen direkt vor der Tür.",
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
              Unser Café
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Mehr als nur
              <br />
              <span className="italic font-medium">Kaffee</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Unser Café ist ein Ort zum Verweilen, Genießen und Entspannen. 
              Ob Sie alleine kommen, mit Freunden oder der Familie – bei uns finden 
              Sie immer einen gemütlichen Platz. Genießen Sie unsere frisch gerösteten 
              Kaffeespezialitäten zusammen mit hausgemachten Köstlichkeiten.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
