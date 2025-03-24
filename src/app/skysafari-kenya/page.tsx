"use client";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import Image from "next/image";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components";

export default function SafariKenya() {
  return (
    <main>
      <HeroSection title="SkySafari Kenya" imageUrl="/images/keyna-lions.jpg" />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-16 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/Contours.png')" }}
      >
        {/* Subtle Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 transition-all duration-500 hover:bg-black/60"></div> */}

        {/* Content */}
        <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl tracking-wide leading-16 text-[#c6bfaf]"
          >
            Kenya is the Africa of your imagination. Planet earth on an epic
            scale. A place that fills your nostrils, kisses your skin, tingles
            your spine.
          </motion.h2>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/Activities-SunriseDrive-Kilimanjaro.jpg"
            alt="cover image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 top-0 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl text-white font-light">
              Kenya 10-Day Safari
            </h1>
            <hr className="w-4 border-white" />
            <p className="text-sm font-normal tracking-wider text-white">
              Nairobi &gt; Amboseli &gt; Laikipia &gt; Masai Mara
            </p>
            <button className="bg-transparent border-1 border-white rounded-full tracking-widest px-4 py-2 text-white text-sm hover:bg-white/50 hover:text-black transition-all duration-300 cursor-pointer">
              EXPLORE
            </button>
          </div>
        </div>
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
              Kenya 8-Day Safari
            </h1>
            <hr className="w-4 border-white" />
            <p className="text-sm font-normal tracking-wider text-white">
              Nairobi &gt; Meru &gt; Loisaba &gt; Masai Mara
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
        {/* Subtle Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 transition-all duration-500 hover:bg-black/60"></div> */}

        {/* Content */}
        <div className="relative text-center text-white max-w-5xl px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl tracking-wide leading-16 text-[#c6bfaf]"
          >
            The warm, dry-grass smell of the heat-hazed savannah, a lion’s roar
            rumbling through the star-streaked night, mighty peaks piercing
            gigantic skies, near-endless bush teeming with life.
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
                desc: "A night sleeping out under the stars (if you choose to!)",
              },
              {
                img: "/images/icons/icon-zebra-01.svg",
                title: "Unique Wildlife",
                desc: "Grevy zebra, wild dogs, lesser kudu, gerenuk, reticulated giraffe",
              },
              {
                img: "/images/icons/icon-horse-ride-01.svg",
                title: "Bespoke Safaris",
                desc: "Camel, horseback and guided bush walks safaris",
              },
              {
                img: "/images/icons/icon-binoculars-01.svg",
                title: "Tracker dogs",
                desc: "Opportunity to see tracker dogs in action in Loisaba Conservancy",
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
            And we’ll deliver you directly into this soul-stirring wilderness,
            not a minute wasted. Touch down in sight of snow-capped Kilimanjaro
            to wonder at Amboseli’s huge elephant herds roaming in the
            mountain’s shadow. Take off for Loisaba, where cutting- edge
            conservation helps preserve landscapes as dramatic as they are
            biodiverse. Fly right to the matchless Masai Mara for arguably the
            finest game-viewing in the world.
          </p>
        </div>
      </motion.section>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
