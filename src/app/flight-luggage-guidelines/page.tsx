"use client";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import Image from "next/image";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components";

export default function FlightLuggageGuidelines() {
  return (
    <main>
      <HeroSection
        title="Flight Luggage Guidelines"
        imageUrl="/images/aircraft.jpg"
      />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container max-w-3/4 mx-auto py-16"
      >
        <h2 className="text-center text-4xl text-gray-400">
          Should you have any specific questions that are not addressed in the
          details below, simply email us at{" "}
          <span className="text-[#b4a269]">info@skysafari.com</span> and we will
          revert back right away.
        </h2>
      </motion.section>
      <hr className="border-1 border-[#B4A269] my-4 w-20 mx-auto" />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container max-w-3/4 mx-auto py-16"
      >
        <h2 className="text-4xl text-black">Checked Baggage Permitted</h2>
        <p className="block py-8">
          Our aircraft are not airliners and relatively speaking they are small.
          This means we have small baggage storage bays and restrictive weight
          limitations, for luggage and also passengers.
        </p>
      </motion.section>
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="flex flex-col items-center justify-center gap-4 text-[#B4A269] border-r border-[#B4A269]">
            <Image
              src="/images/Luggage-Permited.jpg"
              alt="Permitted Images"
              width={300}
              height={100}
              objectFit="cover"
            />
            <BiCheckCircle />
            <p>Permiited Luggage</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-[#B4A269]">
            <Image
              src="/images/Luggage-Not-Permited.jpg"
              alt="Permitted Images"
              width={300}
              height={100}
              objectFit="cover"
            />
            <BiXCircle />
            <p>Non Permiited Luggage</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto border border-[#B4A269] p-4 text-gray-600">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="text-lg font-bold">
              Our luggage specifications are as follows:
            </h2>
            <p className="block py-8">
              <ul className="space-y-2">
                <li> 1 piece per person with a maximum weight of 20Kg</li>
                <li>
                  {" "}
                  Soft (all sides) luggage / duffel bags – with no rigid sides
                </li>
                <li>
                  {" "}
                  Maximum luggage weight is 23kg per person (including all
                  carry-on luggage)
                </li>
                <li>
                  {" "}
                  Maximum luggage size is H 30in x D 13.4in x W 16.50in (H 80cm
                  x D 31cm x W 42.5cm)
                </li>
                <li>
                  {" "}
                  Linear dimensions of the checked luggage not to exceed 59.9
                  linear inches / 153.5cm, (height + depth + width)
                </li>
              </ul>
            </p>
          </div>

          <div>
            <Image
              src="/images/Luggage-Specifications.png"
              alt="Luggage Specifications"
              width={300}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16">
        <h2 className="text-lg font-bold">
          Carry-On Baggage Permitted – Maximum Weight 3Kg
        </h2>
        <p className="block py-8">
          Examples of items that can be brought on the flight as carry-on
          luggage include the following:
          <ul className="space-y-2">
            <li> A lady’s handbag or purse.</li>
            <li>A reasonable amount of reading material for the flight.</li>
            <li>An overcoat, wrap or blanket.</li>
            <li>A small camera, binoculars, I-pod, Kindle or similar.</li>
            <li>A laptop computer or an I-pad.</li>
            <li>A fanny pack or small ruck sack.</li>
          </ul>
        </p>
      </section>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
