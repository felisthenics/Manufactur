import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoffeeSection } from "@/components/coffee-section"
import { CafeSection } from "@/components/cafe-section"
import { MenuSection } from "@/components/menu-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CoffeeSection />
      <CafeSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
