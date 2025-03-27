"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const SafariSections = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-16 flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/aircraft.jpg')" }}
    >
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 transition-all duration-500 hover:bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl tracking-wide font-semibold"
        >
          Why SkySafari
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-sm md:text-md leading-relaxed"
        >
          Our expertly designed East African luxury safari tours will whisk you
          right into the most spine-tingling, hair-raising, mind-blowing
          wilderness. We’ll ease you through airports, transport you in our
          private planes, book you into the most exquisite camps in the best
          wildlife locations, and ensure every detail is taken care of.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <Link
            href="/skysafari-experience"
            passHref
            className="mt-8 bg-[#b4a269] hover:bg-[#a08a5e] text-white font-normal px-8 py-3 rounded-full transition-transform duration-300 shadow-lg"
          >
            EXPLORE MORE
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
