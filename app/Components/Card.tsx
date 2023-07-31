"use client";

import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className=" relative bg-[#111111] h-[100%] p-6 rounded-lg border transition-all border-[#424242] hover:border-white cursor-pointer group">
      <div className="h-[100%] w-[100%]">
        <p className="absolute top-[3rem] right-[2.5rem] z-[5] bg-[#222260] text-white px-2 py-1 rounded-lg font-bold text-sm ">
          New
        </p>
        <div className="absolute bottom-12 left-10 z-[5]">
          <h3 className="inline-block text-2xl text-[#f2994a] bg-[#111111] px-4 py-1 rounded-full mb-2 border border-[#424242] ">
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <Image
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />{" "}
      </div>
      <div className="overlay group-hover:hidden"></div>
    </div>
  );
};

export default Card;
