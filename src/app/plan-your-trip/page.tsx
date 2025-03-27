import React from "react";
import { HeroSection } from "../components/HeroSection";
import { TripForm } from "./TripForm";

export default function PlanYourTrip() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection
        title="Plan Your Trip"
        imageUrl="/images/ss_aircraft_02.jpg"
      />
      <section className="container max-w-6xl mx-auto py-4">
        <TripForm />
      </section>
    </main>
  );
}
