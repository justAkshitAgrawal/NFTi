"use client";

import React, { useRef } from "react";
import hover3d from "../utils/hover";
import Image from "next/image";

const ZoomSection = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-[#424242]"
      ref={hero}
    >
      <div className="h-[50rem] w-[100%]">
        <Image
          src="/images/spiral.svg"
          alt="Spiral"
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
        "
          style={{
            objectFit: "cover",
            objectPosition: "center",
            scale: 1.2,
            background: "#111111",
            transform: hover.transform,
            transition: hover.transition,
          }}
        />

        <Image
          src="/images/arm2.jpg"
          alt="bulb tree"
          className="absolute top-[10%] right-24"
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src="/images/arm.jpg"
          alt="bulb tree"
          className="absolute top-[10%] left-24"
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </div>
  );
};

export default ZoomSection;
