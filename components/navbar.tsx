"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">IB</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">Dr. Irina Bosinceanu</p>
              <p className="text-xs text-muted-foreground leading-tight">
                {t.hero.greeting}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.contact}
            </button>
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
          isOpen ? "max-h-80 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-4 pb-4 pt-2">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav.contact}
            </button>
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
