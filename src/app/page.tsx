import {
  Hero,
  AboutSection,
  Experiences,
  SafariSections,
  Destinations,
  Contacts,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Destinations />
      <Experiences />
      <SafariSections />
      <Contacts />
      <Footer />
    </main>
  );
}
