"use client"

import { useState } from "react"

type MenuCategory = "kaffee" | "kalt" | "speisen"

const menuItems: Record<MenuCategory, { name: string; description: string; price: string }[]> = {
  kaffee: [
    { name: "Espresso", description: "", price: "2,50 €" },
    { name: "Doppio", description: "", price: "3,20 €" },
    { name: "Americano", description: "", price: "3,00 €" },
    { name: "Cappuccino", description: "", price: "3,80 €" },
    { name: "Latte Macchiato", description: "", price: "4,20 €" },
    { name: "Flat White", description: "", price: "4,00 €" },
    { name: "Griechischer Mokka", description: "", price: "3,50 €" },
  ],
  kalt: [
    { name: "Stilles Wasser", description: "", price: "2,00 €" },
    { name: "Mineralwasser", description: "", price: "2,20 €" },
    { name: "Fruchtsaft", description: "", price: "3,00 €" },
    { name: "Cold Brew", description: "saisonal", price: "4,50 €" },
  ],
  speisen: [
    { name: "Hausgemachter Kuchen", description: "täglich wechselnd", price: "3,80 €" },
    { name: "Brownie", description: "", price: "3,50 €" },
    { name: "Tiramisu", description: "", price: "4,50 €" },
    { name: "Börekschnecke", description: "mit Spinat & Feta", price: "4,00 €" },
  ],
}

const categoryLabels: Record<MenuCategory, string> = {
  kaffee: "Kaffeespezialitäten",
  kalt: "Kaltgetränke",
  speisen: "Speisen & Gebäck",
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("kaffee")

  return (
    <section id="speisekarte" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Speisekarte
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-balance">
            Was wir
            <br />
            <span className="italic font-medium">anbieten</span>
          </h2>
        </div>

        {/* Category Tabs – Pyramide */}
        <div className="mb-12 flex flex-col items-center gap-2">
          {/* Reihe 1: Kaffeespezialitäten */}
          <button
            onClick={() => setActiveCategory("kaffee")}
            className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
              activeCategory === "kaffee"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {categoryLabels.kaffee}
          </button>
          {/* Reihe 2: Kaltgetränke + Speisen & Gebäck */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveCategory("kalt")}
              className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
                activeCategory === "kalt"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabels.kalt}
            </button>
            <button
              onClick={() => setActiveCategory("speisen")}
              className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
                activeCategory === "speisen"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabels.speisen}
            </button>
          </div>
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
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
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
