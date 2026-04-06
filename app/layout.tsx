import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Insights-Opinion Dental Hospitals",
    template: "%s",
  },
  description:
    "Insights-Opinion Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
  applicationName: "Insights-Opinion Dental Hospitals",
  authors: [{ name: "Insights-Opinion Dental Hospitals" }],
  creator: "Insights-Opinion Dental Hospitals",
  publisher: "Insights-Opinion Dental Hospitals",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Insights-Opinion Dental Hospitals",
    description:
      "Insights-Opinion Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
    url: siteUrl,
    siteName: "Insights-Opinion Dental Hospitals",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insights-Opinion Dental Hospitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights-Opinion Dental Hospitals",
    description:
      "Insights-Opinion Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <html lang="en">
          <Navbar />
          <body className="lg:mt-20 mt-8 ">{children}</body>
        </html>
      </body>
    </html>
  );
}