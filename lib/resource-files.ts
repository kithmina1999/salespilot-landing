import path from "path";
import { promises as fs } from "fs";
import type { Locale } from "@/lib/landing-content";

export async function getResourceBody(slug: string, locale: Locale) {
  const filePath = path.join(process.cwd(), "content", "resources", locale, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}
