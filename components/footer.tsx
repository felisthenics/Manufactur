import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Manufactur Taunus</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Handgerösteter Specialty Coffee aus
              Taunusstein-Wehen im Taunus. Mit Leidenschaft für
              Qualität und Geschmack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 uppercase tracking-widest text-sm">
              Schnellzugriff
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="#start" className="text-background/70 hover:text-background text-sm transition-colors">
                Start
              </Link>
              <Link href="#ueber-uns" className="text-background/70 hover:text-background text-sm transition-colors">
                Über Uns
              </Link>
              <Link href="#kaffee" className="text-background/70 hover:text-background text-sm transition-colors">
                Unsere Kaffees
              </Link>
              <Link href="#cafe" className="text-background/70 hover:text-background text-sm transition-colors">
                Das Café
              </Link>
              <Link href="#speisekarte" className="text-background/70 hover:text-background text-sm transition-colors">
                Speisekarte
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4 uppercase tracking-widest text-sm">
              Rechtliches
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/impressum" className="text-background/70 hover:text-background text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-background/70 hover:text-background text-sm transition-colors">
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Manufactur Café Rösterei am Taunus. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
