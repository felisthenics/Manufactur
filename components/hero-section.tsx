import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Kaffeeröstung bei Manufactur Taunus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-white/80">
          Kaffeerösterei & Café in Taunusstein-Wehen
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-balance">
          Manufactur
          <br />
          <span className="font-semibold italic">Taunus</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Frisch gerösteter Specialty Coffee aus Taunusstein.
          Jede Tasse ein Handwerk – mit Leidenschaft und Sorgfalt
          für Sie zubereitet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#kaffee"
            className="px-8 py-3 bg-white text-foreground text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Unsere Kaffees
          </Link>
          <Link
            href="#cafe"
            className="px-8 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Das Café
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="#ueber-uns" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Entdecken</span>
          <ChevronDown className="animate-bounce" size={24} />
        </Link>
      </div>
    </section>
  )
}
