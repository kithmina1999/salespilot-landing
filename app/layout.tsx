import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://salespilot.lk"),
  title: {
    default: "SalesPilot - WhatsApp commerce for Sri Lankan businesses",
    template: "%s | SalesPilot",
  },
  description:
    "SalesPilot turns WhatsApp into a commerce operating system for Sri Lankan retailers: replies, products, orders, payments, and revenue visibility.",
  openGraph: {
    title: "SalesPilot - WhatsApp commerce for Sri Lankan businesses",
    description:
      "Reply faster, capture orders, review payment proof, and manage WhatsApp commerce from one focused dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased light"
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
