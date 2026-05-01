import {
  BarChart3,
  Bot,
  Boxes,
  CreditCard,
  Languages,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";
import type { ComponentType } from "react";

export type Locale = "en" | "si";
export type IconName =
  | "bot"
  | "message"
  | "cart"
  | "orders"
  | "payments"
  | "analytics"
  | "language"
  | "security"
  | "products"
  | "delivery"
  | "sparkles";

export const icons = {
  bot: Bot,
  message: MessageCircle,
  cart: ShoppingCart,
  orders: PackageCheck,
  payments: CreditCard,
  analytics: BarChart3,
  language: Languages,
  security: ShieldCheck,
  products: Boxes,
  delivery: Truck,
  sparkles: Sparkles,
} satisfies Record<IconName, ComponentType<{ className?: string }>>;

type LandingContent = {
  nav: Record<"features" | "workflow" | "pricing" | "resources" | "faq" | "login" | "cta", string>;
  hero: {
    badge: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    trust: string;
    stats: string[][];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: IconName; title: string; description: string }[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { icon: IconName; title: string; description: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    monthly: string;
    annual: string;
    plans: {
      name: string;
      priceMonthly: string;
      priceAnnual: string;
      periodMonthly: string;
      periodAnnual: string;
      description: string;
      features: string[];
      cta: string;
      highlighted: boolean;
    }[];
  };
  resources: { eyebrow: string; title: string; description: string; cta: string };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  finalCta: { title: string; description: string; cta: string };
};

export const landingContent = {
  en: {
    nav: {
      features: "Features",
      workflow: "Workflow",
      pricing: "Pricing",
      resources: "Resources",
      faq: "FAQ",
      login: "Login",
      cta: "Start free trial",
    },
    hero: {
      badge: "Built for Sri Lankan WhatsApp commerce",
      title: "Turn WhatsApp into your always-on sales counter.",
      description:
        "SalesPilot helps local retailers reply faster, show products, capture orders, verify bank-transfer payments, and see revenue from one focused dashboard.",
      primary: "Start free trial",
      secondary: "Explore workflow",
      trust: "14-day Starter trial. No card required. Bank-transfer friendly.",
      stats: [
        ["24/7", "customer replies"],
        ["LKR", "local pricing"],
        ["3", "languages ready"],
      ],
    },
    features: {
      eyebrow: "Commerce, not just chat",
      title: "Everything after the first message is handled in one flow.",
      description:
        "SalesPilot is built around the way Sri Lankan shops already sell: WhatsApp conversations, product questions, bank slips, delivery updates, and owner visibility.",
      items: [
        {
          icon: "message" as IconName,
          title: "Instant WhatsApp replies",
          description:
            "Answer product, delivery, payment, return, and FAQ questions with rule-based replies plus AI fallback.",
        },
        {
          icon: "products" as IconName,
          title: "Product catalog control",
          description:
            "Keep products, prices, stock, images, and WhatsApp catalog IDs organized for the bot and the team.",
        },
        {
          icon: "orders" as IconName,
          title: "Order board",
          description:
            "Move orders from new to confirmed, shipped, delivered, or cancelled with clear status history.",
        },
        {
          icon: "payments" as IconName,
          title: "Payment proof workflow",
          description:
            "Customers send bank-transfer screenshots, the business reviews proof, and the order updates cleanly.",
        },
        {
          icon: "analytics" as IconName,
          title: "Owner dashboard",
          description:
            "Track revenue, orders, customers, automation rate, unanswered questions, and monthly performance.",
        },
        {
          icon: "language" as IconName,
          title: "Sinhala and English",
          description:
            "Support Sinhala, English, and mixed local phrasing so customers do not need to change how they speak.",
        },
      ],
    },
    workflow: {
      eyebrow: "Guided product story",
      title: "From a WhatsApp question to an organized order.",
      description:
        "The customer never needs to install an app. Your team gets a structured order and the owner gets visibility.",
      steps: [
        {
          icon: "message" as IconName,
          title: "Customer asks on WhatsApp",
          description: "Price, availability, delivery, and product questions arrive as normal chat messages.",
        },
        {
          icon: "bot" as IconName,
          title: "SalesPilot replies and guides",
          description: "The bot uses your FAQs, products, and AI fallback to move the conversation forward.",
        },
        {
          icon: "cart" as IconName,
          title: "Order and payment are captured",
          description: "Cart details, address, COD or bank transfer, and payment proof are tracked.",
        },
        {
          icon: "analytics" as IconName,
          title: "Owner sees the business impact",
          description: "Revenue, pending orders, delivery follow-ups, and knowledge gaps are visible.",
        },
      ],
    },
    pricing: {
      eyebrow: "Local pricing",
      title: "Simple LKR plans for Sri Lankan businesses.",
      description:
        "Start free, upgrade when WhatsApp becomes a real sales channel. Annual plans include roughly two months free.",
      monthly: "Monthly",
      annual: "Annual",
      plans: [
        {
          name: "Free",
          priceMonthly: "Rs. 0",
          priceAnnual: "Rs. 0",
          periodMonthly: "forever",
          periodAnnual: "forever",
          description: "Try the basics and prepare your shop.",
          features: ["300 inbound messages", "10 FAQ rules", "10 products", "Basic dashboard"],
          cta: "Create account",
          highlighted: false,
        },
        {
          name: "Starter",
          priceMonthly: "Rs. 1,490",
          priceAnnual: "Rs. 14,900",
          periodMonthly: "/mo",
          periodAnnual: "/yr",
          description: "For active stores ready to automate sales.",
          features: ["Unlimited inbound", "1,500 AI replies", "100 products", "Image replies", "WhatsApp catalog sync"],
          cta: "Start Starter trial",
          highlighted: true,
        },
        {
          name: "Pro",
          priceMonthly: "Rs. 3,490",
          priceAnnual: "Rs. 34,900",
          periodMonthly: "/mo",
          periodAnnual: "/yr",
          description: "For growing teams that need more intelligence.",
          features: ["5,000 AI replies", "Unlimited products", "Advanced reports", "Dynamic sales hooks", "Priority support"],
          cta: "Start Pro",
          highlighted: false,
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Practical guides for setup, payments, and growth.",
      description:
        "Give your team and customers a clear place to learn how SalesPilot works before they ask support.",
      cta: "View all resources",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions owners ask before connecting WhatsApp.",
      items: [
        {
          question: "Do I need a new WhatsApp number?",
          answer:
            "No. SalesPilot connects to your official Meta WhatsApp Business setup. You need your Phone Number ID, WABA ID, and a System User access token.",
        },
        {
          question: "Is this a bulk broadcast tool?",
          answer:
            "SalesPilot is focused on commerce operations: product questions, order capture, payment proof, delivery follow-up, and owner reporting.",
        },
        {
          question: "Can customers pay by bank transfer?",
          answer:
            "Yes. The current subscription flow supports bank-transfer proof upload. Customer order payments can also be reviewed from uploaded screenshots.",
        },
        {
          question: "Does it work in Sinhala?",
          answer:
            "Yes. SalesPilot is designed for Sinhala, English, and local mixed phrasing used by Sri Lankan customers on WhatsApp.",
        },
      ],
    },
    finalCta: {
      title: "Make WhatsApp measurable before your next busy week.",
      description:
        "Start with the trial, connect your Meta credentials, add your products, and watch conversations become structured orders.",
      cta: "Start free trial",
    },
  },
  si: {
    nav: {
      features: "විශේෂාංග",
      workflow: "ක්‍රියාවලිය",
      pricing: "මිල",
      resources: "Resources",
      faq: "FAQ",
      login: "Login",
      cta: "Free trial පටන් ගන්න",
    },
    hero: {
      badge: "ශ්‍රී ලංකාවේ WhatsApp commerce සඳහා",
      title: "ඔබේ WhatsApp එක 24/7 sales counter එකක් කරන්න.",
      description:
        "SalesPilot ඔබේ shop එකට customer replies, products, orders, bank-transfer proof, delivery updates සහ revenue dashboard එක එකම තැනකින් handle කරන්න උදව් කරනවා.",
      primary: "Free trial පටන් ගන්න",
      secondary: "Workflow බලන්න",
      trust: "දින 14 Starter trial. Card අවශ්‍ය නැහැ. Bank transfer friendly.",
      stats: [
        ["24/7", "customer replies"],
        ["LKR", "local pricing"],
        ["3", "languages ready"],
      ],
    },
    features: {
      eyebrow: "Chat විතරක් නෙවෙයි",
      title: "Message එකෙන් පස්සේ තියෙන sales වැඩත් එකම flow එකක.",
      description:
        "Sri Lankan shops WhatsApp වලින් විකුණන විදියටම SalesPilot build කරලා තියෙන්නේ: product questions, bank slips, orders, delivery, owner visibility.",
      items: [
        {
          icon: "message" as IconName,
          title: "Instant WhatsApp replies",
          description:
            "Price, delivery, payment, return, FAQ questions වලට rules සහ AI fallback හරහා ඉක්මනින් reply දෙන්න.",
        },
        {
          icon: "products" as IconName,
          title: "Product catalog control",
          description:
            "Products, prices, stock, images, WhatsApp catalog IDs bot එකට සහ team එකට organize කරලා තියාගන්න.",
        },
        {
          icon: "orders" as IconName,
          title: "Order board",
          description:
            "New, confirmed, shipped, delivered, cancelled කියලා orders clear status වලින් manage කරන්න.",
        },
        {
          icon: "payments" as IconName,
          title: "Payment proof workflow",
          description:
            "Customers bank slip screenshots එවයි, business එක review කරයි, order එක update වෙයි.",
        },
        {
          icon: "analytics" as IconName,
          title: "Owner dashboard",
          description:
            "Revenue, orders, customers, automation rate, unanswered questions, monthly performance බලන්න.",
        },
        {
          icon: "language" as IconName,
          title: "Sinhala සහ English",
          description:
            "Customers Sinhala, English, Singlish මොන විදියට message කළත් support කරන්න.",
        },
      ],
    },
    workflow: {
      eyebrow: "Product story",
      title: "WhatsApp question එකක් organized order එකක් වෙන විදිය.",
      description:
        "Customer app install කරන්න ඕනේ නැහැ. Team එකට structured order එකක් ලැබෙනවා. Owner ට visibility ලැබෙනවා.",
      steps: [
        {
          icon: "message" as IconName,
          title: "Customer WhatsApp එකෙන් අහනවා",
          description: "Price, stock, delivery, product questions සාමාන්‍ය chat messages විදියට එනවා.",
        },
        {
          icon: "bot" as IconName,
          title: "SalesPilot reply කරලා guide කරනවා",
          description: "FAQs, products, AI fallback use කරලා conversation එක sales side එකට ගෙනියනවා.",
        },
        {
          icon: "cart" as IconName,
          title: "Order සහ payment capture වෙනවා",
          description: "Cart, address, COD හෝ bank transfer, payment proof track වෙනවා.",
        },
        {
          icon: "analytics" as IconName,
          title: "Owner business impact බලනවා",
          description: "Revenue, pending orders, delivery follow-ups, knowledge gaps dashboard එකේ පේනවා.",
        },
      ],
    },
    pricing: {
      eyebrow: "Local pricing",
      title: "ශ්‍රී ලංකාවේ businesses වලට සරල LKR plans.",
      description:
        "Free plan එකෙන් පටන් ගන්න. WhatsApp real sales channel එකක් වෙනකොට upgrade කරන්න.",
      monthly: "Monthly",
      annual: "Annual",
      plans: [
        {
          name: "Free",
          priceMonthly: "Rs. 0",
          priceAnnual: "Rs. 0",
          periodMonthly: "forever",
          periodAnnual: "forever",
          description: "Basics try කරලා shop එක prepare කරන්න.",
          features: ["300 inbound messages", "10 FAQ rules", "10 products", "Basic dashboard"],
          cta: "Account හදන්න",
          highlighted: false,
        },
        {
          name: "Starter",
          priceMonthly: "Rs. 1,490",
          priceAnnual: "Rs. 14,900",
          periodMonthly: "/mo",
          periodAnnual: "/yr",
          description: "Active stores sales automate කරන්න.",
          features: ["Unlimited inbound", "1,500 AI replies", "100 products", "Image replies", "WhatsApp catalog sync"],
          cta: "Starter trial පටන් ගන්න",
          highlighted: true,
        },
        {
          name: "Pro",
          priceMonthly: "Rs. 3,490",
          priceAnnual: "Rs. 34,900",
          periodMonthly: "/mo",
          periodAnnual: "/yr",
          description: "Growing teams වලට advanced intelligence.",
          features: ["5,000 AI replies", "Unlimited products", "Advanced reports", "Dynamic sales hooks", "Priority support"],
          cta: "Pro පටන් ගන්න",
          highlighted: false,
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Setup, payments, growth ගැන practical guides.",
      description:
        "Support අහන්න කලින් team එකට SalesPilot වැඩ කරන විදිය පැහැදිලිව ඉගෙනගන්න තැනක්.",
      cta: "Resources බලන්න",
    },
    faq: {
      eyebrow: "FAQ",
      title: "WhatsApp connect කරන්න කලින් owners අහන ප්‍රශ්න.",
      items: [
        {
          question: "අලුත් WhatsApp number එකක් ඕනෙද?",
          answer:
            "නැහැ. Official Meta WhatsApp Business setup එක connect කරනවා. Phone Number ID, WABA ID, System User access token ඕනේ.",
        },
        {
          question: "මේක bulk broadcast tool එකක්ද?",
          answer:
            "SalesPilot focus කරන්නේ commerce operations වලට: product questions, orders, payment proof, delivery follow-up, owner reports.",
        },
        {
          question: "Bank transfer payments support ද?",
          answer:
            "ඔව්. Subscription flow එක bank-transfer proof upload support කරනවා. Customer order payments screenshotsත් review කරන්න පුළුවන්.",
        },
        {
          question: "Sinhala වැඩ කරනවද?",
          answer:
            "ඔව්. Sinhala, English, සහ local mixed phrasing වලට SalesPilot design කරලා තියෙනවා.",
        },
      ],
    },
    finalCta: {
      title: "ඔබේ next busy week එකට කලින් WhatsApp measurable කරන්න.",
      description:
        "Trial එකෙන් පටන් ගන්න, Meta credentials connect කරන්න, products add කරන්න, conversations structured orders වෙන විදිය බලන්න.",
      cta: "Free trial පටන් ගන්න",
    },
  },
} satisfies Record<Locale, LandingContent>;
