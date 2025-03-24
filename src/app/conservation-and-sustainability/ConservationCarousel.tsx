"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "We Care About Conservation",
    content:
      "Our support of Land & Life Foundation is our commitment to responsible tourism, ensuring future generations can enjoy the wonders of Africa and safari adventure. Land & Life believes that the sustainability of East Africa’s wildlife and habitats depends on four key actions: securing land for conservation, protecting species and their environment, providing tangible benefits to the people who live alongside wildlife, and educating the next generation of conservationists.",
    image: "/images/accommodation-01.jpg",
    locations: "MULTIPLE LOCATIONS",
    memberExclusive: false,
  },
  {
    title: "We believe tourism can be a force for good",
    content: "When you come to Africa with us, we’ll give back to Africa.",
    image: "/images/accommodation-01.jpg",
    locations: "MULTIPLE LOCATIONS",
    memberExclusive: false,
  },
  {
    title: "Supporting Land & Life",
    content:
      "For every SkySafari guest, we make a contribution to Land & Life, a foundation committed to ensuring local communities receive tangible benefits from tourism. The money raised is ploughed into a range of targeted education programmes, community outreach initiatives and conservation projects in key wildlife conservation areas around Kenya and Tanzania, including the Masai Mara, Amboseli, the Serengeti and Ngorongoro – all areas that our SkySafaris visit. As Land & Life’s administration costs are covered by partners, 100% of every donation received goes directly to its operations on the ground, where it’s needed most.",
    image: "/images/accommodation-01.jpg",
    locations: "MULTIPLE LOCATIONS",
    memberExclusive: false,
  },
];

export const ConservationCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl font-bold">Conservation and Sustainability</h2>
        <p className="text-gray-500 text-sm">
          Conservation and sustainability are at the heart of everything we do.
        </p>
      </div>

      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="my-6 max-w-fit mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card
              image={slide.image}
              title={slide.title}
              content={slide.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-end">
        <Button variant="link">View More →</Button>
      </div>
    </div>
  );
};
