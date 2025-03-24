"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";

// Footer menu mapping
const footerMenu = [
  {
    title: "SkySafari",
    links: [
      { name: "Home", path: "/" },
      { name: "The SkySafari Experience", path: "/skysafari-experience" },
      {
        name: "Safari Extensions & Additions",
        path: "/extensions-and-additions",
      },
      {
        name: "Conservation & Sustainability",
        path: "/conservation-and-sustainability",
      },
      { name: "Special Offers", path: "/special-offers" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    title: "Breathtaking Adventures",
    links: [
      { name: "SkySafari Kenya", path: "/skysafari-kenya" },
      { name: "SkySafari Tanzania", path: "/skysafari-tanzania" },
      { name: "SkySafari East Africa", path: "/skysafari-east-africa" },
    ],
  },
  {
    title: "News & Information",
    links: [
      { name: "Travel Information", path: "/travel-information" },
      { name: "Flight Luggage Guidelines", path: "/flight-luggage-guidelines" },
      {
        name: "Frequently Asked Questions",
        path: "/frequently-asked-questions",
      },
      {
        name: "Booking Terms & Conditions",
        path: "/booking-terms-and-conditions",
      },
      { name: "Downloads", path: "/downloads" },
      { name: "Subscribe", path: "/subscribe" },
    ],
  },
];

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
          {footerMenu.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index === 0 ? -30 : index === 2 ? 30 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-[#d4a373] font-semibold uppercase tracking-widest mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.path} className="hover:text-white block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
