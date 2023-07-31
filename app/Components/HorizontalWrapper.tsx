"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  direction?: number;
  height?: string;
}

const HorizontalWrapper = ({
  children,
  direction,
  height,
}: HorizontalWrapperProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          width: "100%",
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;
