import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalPages } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalPages["privacy-policy"].title,
  description: legalPages["privacy-policy"].description,
};

export default function PrivacyPolicyPage() {
  return <LegalPage slug="privacy-policy" />;
}
