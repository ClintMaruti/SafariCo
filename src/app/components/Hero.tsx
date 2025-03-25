"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";
import Link from "next/link";

export const Hero: React.FC = () => {
  // State to track scrolling for parallax effect
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Adjust the speed of parallax effect
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ transform: `translateY(${offset * 0.2}px)` }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
      >
        <h2 className="text-5xl md:text-6xl font-light mb-4 animate-fade-in">
          Luxury Fly-In Safaris
        </h2>

        {/* Destination Links */}
        <div className="text-lg tracking-widest opacity-80 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Link href="/skysafari-tanzania" className="hover:underline">
            TANZANIA
          </Link>
          <span className="hidden sm:inline"> | </span>

          <Link href="/skysafari-kenya" className="hover:underline">
            KENYA
          </Link>
          <span className="hidden sm:inline"> | </span>

          <Link href="/skysafari-east-africa" className="hover:underline">
            EAST AFRICA
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
