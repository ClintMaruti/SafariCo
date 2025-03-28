"use client";
import { ConservationSection } from "./ConservationSection";
import { Sustainability } from "./Sustainability";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

export default function Conservation() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection
        title="Conservation & Sustainability"
        imageUrl="/images/Rhino-Sunset.jpg"
      />
      <ConservationSection />
      <hr className="w-sm mx-auto my-4 border-gray-400 hidden sm:flex" />
      <Sustainability />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
