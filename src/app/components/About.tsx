"use client";

import Image from "next/image";
import { FaPlay, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 relative items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[330px] h-[200px] md:h-[300px] lg:h-[400px]"
          >
            <Image
              src="/images/bush-breakfast.jpg"
              alt="Bush Breakfast"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Play Button */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-50">
              <div className="bg-white p-2 rounded-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#545D3E] p-9 rounded-full cursor-pointer"
                >
                  <FaPlay className="text-white" size={40} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Image with Contact Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-4xl"
          >
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
              <Image
                src="/images/bush-breakfast.jpg"
                alt="Bush Breakfast"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Contact Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute bottom-0 right-0 bg-[#F8F5ED] p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-3/4 md:w-1/2 shadow-lg"
            >
              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#9C8263] text-white font-semibold px-6 py-2 rounded-md"
              >
                Get In Touch
              </motion.button>

              {/* Contact Info */}
              <div className="flex items-center gap-2 text-center md:text-left">
                <FaPhone className="text-[#9C8263]" size={20} />
                <div>
                  <p className="text-gray-600 text-sm">Contact us at</p>
                  <p className="text-gray-900 font-semibold text-sm">
                    Tanzania: +255 689 100 918
                  </p>
                  <p className="text-gray-900 font-semibold text-sm">
                    Kenya: +254 701 686 065
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
