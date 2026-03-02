import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const _plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Dr. Irina Bosinceanu | Cabinet Stomatologic',
  description: 'Cabinet stomatologic modern cu servicii personalizate. Modern dental clinic with personalized care.',
  generator: 'v0.app',
  alternates: {
    languages: {
      'ro': '/',
      'en': '/en',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#4A90E2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="ro" href="https://dririnabosinceanu.ro/" />
        <link rel="alternate" hrefLang="en" href="https://dririnabosinceanu.ro/en" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
