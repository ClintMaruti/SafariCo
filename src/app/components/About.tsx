"use client";
import { motion } from "framer-motion";
import { VideoSection } from "./VideoSction";

export const AboutSection = () => {
  return (
    <section className="bg-[#F8F5ED] py-16 px-6 lg:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full my-2 text-center"
      >
        <h2 className="text-3xl font-normal text-[#c6bfaf]">
          Luxurious fly-in safaris with a personal touch, a sustainable ethos,{" "}
          <br />
          exhilarating wildlife, more time, more magic…
        </h2>
      </motion.div>

      {/* Video Section */}
      <VideoSection />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-[#666] text-sm max-w-6xl mx-auto space-y-2"
      >
        <p>
          SkySafari delivers you directly into world-class wilderness with some
          of the most exquisite luxury safaris in Africa. Our carefully designed
          trips fly non-stop and in style between the best camps, with the best
          guides and the best wildlife watching in Kenya and Tanzania, not a
          second wasted – which gives you longer to revel in the sights, smells,
          sounds and sensations of the African bush.
        </p>
        <p>
          And we know little details make a big difference: from giving you a
          greater luggage allowance to knowing how you take your G&T, we’ve got
          everything covered.
        </p>
      </motion.div>
    </section>
  );
};
