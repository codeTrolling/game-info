import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game info',
  description: 'Information about games you would not want to miss out on playing.',
  keywords: 'Gaming, competitive, pvp, multiplayer, coop, casual, rogue-like, souls-like, anime, single player, story rich, rankings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navigation/>
          {children}
      </body>
    </html>
  )
}
