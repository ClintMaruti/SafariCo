import React from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-[1080px] h-[540px] object-cover"
      />
      <div className="absolute rounded-lg top-0 bg-black/80 p-4 text-white w-full h-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-normal text-center">{title}</h1>
        <p className="text-sm text-center leading-10">{content}</p>
      </div>
    </div>
  );
};
