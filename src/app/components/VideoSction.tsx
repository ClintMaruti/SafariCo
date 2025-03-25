import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPhone, FaTimes } from "react-icons/fa";
import Image from "next/image";

export const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 relative items-center">
        {/* Left Image with Play Button */}
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
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:right-0 sm:transform sm:translate-x-1/2 z-50 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="bg-white p-2 rounded-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-[#545D3E] p-9 rounded-full"
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
          <div className="hidden sm:flex relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
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
            className="relative w-full sm:absolute sm:bottom-0 sm:right-0 bg-[#F8F5ED] p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 sm:w-3/4 md:w-1/2 shadow-lg"
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

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl z-50"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Video */}
            <video autoPlay controls className="w-full h-auto">
              <source src="/videos/skysafari-montarge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};
