"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactUsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-blue-950/80 not-[]:flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/contours-dark.png')" }}
    >
      <div className="container px-8 flex flex-col gap-4 py-16">
        <h2 className="text-white text-3xl font-light text-center">
          Any questions?
        </h2>
        <p className=" text-white text-center text-sm leading-10 max-w-3/4 mx-auto">
          We’re committed to making your SkySafari the adventure of a lifetime
          as well as helping to safeguard the African wilderness for future
          generations. Want to know more about how we do both? Get in touch with
          our expert team.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="max-w-1/2 mx-auto"
        >
          <Link
            href="/plan-your-trip"
            className=" bg-[#b4a269] hover:bg-[#a08a5e] text-white font-normal px-8 py-3 rounded-full transition-transform duration-300 shadow-lg"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
