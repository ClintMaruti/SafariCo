"use client";
import { ImageTextSection } from "./ImageTextSection";

const sections = [
  {
    title: "We Care About Conservation",
    content:
      "Our support of Land & Life Foundation is our commitment to responsible tourism, ensuring future generations can enjoy the wonders of Africa and safari adventure. Land & Life believes that the sustainability of East Africa’s wildlife and habitats depends on four key actions: securing land for conservation, protecting species and their environment, providing tangible benefits to the people who live alongside wildlife, and educating the next generation of conservationists.",
    image: "/images/Guiding-SunriseBushWalk.jpg",
    reverse: false,
  },
  {
    title: "We believe tourism can be a force for good",
    content: "When you come to Africa with us, we’ll give back to Africa.",
    image: "/images/explore.jpg",
    reverse: true,
  },
  {
    title: "Supporting Land & Life",
    content:
      "For every SkySafari guest, we make a contribution to Land & Life, a foundation committed to ensuring local communities receive tangible benefits from tourism. The money raised is ploughed into a range of targeted education programmes, community outreach initiatives and conservation projects in key wildlife conservation areas around Kenya and Tanzania, including the Masai Mara, Amboseli, the Serengeti and Ngorongoro – all areas that our SkySafaris visit. As Land & Life’s administration costs are covered by partners, 100% of every donation received goes directly to its operations on the ground, where it’s needed most.",
    image: "/images/Game-Drive-Vehicle.jpg",
    reverse: false,
  },
];

export const ConservationSection = () => {
  return (
    <>
      {sections.map((obj) => (
        <ImageTextSection
          key={obj.image}
          imageSrc={obj.image}
          altText="Section Image"
          title={obj.title}
          description={obj.content}
          reverse={obj.reverse}
        />
      ))}
    </>
  );
};
