'use client'

import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { LanguageSwitcher } from './language-switcher'

export function PrivacyContent() {
  const { t, lang } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Dr. Irina Bosinceanu</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            GDPR
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-2">{t.privacy.title}</h1>
        <p className="text-sm text-muted-foreground mb-12">{t.privacy.lastUpdated}</p>

        <div className="flex flex-col gap-10">
          {t.privacy.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-foreground mb-3">{section.title}</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'ro' ? 'Inapoi la pagina principala' : 'Back to homepage'}
          </Link>
        </div>
      </main>
    </div>
  )
}
