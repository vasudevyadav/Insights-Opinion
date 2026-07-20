import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AosProvider from "./components/AosProvider";
import Footer from "./components/home/footer";
import ScrollLeadPopup from "./components/shared/scroll-lead-popup";
import { getResearchNavItems } from "@/lib/getResearchPage";
import { fetchServices } from "@/app/lib/services-api";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://insightsopinion.com";

const defaultTitle = "Best Market Research Company | Big Market Research Firms";
const defaultDescription =
  "Insights Opinion is a global market research company delivering quantitative, qualitative, healthcare, B2B, consumer, and data support services across 100+ countries.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Insights Opinion",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: "bids@insightsopinion.com",
      description: defaultDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Insights Opinion",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  applicationName: "Insights Opinion",
  authors: [{ name: "Insights Opinion" }],
  creator: "Insights Opinion",
  publisher: "Insights Opinion",
  category: "Market Research",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Insights Opinion",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/home-banner.png",
        alt: "Insights Opinion global market research services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/home-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [researchItems, serviceItems] = await Promise.all([
    getResearchNavItems(),
    fetchServices(),
  ]);

  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`} style={{ colorScheme: "light" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AosProvider />
        <Navbar
          researchItems={researchItems}
          serviceItems={serviceItems}
        />
        <main className="pt-18 lg:pt-24">
          {children}
        </main>
        <Footer />
        <ScrollLeadPopup />
      </body>
    </html>
  );
}
