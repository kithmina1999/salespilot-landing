import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalPages } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalPages["cookie-policy"].title,
  description: legalPages["cookie-policy"].description,
};

export default function CookiePolicyPage() {
  return <LegalPage slug="cookie-policy" />;
}
