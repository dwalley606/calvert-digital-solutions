// apps/website/src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calvert Digital Solutions",
  description: "Web, security, and automation for local businesses.",
  icons: {
    icon: "/apps/website/public/brand/icon/CDS Shield.png",
    apple: "/apps/website/public/brand/logo/CDS Shield with title.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
