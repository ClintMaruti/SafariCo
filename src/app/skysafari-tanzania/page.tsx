"use client";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import Image from "next/image";
import { ContactUsSection } from "../components/ContactUsSection";
import { Footer } from "../components";

export default function SafariTanzania() {
  return (
    <main>
      <HeroSection
        title="SkySafari Tanzania"
        imageUrl="/images/SkySafari-Kenya-10Day.jpg"
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
            Tanzania is bowl you over country: big, bewitching and breathtaking
            at every turn.
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
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 top-0 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl text-white font-light">
              Tanzania 10-Day Safari
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
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/Loisaba-Sundowners.jpg"
            alt="Kenya"
            fill
            className="object-cover"
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
            className="text-4xl md:text-5xl tracking-wide leading-16 text-[#c6bfaf]"
          >
            We’ve planned our SkySafari Tanzania trip meticulously to maximise
            your immersion in the African bush (with plenty of lovely surprises
            along the way)..
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
                img: "/images/icons/icon-crater.svg",
                title: "Ngorongoro",
                desc: "See the largest intact caldera in the world and a UNESCO World Heritage Site.",
              },
              {
                img: "/images/icons/icon-treehouse.svg",
                title: "Treehouses",
                desc: "Spend two nights in sleeping in treehouses.",
              },
              {
                img: "/images/icons/icon-lion.svg",
                title: "Exotic Wildlife",
                desc: "From tree-climbing lions to the graceful giraffes browsing the treetops",
              },
              {
                img: "/images/icons/icon-flamingo.svg",
                title: "Soda Lakes",
                desc: "Visit the Soda Lakes and see vast flocks of flamingos",
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
            You’ll be treated like a VIP from start to finish: we’ll drive you
            directly onto runways, whisk you away in our private plane, you’ll
            enjoy a greater luggage allowance, and more space to relax… Then
            we’ll deliver you into the heart of the wilderness to be pampered at
            the finest camps and have your eyes opened by the very best guides.
          </p>
        </div>
      </motion.section>
      <ContactUsSection />
      <Footer />
    </main>
  );
}
