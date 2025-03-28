"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const safariDestinations = [
  {
    title: "SkySafari Kenya",
    image: "/images/kenya-01.jpg",
    link: "/skysafari-kenya",
  },
  {
    title: "SkySafari Tanzania",
    image: "/images/kenya-02.jpg",
    link: "/skysafari-tanzania",
  },
  {
    title: "SkySafari East Africa",
    image: "/images/Tz-01.jpg",
    link: "/skysafari-east-africa",
  },
];

export const Destinations = () => {
  return (
    <section className="text-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-[#c6bfaf]">
          Discover Our Exclusive Destinations
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 lg:px-20">
        {safariDestinations.map((destination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative group w-full md:w-1/3 h-[350px] overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image */}S
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="transition-transform duration-500 group-hover:scale-105 object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
            {/* Text & Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-semibold mb-4"
              >
                {destination.title}
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={destination.link}
                  passHref
                  className="px-6 py-2 border border-white text-white text-sm font-semibold tracking-widest rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black"
                >
                  EXPLORE
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
