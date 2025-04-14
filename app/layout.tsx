import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benjamin GOTTRANT',
  description: 'Portfolio benjamin gottrant',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
