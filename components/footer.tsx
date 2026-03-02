"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, lang } = useLanguage()

  const navLinks = [
    { label: t.nav.about, href: "/despre" },
    { label: t.nav.services, href: "/servicii" },
    { label: t.nav.contact, href: "/contact" },
    {
      label: t.footer.privacy,
      href: lang === "ro" ? "/politica-confidentialitate" : "/privacy-policy",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/despre" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">IB</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">Dr. Irina Bosinceanu</p>
                <p className="text-xs text-muted-foreground leading-tight">{t.hero.greeting}</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Quick Links / Pages */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              {t.footer.contactInfo}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+40 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>contact@dririnabosinceanu.ro</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{t.contact.info.addressValue}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
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
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Dr. Irina Bosinceanu. {t.footer.rights}
          </p>
          <Link
            href={lang === "ro" ? "/politica-confidentialitate" : "/privacy-policy"}
            className="text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
