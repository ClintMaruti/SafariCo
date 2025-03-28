import {
  Hero,
  AboutSection,
  Experiences,
  SafariSections,
  Destinations,
  Footer,
} from "./components";
import { PlanYourHoliday } from "./components/PlanYourHoliday";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Destinations />
      <Experiences />
      <SafariSections />
      <PlanYourHoliday />
      <Footer />
    </main>
  );
}
