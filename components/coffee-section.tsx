import Image from "next/image"

const coffeeProducts = [
  {
    name: "Taunus Espresso",
    description: "Kräftig, vollmundig mit feinen Schokoladennoten. Perfekt für alle Espresso-Liebhaber.",
    origin: "Brasilien & Äthiopien",
    roast: "Dunkel",
    price: "12,90 €",
    weight: "250g",
  },
  {
    name: "Wehen Blend",
    description: "Ausgewogen und aromatisch. Unser Allrounder für Filterkaffee und French Press.",
    origin: "Kolumbien & Guatemala",
    roast: "Mittel",
    price: "11,90 €",
    weight: "250g",
  },
  {
    name: "Röstmeister Reserve",
    description: "Unser Premium-Kaffee mit komplexen Frucht- und Nussaromen. Limitierte Edition.",
    origin: "Äthiopien Yirgacheffe",
    roast: "Hell",
    price: "16,90 €",
    weight: "250g",
  },
  {
    name: "Café Crema",
    description: "Mild und bekömmlich mit samtiger Crema. Ideal für Vollautomaten.",
    origin: "Brasilien",
    roast: "Mittel-Dunkel",
    price: "10,90 €",
    weight: "250g",
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
            Frisch geröstet,
            <br />
            <span className="italic font-medium">direkt aus der Manufaktur</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Alle unsere Kaffees werden vor Ort in kleinen Chargen geröstet. 
            Kaufen Sie direkt bei uns oder nehmen Sie Ihren Lieblingskaffee mit nach Hause.
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
                  <span className="px-2 py-1 bg-muted text-muted-foreground">
                    {coffee.roast}
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-3 border-t border-border">
                  <span className="text-2xl font-light text-primary">{coffee.price}</span>
                  <span className="text-sm text-muted-foreground">{coffee.weight}</span>
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
