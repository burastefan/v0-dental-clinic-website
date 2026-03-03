'use client'

import { Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { LanguageSwitcher } from './language-switcher'

export function Navbar() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: t.nav.about, href: '/despre' },
    { label: t.nav.services, href: '/servicii' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/despre" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">IB</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">
                Dr. Irina Bosinceanu
              </p>
              <p className="text-xs text-muted-foreground leading-tight">{t.hero.greeting}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+40XXXXXXXXX"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>{t.contact.info.phone}</span>
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-80 border-b border-border' : 'max-h-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-4 pb-4 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="tel:+40XXXXXXXXX"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              <span>{t.contact.info.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
