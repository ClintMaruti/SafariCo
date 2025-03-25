"use client";
import Image from "next/image";
import { NavBar } from "./NavBar";
interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px] bg-black">
      {/* Navbar */}
      <div className="relative z-10">
        <NavBar />
      </div>
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="cover image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl mt-4 w-11/12 md:w-2/3 lg:w-1/2 leading-relaxed drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
};
