const rawAppUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  process.env.NEXT_APPLICATION_URL ??
  "http://localhost:3000";

function normalizeBaseUrl(value: string) {
  const trimmed = value.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?/i.test(trimmed)
      ? `http://${trimmed}`
      : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, "");
}

export const appUrl = normalizeBaseUrl(rawAppUrl);

export const appLoginUrl = `${appUrl}/auth/login`;

export const appRegisterUrl = `${appUrl}/auth/register`;

export const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@salespilot.lk";

export const supportPhone =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE_NUMBER ?? "+94 77 123 4567";

export const companyName =
  process.env.NEXT_PUBLIC_COMPANY_NAME ?? "[Your Company Name]";

export const companyAddress =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? "[Your registered business address]";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salespilot.lk";

export const currentYear = new Date().getFullYear();
