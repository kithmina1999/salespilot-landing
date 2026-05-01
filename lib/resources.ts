import type { Locale } from "@/lib/landing-content";

export type ResourceCategory = "setup" | "payments" | "growth";

export interface ResourceMeta {
  slug: string;
  category: ResourceCategory;
  updatedAt: string;
  readingTime: string;
  languages: Locale[];
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  seoDescription: Record<Locale, string>;
}

export const categoryLabels: Record<ResourceCategory | "all", Record<Locale, string>> = {
  all: { en: "All", si: "සියල්ල" },
  setup: { en: "Setup", si: "Setup" },
  payments: { en: "Payments", si: "Payments" },
  growth: { en: "Growth", si: "Growth" },
};

export const resources: ResourceMeta[] = [
  {
    slug: "meta-whatsapp-credentials",
    category: "setup",
    updatedAt: "2026-05-01",
    readingTime: "7 min",
    languages: ["en", "si"],
    title: {
      en: "How to get your Phone Number ID, WABA ID, and System User Access Token",
      si: "Phone Number ID, WABA ID සහ System User Access Token ගන්න විදිය",
    },
    description: {
      en: "A practical setup guide for connecting SalesPilot to your official Meta WhatsApp Cloud API account.",
      si: "SalesPilot official Meta WhatsApp Cloud API account එකට connect කරන්න practical setup guide එක.",
    },
    seoTitle: {
      en: "Get Meta WhatsApp Phone Number ID, WABA ID, and Access Token",
      si: "Meta WhatsApp Phone Number ID, WABA ID, Access Token guide",
    },
    seoDescription: {
      en: "Step-by-step SalesPilot guide for finding your Meta WhatsApp Phone Number ID, WABA ID, and permanent System User access token.",
      si: "Meta WhatsApp Phone Number ID, WABA ID, permanent System User access token ගන්න SalesPilot guide එක.",
    },
  },
  {
    slug: "salespilot-payment-activation",
    category: "payments",
    updatedAt: "2026-05-01",
    readingTime: "5 min",
    languages: ["en", "si"],
    title: {
      en: "How SalesPilot payment and activation works",
      si: "SalesPilot payment සහ activation වැඩ කරන විදිය",
    },
    description: {
      en: "Learn the current bank-transfer proof workflow, verification process, activation code, and plan activation flow.",
      si: "Bank-transfer proof, verification, activation code, plan activation flow එක පැහැදිලි කිරීම.",
    },
    seoTitle: {
      en: "SalesPilot Bank Transfer Payment and Activation Guide",
      si: "SalesPilot Bank Transfer Payment සහ Activation Guide",
    },
    seoDescription: {
      en: "Understand how SalesPilot subscriptions are paid by bank transfer, reviewed, and activated with a code.",
      si: "SalesPilot subscriptions bank transfer මගින් pay කරලා activation code එකෙන් activate කරන විදිය.",
    },
  },
  {
    slug: "whatsapp-revenue-operations",
    category: "growth",
    updatedAt: "2026-05-01",
    readingTime: "6 min",
    languages: ["en", "si"],
    title: {
      en: "Why CEOs should treat WhatsApp as a revenue operations channel",
      si: "CEOs WhatsApp revenue operations channel එකක් විදියට බලන්න ඕනේ ඇයි",
    },
    description: {
      en: "A leadership view of missed replies, order discipline, payment visibility, and measurable customer operations.",
      si: "Missed replies, order discipline, payment visibility, measurable customer operations ගැන leadership view එක.",
    },
    seoTitle: {
      en: "WhatsApp as Revenue Operations for Sri Lankan CEOs",
      si: "Sri Lankan CEOs සඳහා WhatsApp Revenue Operations",
    },
    seoDescription: {
      en: "A CEO-friendly explanation of how SalesPilot turns WhatsApp conversations into measurable commerce operations.",
      si: "SalesPilot WhatsApp conversations measurable commerce operations බවට පත් කරන විදිය.",
    },
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
