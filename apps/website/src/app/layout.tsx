// apps/website/src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Calvert Digital Solutions",
  description: "Web, security, and automation for local businesses.",
  icons: {
    icon: "/brand/icon/cds-shield.png",
    apple: "/brand/logo/cds-logo-horizontal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

