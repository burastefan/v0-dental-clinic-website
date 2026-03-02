import { PrivacyContent } from "@/components/privacy-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Confidentialitate | Dr. Irina Bosinceanu",
  description: "Politica de confidentialitate si protectia datelor personale conform GDPR.",
}

export default function PrivacyPolicyRO() {
  return <PrivacyContent />
}
