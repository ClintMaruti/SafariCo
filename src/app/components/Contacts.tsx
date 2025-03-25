"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Contacts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#f8f5f0] flex flex-col md:flex-row items-center"
    >
      <div className="flex w-full">
        {/* Left: Booking Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <h3 className="text-sm uppercase tracking-wide text-[#a87c5d] font-semibold">
              Booking Form
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Start your safari journey today
            </h2>
            <p className="text-gray-600 mt-4">Send us an enquiry</p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex flex-col gap-4"
            >
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label className="block text-gray-700 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full text-gray-500  mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#a87c5d] focus:outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label className="block text-gray-700 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. hello@example.com"
                  className="w-full mt-1 px-4 text-gray-500 py-3 border rounded-md focus:ring-2 focus:ring-[#a87c5d] focus:outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label className="block text-gray-700 text-sm font-medium">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here"
                  rows={4}
                  className="w-full mt-1 text-gray-500 px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#a87c5d] focus:outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-6 w-full bg-[#a87c5d] hover:bg-[#91674e] text-white font-semibold py-3 rounded-md transition duration-300"
              >
                Book Now
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Right: Full Height Image (Hidden on Small Screens) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex flex-1"
        >
          <img
            src="/images/Tz-01.jpg"
            alt="Safari family"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
