import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const menuItems = [
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

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-black/50 text-white">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/SkySafari-Logo-01.svg"
            alt="SkySafari Logo"
            width={200}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Menu + Enquire Button */}
      <div className="hidden sm:flex sm:items-center sm:gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
        >
          <FiMenu className="text-white text-2xl" />
        </button>
        <button className="bg-[#b4a269] px-6 py-2 rounded-full text-white text-sm tracking-widest transform transition-transform hover:scale-110 cursor-pointer">
          ENQUIRE
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-24 left-0 w-full bg-black/90 text-white p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <div key={index}>
                <h2
                  className="text-lg font-semibold pb-2"
                  style={{ color: "#b4a269" }}
                >
                  {category.title}
                </h2>
                <ul className="mt-2 space-y-2">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.path}
                        className="hover:text-gray-300 cursor-pointer block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
