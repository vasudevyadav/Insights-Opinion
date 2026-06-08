import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AosProvider from "./components/AosProvider";
import Footer from "./components/home/footer";

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
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Market Research Company | Best Market Research Firms",
    template: "%s",
  },
  description:
    "Insights Opinion is a leading market research and consulting company in USA specializing in quantitative and qualitative data analysis, Delivered by experienced experts. Contact us now!",
  applicationName: "Best Market Research Company ",
  authors: [{ name: "Best Market Research Company " }],
  creator: "Best Market Research Company ",
  publisher: "Best Market Research Company ",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best Market Research Company ",
    description:
      "Insights Opinion is a leading market research and consulting company in USA specializing in quantitative and qualitative data analysis, Delivered by experienced experts. Contact us now!",
    url: siteUrl,
    siteName: "Best Market Research Company ",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Market Research Company ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Market Research Company ",
    description:
      "Best Market Research Company  offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
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
    <html lang="en" style={{ colorScheme: "light" }}>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`} style={{ colorScheme: "light" }}>
        <AosProvider />
        <Navbar />
        <main className="lg:mt-20 mt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}