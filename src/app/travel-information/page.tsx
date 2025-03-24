"use client";
import { HeroSection } from "../components/HeroSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ContactUsSection } from "../components/ContactUsSection";

const packingList = [
  {
    title: "Clothing",
    content: "Lightweight and breathable clothing is recommended...",
  },
  {
    title: "Medication and Toiletries",
    content:
      "Bring any prescribed medications, sunscreen, and personal toiletries...",
  },
  {
    title: "Personal Eye wear",
    content: "Sunglasses and prescription glasses are essential...",
  },
  {
    title: "Climate",
    content: "Expect warm days and cool nights, dress accordingly...",
  },
  {
    title: "Photographic and Optics Advice",
    content: "A good zoom lens and binoculars enhance wildlife viewing...",
  },
  {
    title: "Currency",
    content:
      "Local currency is advised for small purchases, but cards are widely accepted...",
  },
  {
    title: "Visas & Passports",
    content:
      "Ensure your passport is valid for at least 6 months beyond your stay...",
  },
  {
    title: "Health & Safety",
    content:
      "Consult your doctor about vaccinations and malaria prophylaxis...",
  },
  {
    title: "Travel Insurance",
    content: "Comprehensive travel insurance is highly recommended...",
  },
];

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-medium hover:bg-gray-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FaChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden px-6 text-gray-600"
      >
        <p className="py-2">{content}</p>
      </motion.div>
    </div>
  );
};

export default function TravellingInformation() {
  return (
    <main>
      <HeroSection
        title="Travelling Information"
        imageUrl="/images/Guiding-SunriseBushWalk.jpg"
        description="Please find below information about travelling to East Africa.
Should you have any specific questions that are not addressed in the details below, please don’t hesitate to contact us at info@skysafari.com."
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c6bfaf] mb-6">
            What to Pack
          </h2>
          <p className=" text-gray-600 mb-8 leading-8">
            The maximum weight limit for luggage is 23kg including hand luggage
            for your Elewana SkySafari. Note that for scheduled flights a weight
            limit of 15kg applies. Luggage should be packed in soft bags rather
            than in rigid suitcases. If you are travelling with more than 23kgs
            of luggage, you can leave your extra luggage at Arusha Coffee Lodge
            at no extra charge and collect it after your safari. Note that all
            our Elewana properties provide a free laundry service which can help
            with the limited weight allowance.
          </p>
          <p className=" text-gray-600 mb-8 leading-8">
            International Airlines do lose or mislay luggage from time to time
            so we suggest putting any essential items such as a change of
            clothes/malaria tables/chronic medication in your hand luggage too.
            Please read below our suggested ‘Packing List’. This is not an
            exhaustive list but is based on what our past guests have mentioned.
          </p>
          <p className=" text-gray-600 mb-8 leading-8">
            Please read below our suggested ‘Packing List’. This is not an
            exhaustive list but is based on what our past guests have mentioned.
          </p>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {packingList.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactUsSection />
    </main>
  );
}
