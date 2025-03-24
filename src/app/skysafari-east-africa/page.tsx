"use client";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import Image from "next/image";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components";

export default function EastAfrica() {
  return (
    <main>
      <HeroSection
        title="SkySafari East Africa"
        imageUrl="/images/keyna-lions.jpg"
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/Contours.png')" }}
      >
        {/* Content */}
        <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl tracking-wide leading-16 text-[#c6bfaf]"
          >
            Two African giants. Millions of animals. Near-endless wilderness.
            One seamless, epic journey…
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-md md:text-lg tracking-wide leading-8 text-gray-400 font-light"
          >
            Our combined trip to Kenya and Tanzania encompasses the very best
            safaris in East Africa, from the heat-hazed, star-streaked Kenyan
            savannah, teeming with wildlife, to the highlands of Northern
            Tanzania, home to the continent’s highest mountain, the planet’s
            largest intact caldera, vast golden plains, truly enormous skies.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/Loisaba-Sundowners.jpg"
            alt="Kenya"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 top-0 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl text-white font-light">
              Tanzania 8-Day Safari
            </h1>
            <hr className="w-4 border-white" />
            <p className="text-sm font-normal tracking-wider text-white">
              Arusha &gt; Tarangire &gt; Serengeti &gt; Ngorongoro
            </p>
            <button className="bg-transparent border-1 border-white rounded-full tracking-widest px-4 py-2 text-white text-sm hover:bg-white/50 hover:text-black transition-all duration-300 cursor-pointer">
              EXPLORE
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/Contours.png')" }}
      >
        {/* Content */}
        <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl tracking-wide leading-14 text-[#c6bfaf]"
          >
            Nowhere does wildlife like Kenya and Tanzania. This is where you’ll
            find wilderness on a mind-blowing scale: big skies, big herds, big
            mountains, Big Five, big drama. And we’ll fly you to the best of
            both.
          </motion.h2>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 flex justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                img: "/images/icons/icon-tent-01-2.svg",
                title: "Sleep out",
                desc: "A night sleeping out under the stars (if you choose to!).",
              },
              {
                img: "/images/icons/icon-zebra-01.svg",
                title: "Unique Wildlife",
                desc: "Grevy Zebra, Vulturine Guinea Fowl, Rectaculated Giraffe",
              },
              {
                img: "/images/icons/icon-horse-ride-01.svg",
                title: "Bespoke Safaris",
                desc: "Camel, horseback and mountain bike safaris",
              },
              {
                img: "/images/icons/icon-crater.svg",
                title: "Ngorongoro Crater",
                desc: "The largest intact caldera in the world and a UNESCO World Heritage Site",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center max-w-[200px] w-full mx-auto"
              >
                <Image src={item.img} alt="icon" width={100} height={100} />
                <h1 className="text-black text-xl md:text-2xl">{item.title}</h1>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <hr className="border-1 border-[#B4A269] my-4 w-20 mx-auto" />
          <p className="text-center text-gray-500 text-sm leading-6">
            Our carefully curated flying safari will deliver the deepest, most
            engrossing East Africa immersion. We’ve thought of everything:
            luxurious lodges, executive planes, smooth transfers, the most
            incredible locations – every last detail covered, so all you have to
            do is relax into your trip of a lifetime..
          </p>
        </div>
      </motion.section>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
