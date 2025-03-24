"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-black/50 text-white">
        <h1 className="text-2xl font-bold tracking-wide">
          <Image
            src="/images/skysafari-logo-full-01.svg"
            alt="SkySafari Logo"
            width={200}
            height={50}
            priority
          />
        </h1>
        <button className="bg-[#b4a269] px-6 py-2 rounded-full text-white text-sm tracking-widest transform transition-transform hover:scale-110">
          ENQUIRE
        </button>
      </nav>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ transform: `translateY(${offset * 0.2}px)` }} // Parallax effect
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
      >
        <h2 className="text-5xl md:text-6xl font-light mb-4 animate-fade-in">
          Luxury Fly-In Safaris
        </h2>
        <p className="text-lg tracking-widest opacity-80">
          TANZANIA &nbsp; | &nbsp; KENYA &nbsp; | &nbsp; EAST AFRICA
        </p>
      </motion.div>
    </div>
  );
};
