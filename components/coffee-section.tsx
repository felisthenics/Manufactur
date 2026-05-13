import Image from "next/image"

const coffeeProducts = [
  {
    name: "Espresso Blend",
    origin: "Blend / Hausröstung",
    description: "Unser kräftiger Hausbeschreibung – vollmundig, mit feiner Säure und stabiler Crema. Der perfekte Espresso für jeden Tag.",
  },
  {
    name: "Colombia",
    origin: "Kolumbien",
    description: "Fruchtig und ausgewogen – dieser Kolumbianer überzeugt mit sanfter Süße und einem angenehm langen Abgang.",
  },
  {
    name: "Ecuador",
    origin: "Ecuador",
    description: "Komplex und vielschichtig – mit floralen Noten und einer feinen Kakaonuance. Ein echter Geheimtipp für Kaffeeliebhaber.",
  },
  {
    name: "Chile",
    origin: "Chile",
    description: "Sanft und nuanciert – mit leichter Würze und einem milden, runden Körper. Ideal für alle, die es etwas gefälliger mögen.",
  },
]

export function CoffeeSection() {
  return (
    <section id="kaffee" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Unsere Kaffees
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-balance">
            Ausgewählte Bohnen,
            <br />
            <span className="italic font-medium">meisterhaft geröstet</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Wir beziehen unsere Bohnen ausschließlich aus
            Top-Anbaugebieten weltweit. Jede Sorte wird bei uns in
            Taunusstein schonend und mit viel Erfahrung geröstet.
          </p>
        </div>

        {/* Coffee Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffeeProducts.map((coffee) => (
            <div
              key={coffee.name}
              className="bg-card p-6 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square mb-6 bg-muted overflow-hidden">
                <Image
                  src="/images/coffee-beans.jpg"
                  alt={coffee.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">{coffee.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coffee.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-muted text-muted-foreground">
                    {coffee.origin}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Besuchen Sie uns und probieren Sie unsere Kaffees vor dem Kauf.
          </p>
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Jetzt besuchen
          </a>
        </div>
      </div>
    </section>
  )
}
