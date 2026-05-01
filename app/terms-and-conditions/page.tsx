import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalPages } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalPages["terms-and-conditions"].title,
  description: legalPages["terms-and-conditions"].description,
};

export default function TermsAndConditionsPage() {
  return <LegalPage slug="terms-and-conditions" />;
}
