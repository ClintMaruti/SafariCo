"use client";
import { ConservationCarousel } from "./ConservationCarousel";
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
      <ConservationCarousel />
      <Sustainability />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
