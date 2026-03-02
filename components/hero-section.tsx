"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/dental-hero.jpg"
          alt="Modern dental clinic interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-background/90 tracking-wide uppercase">
              {t.hero.greeting}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-background/80 leading-relaxed sm:text-xl max-w-lg text-pretty">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/servicii"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-background/30 bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/20"
            >
              {t.hero.cta2}
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "5+", label: t.stats.experience },
              { value: "500+", label: t.stats.patients },
              { value: "10+", label: t.stats.services },
              { value: "98%", label: t.stats.satisfaction },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-background sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-background/60 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/despre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/60 transition-colors hover:text-background animate-bounce"
        aria-label="Learn more"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  )
}
