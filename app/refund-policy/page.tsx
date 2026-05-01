import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalPages } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: legalPages["refund-policy"].title,
  description: legalPages["refund-policy"].description,
};

export default function RefundPolicyPage() {
  return <LegalPage slug="refund-policy" />;
}
