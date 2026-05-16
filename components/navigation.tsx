"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { anchor: "start", label: "Start" },
  { anchor: "philosophie", label: "Philosophie" },
  { anchor: "kaffee", label: "Kaffee" },
  { anchor: "cafe", label: "Café" },
  { anchor: "speisekarte", label: "Speisekarte" },
  { anchor: "ueber-uns", label: "Über Uns" },
  { anchor: "kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  function getHref(anchor: string) {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={getHref("start")}
            className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Manufactur Taunus
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.anchor}
                href={getHref(link.anchor)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.anchor}
                  href={getHref(link.anchor)}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
