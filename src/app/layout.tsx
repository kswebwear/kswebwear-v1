import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Custom T-Shirt Printing Tallawong`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "custom t-shirt printing Tallawong",
    "DTF printing Sydney",
    "gym merch Australia",
    "custom hoodies",
    "business merch packs",
    "local t-shirt printing NSW",
    "KS Web and Wear",
    "custom printing Rouse Hill",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL("https://kswebwear.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://kswebwear.com.au",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Custom T-Shirt Printing Tallawong`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Custom T-Shirt Printing`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
