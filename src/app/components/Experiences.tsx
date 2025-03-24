"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  LuUserCheck,
  LuPackage,
  LuStar,
  LuUsers,
  LuLeaf,
  LuGlobe,
} from "react-icons/lu";

const features = [
  {
    title: "Luxurious",
    description:
      "Exceptional service, executive airplanes, opulent accommodation, VIP treatment",
    icon: <LuStar size={40} className="text-[#a47d55]" />,
  },
  {
    title: "Seamless",
    description:
      "Fast-track at airports, immediate airstrip boarding, direct flights, no waiting around",
    icon: <LuPackage size={40} className="text-[#a47d55]" />,
  },
  {
    title: "Simplicity",
    description:
      "One package, one payment: everything except park fees included in the cost",
    icon: <LuUserCheck size={40} className="text-[#a47d55]" />,
  },
  {
    title: "Personal",
    description:
      "Every need met, every detail covered, with standard bells, whistles, and surprises",
    icon: <LuUsers size={40} className="text-[#a47d55]" />,
  },
  {
    title: "Responsible",
    description:
      "Committed to wildlife, people and the planet; all trips compensate for flight carbon emissions and support community conservation",
    icon: <LuLeaf size={40} className="text-[#a47d55]" />,
  },
  {
    title: "Extraordinary",
    description:
      "Meticulously curated itineraries, remarkable locations, unrivaled wildlife encounters – totally unique",
    icon: <LuGlobe size={40} className="text-[#a47d55]" />,
  },
];

export const Experiences = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#f7f8ed] py-16 px-6 md:px-16 lg:px-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mt-2">Exceptional Experiences</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We offer unique tours with local expertise, premium services, and
          countless unforgettable moments designed just for you.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>

        {/* Center Image (Hidden on Small Screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center h-auto"
        >
          <Image
            src="/images/explore.jpg"
            alt="Explorer"
            width={350}
            height={450}
            className="rounded-lg object-cover hidden md:block"
          />
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">
          {features.slice(3, 6).map((feature, index) => (
            <FeatureCard key={index} index={index + 3} {...feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Feature Card Component with Animation
const FeatureCard = ({ title, description, icon, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex items-start border border-gray-300 p-5 h-full"
    >
      <motion.div whileHover={{ scale: 1.1 }}>{icon}</motion.div>
      <div className="ml-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
