"use client"

import Image from "next/image"
import { GraduationCap, Award, Heart, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            {t.about.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.about.title}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/doctor-portrait.jpg"
                alt="Dr. Irina Bosinceanu"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-primary/10 -z-10" />
          </div>

          {/* Bio text */}
          <div>
            <p className="text-base leading-relaxed text-foreground/80">
              {t.about.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {t.about.bio2}
            </p>

            {/* Philosophy */}
            <div className="mt-8 rounded-xl bg-primary/5 border border-primary/10 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.about.philosophy}</h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground/70 italic">
                {`"${t.about.philosophyText}"`}
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <GraduationCap className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{t.about.education}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[t.about.edu1, t.about.edu2, t.about.edu3, t.about.edu4].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
              >
                {i === 3 ? (
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                )}
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
