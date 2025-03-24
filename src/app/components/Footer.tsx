"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-gray-300 py-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-8 text-center md:text-left">
          {/* Column 1 - SkySafari */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#d4a373] font-semibold uppercase tracking-widest mb-4">
              Skysafari
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  The SkySafari Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Safari Extensions & Additions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Conservation & Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 2 - Breathtaking Adventures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-[#d4a373] font-semibold uppercase tracking-widest mb-4">
              Breathtaking Adventures
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  SkySafari Kenya
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SkySafari Tanzania
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SkySafari East Africa
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - News & Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-[#d4a373] font-semibold uppercase tracking-widest mb-4">
              News & Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Travel Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Flight Luggage Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Booking Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Subscribe
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Info & Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 text-sm text-center md:text-left"
        >
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#d4a373]" />
            <span>Tanzania: +255 689 100 918 | Kenya: +254 701 686 065</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#d4a373]" />
            <span>reservations@skysafari.com</span>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4 mt-6"
        >
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaTripadvisor />
          </a>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-xs text-center md:text-left"
        >
          <p>MAR 23, 2025 © SkySafari</p>
          <a href="#" className="hover:text-white">
            Privacy & Cookies
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};
