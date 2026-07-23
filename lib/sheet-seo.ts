import sheetSeoData from "@/data/sheet-seo.json";

export type SheetSeoEntry = {
  title?: string;
  description?: string;
};

const sheetSeo = sheetSeoData as Record<string, SheetSeoEntry>;

export function getSheetSeo(path: string): SheetSeoEntry | undefined {
  const cleanPath = path.replace(/\/$/, "") || "/";
  return sheetSeo[cleanPath];
}
