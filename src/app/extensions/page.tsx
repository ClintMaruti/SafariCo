"use client";
import { motion } from "framer-motion";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components/Footer";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] bg-[url('/images/Amboseli-Elephants.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-black/50 p-6 text-white text-center">
        <h1 className="text-6xl font-light">SkySafari Experience</h1>
        <p className="mt-2 text-md tracking-widest">Extensions & Additions</p>
      </div>
    </section>
  );
};

const MidSection = ({ title, body }: { title: string; body: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container max-w-3/4 mx-auto mt-12"
    >
      {/* Content */}
      <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-4xl text-gray-400"
        >
          {title}
        </motion.h2>
        <motion.p className="text-center mt-4 text-sm text-gray-600 leading-10">
          {body}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default function Extensions() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      <MidSection
        title="Why not stay a little longer?"
        body="We know that Africa is apt to get under your skin; you probably won’t want to leave. So we’re happy to help you extend your stay beyond our regular SkySafaris, in whatever way you choose.

We can organise additional time at any of the opulent Elewana Collection properties. Perhaps you’d like to spend longer in the Maasai Mara to maximise your immersion in the Great Migration? Or maybe you’d like extra days in one of East Africa’s unique conservancies, so you can fit in more activities – perhaps a camel trek, river raft or hot-air balloon ride?"
      />

      <motion.hr className="w-sm mx-auto my-2 border-gray-400" />

      <MidSection
        title="We can also arrange some well-earned R&R by the ocean. After all those early starts on safari, you might fancy a few days – or weeks – simply lazing on the beach. And we know just the spots."
        body="Head for Elewana Kilindi Zanzibar, arguably the spice island’s most romantic retreat. Sink into one of its dreamy pavilions (each with private plunge pool and butler) and unwind amid the coconut palms and casuarina trees. Have a post-safari pamper in the spa, explore the ocean by kayak, paddleboard or boat, and toast your trip with a candlelit dinner on the beach.

Whether you want more time in the bush or on the beach, we can make it happen."
      />
      <ContactUsSection />

      <Footer />
    </main>
  );
}
