import { companyAddress, companyName, supportEmail, supportPhone } from "@/lib/site";

export type LegalSlug = "privacy-policy" | "terms-and-conditions" | "refund-policy" | "cookie-policy";

export const legalPages: Record<
  LegalSlug,
  {
    title: string;
    description: string;
    updatedAt: string;
    sections: { heading: string; body: string[] }[];
  }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "How SalesPilot collects, uses, protects, and retains business and customer information.",
    updatedAt: "May 1, 2026",
    sections: [
      {
        heading: "About this policy",
        body: [
          `${companyName} operates SalesPilot, a WhatsApp commerce and sales automation platform. This Privacy Policy explains how we handle information when you visit our website, create an account, connect WhatsApp, upload products, manage orders, or contact support.`,
          `Business details placeholder: ${companyAddress}. Support: ${supportEmail}, ${supportPhone}.`,
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "We may collect account details, business profile information, user login information, WhatsApp connection identifiers, product catalog data, customer conversation records, order records, payment proof screenshots, support messages, usage logs, and device/session metadata.",
          "We do not intentionally collect unnecessary sensitive personal data. Businesses using SalesPilot are responsible for ensuring they have the right to upload or process their customer information.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "We use information to provide the platform, verify WhatsApp credentials, process orders, support payment proof review, generate dashboards, improve reliability, prevent abuse, provide support, and comply with legal or payment-provider requirements.",
          "We may use aggregated, non-identifying usage data to understand product performance and improve SalesPilot.",
          "When our AI assistant cannot answer a customer query from your FAQ rules, the message is processed by Google Gemini AI to generate a contextual response. Message content is sent to Google's API but is not used by Google for training. No customer personal data beyond the message text is shared with Google.",
        ],
      },
      {
        heading: "Security and retention",
        body: [
          "We apply reasonable technical and organizational safeguards to protect account data, credentials, and uploaded files. No internet service can guarantee absolute security.",
          "We retain information for as long as needed to provide SalesPilot, meet accounting/legal obligations, resolve disputes, and maintain audit trails.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about privacy can be sent to ${supportEmail}.`],
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description: "The terms that apply when businesses use SalesPilot.",
    updatedAt: "May 1, 2026",
    sections: [
      {
        heading: "Agreement",
        body: [
          `These Terms & Conditions apply to the use of SalesPilot by customers of ${companyName}. By creating an account, starting a trial, connecting WhatsApp, or using the dashboard, you agree to these terms.`,
        ],
      },
      {
        heading: "Use of the service",
        body: [
          "You must use SalesPilot lawfully and in line with Meta WhatsApp policies, payment-provider rules, and applicable customer privacy obligations.",
          "You are responsible for the accuracy of your products, prices, delivery promises, payment instructions, refund rules, and customer-facing messages.",
        ],
      },
      {
        heading: "WhatsApp and third-party services",
        body: [
          "SalesPilot relies on Meta WhatsApp Cloud API and may rely on payment, email, hosting, storage, and analytics providers. Availability may depend on these third-party services.",
          "You are responsible for keeping your Meta Business assets, WhatsApp account, and access tokens valid and authorized.",
        ],
      },
      {
        heading: "Plans, billing, and trials",
        body: [
          "SalesPilot may offer free trials, free plans, monthly plans, and annual plans. Plan limits and pricing may change with notice.",
          "Paid plans activate after payment verification or successful online payment processing, depending on the available payment method.",
        ],
      },
      {
        heading: "Limitations",
        body: [
          "SalesPilot is provided on an as-available basis. We are not responsible for indirect losses, lost profits, WhatsApp policy actions, third-party outages, or business decisions made from dashboard information.",
          `For questions, contact ${supportEmail}.`,
        ],
      },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    description: "How subscription refunds, failed payments, and bank-transfer proof issues are handled.",
    updatedAt: "May 1, 2026",
    sections: [
      {
        heading: "Overview",
        body: [
          "This Refund Policy applies to SalesPilot subscriptions and activation payments.",
          "Customer order refunds handled by merchants using SalesPilot are the responsibility of those merchants, not SalesPilot.",
        ],
      },
      {
        heading: "Bank-transfer proof payments",
        body: [
          "If you submit a bank-transfer proof screenshot and it cannot be verified, your subscription will not be activated until the issue is resolved.",
          "If duplicate or incorrect payments are confirmed, contact support with the transfer receipt, registered business email, WhatsApp number, and selected plan.",
        ],
      },
      {
        heading: "Subscription refund window",
        body: [
          "Refund requests may be considered within 14 days of payment if the service has not been materially used or if activation could not be completed due to a SalesPilot-side issue.",
          "Annual plan refunds, partial month refunds, and promotional payments should be reviewed case by case unless a stricter final policy is published.",
        ],
      },
      {
        heading: "PayHere and card payments",
        body: [
          "When online payments are processed through PayHere, refund timing and method may also depend on PayHere and banking network rules.",
          "PayHere card refunds can take time to reflect depending on whether they are instant or delayed refunds. Non-card methods may require manual refund handling.",
        ],
      },
      {
        heading: "Requesting a refund",
        body: [`Send refund requests to ${supportEmail} with your business name, registered email, WhatsApp number, payment date, amount, plan, and reason.`],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "How the SalesPilot website may use cookies and similar technologies.",
    updatedAt: "May 1, 2026",
    sections: [
      {
        heading: "What cookies are",
        body: [
          "Cookies are small files stored by your browser. They help websites remember preferences, protect sessions, understand usage, and improve performance.",
        ],
      },
      {
        heading: "How SalesPilot may use cookies",
        body: [
          "We may use essential cookies for site and account functionality, preference cookies for language or display choices, security cookies for session protection, and analytics cookies to understand website performance.",
          "If advertising or advanced analytics tools are added later, this policy should be updated before those tools are enabled.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can manage or block cookies in your browser settings. Blocking essential cookies may affect login, forms, or dashboard functionality.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about cookies can be sent to ${supportEmail}.`],
      },
    ],
  },
};
