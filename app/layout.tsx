import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Manufactur Café Rösterei am Taunus | Kaffeerösterei in Taunusstein-Wehen',
  description: 'Handgerösteter Kaffee aus Taunusstein-Wehen im Taunus. Besuchen Sie unsere Rösterei und genießen Sie feinste Kaffeespezialitäten und hausgemachtes Gebäck in unserem gemütlichen Café.',
  keywords: ['Kaffeerösterei Taunus', 'Café Taunusstein', 'eigene Röstung', 'bester Espresso Taunus', 'Kaffee Wehen', 'Specialty Coffee Taunus', 'Rösterei Wehen', 'Kaffee kaufen Taunus'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className={`${cormorant.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
