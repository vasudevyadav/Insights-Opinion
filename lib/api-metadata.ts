import type { Metadata } from "next";

export type ApiSeo = {
  metaTitle?: string;
  metaDescription?: string;
  metakeyword?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
};

type MetadataFallback = {
  title: string;
  description?: string;
  image?: string;
};

/**
 * The canonical URL is always the page's own resolved path — never taken
 * from the API — so it can't drift out of sync with the actual route.
 */
export function buildApiMetadata(
  seo: ApiSeo | undefined,
  fallback: MetadataFallback,
  path: string
): Metadata {
  const title = seo?.metaTitle?.trim() || fallback.title;
  const description =
    seo?.metaDescription?.trim() || fallback.description;
  const image = seo?.ogImage?.trim() || fallback.image;
  const keywords = seo?.metakeyword
    ?.split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical: path },
    robots: seo?.robots
      ? {
          index: seo.robots.index ?? true,
          follow: seo.robots.follow ?? true,
        }
      : undefined,
    openGraph: {
      title: seo?.ogTitle?.trim() || title,
      description: seo?.ogDescription?.trim() || description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}
