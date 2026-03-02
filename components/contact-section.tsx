"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t, lang } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const services = t.services.list as unknown as { name: string }[]

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = t.contact.validation.nameRequired
    if (!formState.email.trim()) newErrors.email = t.contact.validation.emailRequired
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = t.contact.validation.emailInvalid
    if (!formState.phone.trim()) newErrors.phone = t.contact.validation.phoneRequired
    if (!formState.service) newErrors.service = t.contact.validation.serviceRequired
    if (!formState.privacy) newErrors.privacy = t.contact.validation.privacyRequired
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSending(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", phone: "", service: "", message: "", privacy: false })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            {t.contact.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <p className="text-lg font-semibold text-foreground">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.name} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: "" })
                    }}
                    className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Dr. Popescu Maria"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Email & Phone row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      {t.contact.email} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: "" })
                      }}
                      className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                      placeholder="email@exemplu.ro"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      {t.contact.phone} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value })
                        if (errors.phone) setErrors({ ...errors, phone: "" })
                      }}
                      className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        errors.phone ? "border-destructive" : "border-border"
                      }`}
                      placeholder="+40 7XX XXX XXX"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.service} <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => {
                      setFormState({ ...formState, service: e.target.value })
                      if (errors.service) setErrors({ ...errors, service: "" })
                    }}
                    className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.service ? "border-destructive" : "border-border"
                    } ${!formState.service ? "text-muted-foreground" : ""}`}
                  >
                    <option value="">{t.contact.selectService}</option>
                    {services.map((s, i) => (
                      <option key={i} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    {t.contact.message}{" "}
                    <span className="text-muted-foreground text-xs">({t.contact.optional})</span>
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {/* Privacy checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formState.privacy}
                      onChange={(e) => {
                        setFormState({ ...formState, privacy: e.target.checked })
                        if (errors.privacy) setErrors({ ...errors, privacy: "" })
                      }}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                    />
                    <span className="text-sm text-foreground/80">
                      {t.contact.privacy}{" "}
                      <a
                        href={lang === "ro" ? "/politica-confidentialitate" : "/privacy-policy"}
                        className="text-primary underline underline-offset-2 hover:text-primary/80"
                      >
                        {t.contact.privacyLink}
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <p className="mt-1 text-xs text-destructive">{errors.privacy}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">{t.contact.info.title}</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.info.phone}</p>
                    <a href="tel:+40XXXXXXXXX" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      +40 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.info.email}</p>
                    <a href="mailto:contact@dririnabosinceanu.ro" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      contact@dririnabosinceanu.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.info.address}</p>
                    <p className="text-sm font-medium text-foreground">{t.contact.info.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.info.hours}</p>
                    <div className="text-sm font-medium text-foreground">
                      <p>{t.contact.info.weekdays}</p>
                      <p>{t.contact.info.saturday}</p>
                      <p className="text-muted-foreground">{t.contact.info.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-4 rounded-2xl border border-border overflow-hidden h-48 lg:h-56 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
