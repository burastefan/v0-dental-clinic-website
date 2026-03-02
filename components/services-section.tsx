"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Stethoscope,
  Sparkles,
  Shield,
  Gem,
  CircleDot,
  Crown,
  Scissors,
  AlertTriangle,
  AlignLeft,
  Puzzle,
  X,
  Clock,
  CheckCircle2,
  Heart,
  Phone,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceIcons = [
  Stethoscope,
  Sparkles,
  Shield,
  Gem,
  CircleDot,
  Crown,
  Scissors,
  AlertTriangle,
  AlignLeft,
  Puzzle,
]

type ServiceItem = {
  name: string
  price: string
  description: string
  detailed: string
  includes: string
  duration: string
  aftercare: string
}

export function ServicesSection() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = t.services.list as unknown as ServiceItem[]

  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            {t.services.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Stethoscope
            const isEmergency = index === 7

            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`group relative rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer text-left ${
                  isEmergency
                    ? "border-destructive/30 bg-destructive/5 hover:border-destructive/50"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Icon & Emergency badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isEmergency
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  {isEmergency && (
                    <span className="rounded-full bg-destructive px-2.5 py-1 text-xs font-semibold text-destructive-foreground">
                      {"!"}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className={`text-sm font-bold ${isEmergency ? "text-destructive" : "text-primary"}`}>
                    {service.price}
                  </span>
                  <span
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      isEmergency
                        ? "bg-destructive/10 text-destructive group-hover:bg-destructive/20"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    }`}
                  >
                    {t.services.details}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Emergency banner */}
        <div className="mt-12 rounded-2xl bg-foreground p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/20 shrink-0">
              <AlertTriangle className="h-7 w-7 text-destructive" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-background">{t.services.emergencyTitle}</h3>
              <p className="text-sm text-background/70">{t.services.emergencyDesc}</p>
            </div>
          </div>
          <a
            href="tel:+40XXXXXXXXX"
            className="inline-flex items-center gap-2 rounded-lg bg-destructive px-6 py-3 text-sm font-semibold text-destructive-foreground transition-colors hover:bg-destructive/90 shrink-0"
          >
            <Phone className="h-4 w-4" />
            {t.services.emergencyCta}
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-card shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-card rounded-t-2xl border-b border-border p-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  {(() => {
                    const Icon = serviceIcons[selectedService] || Stethoscope
                    return <Icon className="h-5 w-5 text-primary" />
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {services[selectedService].name}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {services[selectedService].price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 flex flex-col gap-6">
              <p className="text-sm leading-relaxed text-foreground/80">
                {services[selectedService].detailed}
              </p>

              {/* Duration */}
              <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.services.duration}</p>
                  <p className="text-sm text-foreground">{services[selectedService].duration}</p>
                </div>
              </div>

              {/* Includes */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{t.services.includes}</p>
                <div className="flex flex-col gap-2">
                  {services[selectedService].includes.split(", ").map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div className="flex items-start gap-3 rounded-xl bg-accent/10 border border-accent/20 p-4">
                <Heart className="h-5 w-5 text-accent-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.services.aftercare}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{services[selectedService].aftercare}</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.services.bookNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
