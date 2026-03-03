'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ServicesSection } from '@/components/services-section'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
