"use client"

import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
