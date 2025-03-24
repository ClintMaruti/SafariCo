import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const menuItems = [
  {
    title: "SkySafari",
    links: [
      "Home",
      "The SkySafari Experience",
      "Safari Extensions & Additions",
      "Conservation & Sustainability",
      "Special Offers",
      "Contact Us",
    ],
  },
  {
    title: "Breathtaking Adventures",
    links: ["SkySafari Kenya", "SkySafari Tanzania", "SkySafari East Africa"],
  },
  {
    title: "News & Information",
    links: [
      "Travel Information",
      "Flight Luggage Guidelines",
      "Frequently Asked Questions",
      "Booking Terms & Conditions",
      "Downloads",
      "Subscribe",
    ],
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-black/50 text-white z-20">
      <div className="flex items-center gap-4">
        <Image
          src="/images/skysafari-logo-full-01.svg"
          alt="SkySafari Logo"
          width={200}
          height={50}
          priority
        />
      </div>
      <div className="flex items-center gap-4">
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
          className="absolute top-24 left-0 w-full bg-black/80 text-white p-6 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold border-b border-white/30 pb-2 text-[#b4a269]">
                  {category.title}
                </h2>
                <ul className="mt-2 space-y-2">
                  {category.links.map((link, i) => (
                    <li
                      key={i}
                      className="hover:text-gray-300 cursor-pointer transition-colors"
                    >
                      {link}
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
