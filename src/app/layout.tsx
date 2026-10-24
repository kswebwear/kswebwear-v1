import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter, Sora } from "next/font/google";
import "../styles/tokens.css";
import "./globals.css";
import UtilityStrip from "@/components/ks/UtilityStrip";
import SiteHeader from "@/components/ks/SiteHeader";
import SiteFooter from "@/components/ks/SiteFooter";
import MobileActionBar from "@/components/ks/MobileActionBar";
import { SITE_CONFIG } from "@/lib/constants";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Still used by the inner pages (services, about, faq, contact) until they get the new design.
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
    "custom event shirts",
    "business uniforms printing",
    "group order tees",
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
    <html lang="en-AU" className={`${archivo.variable} ${plexMono.variable} ${inter.variable} ${sora.variable}`}>
      <body className="font-ks-sans antialiased">
        <UtilityStrip />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
