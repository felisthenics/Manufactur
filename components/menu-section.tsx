"use client"

import { useState } from "react"

type MenuCategory = "heiss" | "kalt" | "speisen"

const menuItems = {
  heiss: [
    { name: "Espresso", description: "Kräftiger, aromatischer Shot", price: "2,50 €" },
    { name: "Doppio", description: "Doppelter Espresso", price: "3,50 €" },
    { name: "Cappuccino", description: "Espresso mit Milchschaum", price: "3,90 €" },
    { name: "Latte Macchiato", description: "Geschichteter Milchkaffee", price: "4,20 €" },
    { name: "Flat White", description: "Espresso mit samtiger Milch", price: "4,00 €" },
    { name: "Americano", description: "Espresso verlängert mit Wasser", price: "3,20 €" },
    { name: "Filterkaffee", description: "Handgebrüht, täglich wechselnd", price: "3,00 €" },
    { name: "Café au Lait", description: "Filterkaffee mit heißer Milch", price: "3,80 €" },
    { name: "Heiße Schokolade", description: "Cremig und vollmundig", price: "3,90 €" },
    { name: "Tee", description: "Verschiedene Sorten", price: "3,20 €" },
  ],
  kalt: [
    { name: "Iced Latte", description: "Espresso mit kalter Milch über Eis", price: "4,50 €" },
    { name: "Iced Americano", description: "Espresso mit Eiswasser", price: "3,80 €" },
    { name: "Cold Brew", description: "24h kalt extrahiert, mild und süß", price: "4,20 €" },
    { name: "Affogato", description: "Vanilleeis mit Espresso", price: "5,50 €" },
    { name: "Eiskaffee", description: "Mit Vanilleeis und Sahne", price: "5,90 €" },
    { name: "Limonade", description: "Hausgemacht, verschiedene Sorten", price: "3,50 €" },
    { name: "Mineralwasser", description: "Still oder mit Kohlensäure", price: "2,50 €" },
    { name: "Apfelschorle", description: "Direktsaft aus der Region", price: "3,00 €" },
  ],
  speisen: [
    { name: "Käsekuchen", description: "Cremig nach Hausrezept", price: "4,50 €" },
    { name: "Apfelkuchen", description: "Mit Streuseln, lauwarm serviert", price: "4,50 €" },
    { name: "Schokoladentorte", description: "Intensiv schokoladig", price: "5,20 €" },
    { name: "Karottenkuchen", description: "Saftig mit Frischkäse-Topping", price: "4,80 €" },
    { name: "Croissant", description: "Frisch vom Bäcker, buttrig", price: "2,80 €" },
    { name: "Zimtschnecke", description: "Fluffig und aromatisch", price: "3,50 €" },
    { name: "Belegte Stulle", description: "Wechselnde Beläge", price: "5,90 €" },
    { name: "Quiche", description: "Tagesaktuell, warm serviert", price: "6,50 €" },
    { name: "Granola Bowl", description: "Mit Joghurt und frischem Obst", price: "7,50 €" },
  ],
}

const categoryLabels = {
  heiss: "Heiße Getränke",
  kalt: "Kalte Getränke",
  speisen: "Speisen & Kuchen",
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("heiss")

  return (
    <section id="speisekarte" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Speisekarte
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-balance">
            Unsere
            <br />
            <span className="italic font-medium">Köstlichkeiten</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(Object.keys(menuItems) as MenuCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-card p-8 md:p-12">
          <h3 className="text-2xl font-medium mb-8 text-center">
            {categoryLabels[activeCategory]}
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {menuItems[activeCategory].map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-baseline pb-3 border-b border-border"
              >
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className="text-lg font-light text-primary ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Alle Preise inkl. MwSt. · Allergene und Zusatzstoffe auf Anfrage
        </p>
      </div>
    </section>
  )
}
