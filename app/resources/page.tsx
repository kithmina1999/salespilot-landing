import type { Metadata } from "next";
import ResourcesIndex from "@/components/resources-index";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "SalesPilot resources for Meta WhatsApp setup, bank-transfer payment activation, and WhatsApp revenue operations.",
};

export default function ResourcesPage() {
  return <ResourcesIndex />;
}
