import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = contactPage.metadata;

export default function ContactPage() {
  return <Contact />;
}