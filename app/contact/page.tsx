'use client'

import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
