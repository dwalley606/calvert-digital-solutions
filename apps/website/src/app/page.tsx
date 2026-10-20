import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProof from "@/components/sections/ValueProof";
import BuildGrowSupport from "@/components/sections/BuildGrowSupport";
import ProofTrust from "@/components/sections/ProofTrust";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProof />
      <BuildGrowSupport />
      <ProofTrust />
      <HomeCTA />
    </>
  );
}
