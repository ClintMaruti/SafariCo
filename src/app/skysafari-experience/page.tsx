"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ContactUsSection } from "../components/ContactUsSection";
import { Dialog } from "@headlessui/react";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

export default function SkySafariExperience() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Ensures component is only rendered on the client
  }, []);

  if (!isClient) return null; // Prevents SSR issues

  // Close Modal
  const closeModal = () => setSelectedIndex(null);

  // Navigate Images
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : aircraft_images.length - 1
    );
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < aircraft_images.length - 1 ? prev + 1 : 0
    );

  const aircraft_images = [
    { src: "/images/ss_aircraft_01.jpg", title: "Luxury Sky Safari" },
    {
      src: "/images/ss_aircraft_02.jpg",
      title: "Wilderness Adventure",
    },
    {
      src: "/images/ss_aircraft_03.jpg",
      title: "Exclusive Bush Retreat",
    },
    { src: "/images/ss_aircraft_04.jpg", title: "Wildlife Expedition" },
    { src: "/images/ss_aircraft_05.jpg", title: "Romantic Getaway" },
    { src: "/images/ss_aircraft_06.jpg", title: "Family Safari" },
    { src: "/images/ss_aircraft_08.jpg", title: "Family Safari" },
    { src: "/images/ss_aircraft_09.jpg", title: "Family Safari" },
  ];

  const accomodation_images = [
    {
      src: "/images/guiding-walkingsafari-01.jpg",
      title: "Elewana accommodation",
    },
    {
      src: "/images/guiding-walkingsafari-02.jpg",
      title: "Elewana accommodation",
    },
    {
      src: "/images/guiding-walkingsafari-03.jpg",
      title: "Elewana accommodation",
    },
    {
      src: "/images/guiding-walkingsafari-04.jpg",
      title: "Elewana accommodation",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection
        imageUrl="/images/Activities-SunriseDrive-Kilimanjaro.jpg"
        title="The SkySafari Experience"
        description="A journey through Africa’s breathtaking landscapes"
      />

      <section className="container max-w-3/4 mx-auto py-16">
        <h2 className="text-center text-4xl text-gray-400">
          A SkySafari is more than a holiday.
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 leading-6 md:leading-8 lg:leading-10 py-4">
          It’s an immersion. Our expertly designed East African safari luxury
          tours will whisk you right into the most spine-tingling, hair-
          raising, mind-blowing wilderness. We’ll ease you through airports,
          transport you in our private planes, book you into the most exquisite
          camps in the best wildlife locations, and ensure every detail is taken
          care of – from optimising your chances of seeing the Big Five to
          knowing how you take your G&T. Travel with us and you won’t just see
          Africa, you’ll feel it.
        </p>
      </section>

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
            className="text-4xl md:text-5xl tracking-wide leading-16"
          >
            Personalised Service, Luxurious Accommodation, & Authentic African
            Safari Experiences
          </motion.h2>
        </div>
      </motion.section>

      <section className="mt-12 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-gray-400">
          Flying with us – Our Aircraft
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 leading-6 md:leading-8 lg:leading-10 max-w-4xl mx-auto">
          Want to travel like a VIP? Each of our small fleet of executive-class
          planes has an air of opulence and exclusivity...
        </p>

        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {aircraft_images.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer w-full h-48 sm:h-56 md:h-64"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:opacity-75 transition"
              />
            </div>
          ))}
        </div>

        {/* ✅ Modal for Image Preview */}
        {selectedIndex !== null && (
          <Dialog
            open={selectedIndex !== null}
            onClose={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-80" />

            {/* Modal Content */}
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              {/* Close Button (Positioned in Top-Right) */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 md:right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <AiOutlineClose className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Image & Navigation */}
              <div className="relative flex items-center w-full">
                {/* Left Arrow (Centered Vertically) */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <AiOutlineLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Image */}
                {selectedIndex !== null && (
                  <Image
                    src={aircraft_images[selectedIndex].src}
                    alt={aircraft_images[selectedIndex].title}
                    fill
                    className="max-w-[90%] max-h-[75vh] md:max-h-[80vh] rounded-lg shadow-lg"
                  />
                )}

                {/* Right Arrow (Centered Vertically) */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <AiOutlineRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </section>

      <section className="mt-12 container max-w-3/4 mx-auto">
        <h2 className="text-3xl font-light text-center mb-8 text-gray-400">
          Led by the best – Our Guides
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 leading-6 md:leading-8 lg:leading-10 ">
          The right guide will elevate your safari from good to truly great.
          Which is why we employ some of the best in the business. Each of our
          guides is highly qualified, hugely knowledgeable and endlessly
          passionate, infusing every game drive and wilderness walk with their
          enthusiasm and expertise. Many of our guides grew up in the areas
          where they work, so no one knows these places better, no one is better
          able to open your eyes to all the wonders, big and small, of the East
          African bush.
        </p>
      </section>

      <section className="mt-12 container max-w-3/4 mx-auto">
        <h2 className="text-3xl font-light text-center mb-8 text-gray-400">
          Stay in style – The Elewana Collection
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 leading-6 md:leading-8 lg:leading-10">
          We deliver you to the best accommodation on every leg of the trip. Our
          partner, and sister company, The Elewana Collection, is a collection
          of unique, boutique lodges, camps and hotels in Kenya and Tanzania,
          tucked into some of the world’s most astonishing wildlife-viewing
          spots, putting you right at the heart of the action. Each of Elewana’s
          small, intimate retreats has its own character and style, but they all
          share the same ethos: exceptional personalised service, endless
          attention to detail, luxury with a light environmental touch and some
          of the best food you’ll eat in East Africa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3">
          {accomodation_images.map((item, index) => (
            <div key={index} className="relative group w-full h-64">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className=" object-cover rounded-lg shadow-lg group-hover:opacity-75 transition"
              />
            </div>
          ))}
        </div>
      </section>

      <ContactUsSection />

      <Footer />
    </main>
  );
}
