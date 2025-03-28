import Image from "next/image";
import { motion } from "framer-motion";

interface ImageTextSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  altText,
  title,
  description,
  reverse = false,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`relative w-full flex flex-col md:flex-row items-center container max-w-6xl mx-auto my-6 overflow-hidden 
        ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 relative h-auto aspect-[1/1]">
        <Image src={imageSrc} alt={altText} fill className="object-cover" />
      </div>

      {/* Text Section (Overlapping) */}
      <div
        className={`relative md:absolute ${
          reverse ? "md:right-0 md:mr-60" : "md:right-0 md:ml-60"
        } 
        bg-white p-6 md:p-8 flex flex-col gap-4 justify-center text-black shadow-lg`}
      >
        <h2 className="text-4xl font-normal font-baskerville">{title}</h2>
        <p className="text-gray-500 text-sm leading-7">{description}</p>
      </div>
    </motion.section>
  );
};
