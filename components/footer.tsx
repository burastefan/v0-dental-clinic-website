"use client"

import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, lang } = useLanguage()

  const scrollToSection = (id: string) => {
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
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">IB</span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Dr. Irina Bosinceanu</p>
                <p className="text-xs opacity-60 leading-tight">{t.hero.greeting}</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <a
                  href={lang === "ro" ? "/politica-confidentialitate" : "/privacy-policy"}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
              {t.footer.contactInfo}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+40 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>contact@dririnabosinceanu.ro</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{t.contact.info.addressValue}</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Clock className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <p>{t.contact.info.weekdays}</p>
                  <p>{t.contact.info.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-xs opacity-50">
            &copy; 2026 Dr. Irina Bosinceanu. {t.footer.rights}
          </p>
          <a
            href={lang === "ro" ? "/politica-confidentialitate" : "/privacy-policy"}
            className="text-xs opacity-50 transition-opacity hover:opacity-80"
          >
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  )
}
