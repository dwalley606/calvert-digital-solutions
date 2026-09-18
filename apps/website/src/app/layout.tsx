import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calvertdigitalsolutions.com";

const montserrat = localFont({
  src: "./fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Calvert Digital Solutions",
    template: "%s | Calvert Digital Solutions",
  },
  description: "Modern websites for Calvert County small businesses.",
  manifest: "/brand/icon/site.webmanifest",
  icons: {
    icon: { url: "/brand/icon/favicon.svg", type: "image/svg+xml" },
    shortcut: "/favicon.ico",
    apple: "/brand/icon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Calvert Digital Solutions",
    title: "Calvert Digital Solutions",
    description: "Modern websites for Calvert County small businesses.",
    images: [
      {
        url: "/brand/social/website-share-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Calvert Digital Solutions — Local businesses. Real solutions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvert Digital Solutions",
    description: "Modern websites for Calvert County small businesses.",
    images: ["/brand/social/website-share-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebasNeue.variable} min-h-screen bg-navy font-sans text-off-white antialiased`}
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main className="min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
