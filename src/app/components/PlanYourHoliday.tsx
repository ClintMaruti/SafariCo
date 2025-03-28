"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const PlanYourHoliday = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container max-w-3/4 mx-auto py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" flex flex-col gap-2 b-8"
      >
        <h2 className="text-3xl font-bold text-[#c6bfaf]">
          Plan your luxury holiday today
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-6 md:leading-8 lg:leading-10">
          Craving a holiday in utter luxury? Our team of travel specialists are
          waiting to help you plan your tailor-made trip, so get in touch with
          us today
        </p>
        <Link
          href="/plan-your-trip"
          className="bg-[#b4a269] text-sm p-4 text-white tracking-wide w-max hover:bg-[#b4a269]/50 cursor-pointer"
        >
          PLAN YOUR BESPOKE HOLIDAY
        </Link>
      </motion.div>
    </motion.section>
  );
};
