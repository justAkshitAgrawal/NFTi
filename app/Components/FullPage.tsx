"use client";

import Image from "next/image";
import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const FullPage = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          scale: scale,
          translateX: xTransform,
        }}
        className="h-[1000px] relative rounded-2xl border border-[#424242] transition-all w-[90%]"
      >
        <Image
          src="/images/rover.jpg"
          alt="Rover"
          fill={true}
          className="object-cover object-center p-6 hover:border hover:border-[#f2994a] rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default FullPage;
