import { PrivacyContent } from "@/components/privacy-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Irina Bosinceanu",
  description: "Privacy policy and personal data protection in accordance with GDPR.",
}

export default function PrivacyPolicyEN() {
  return <PrivacyContent />
}
