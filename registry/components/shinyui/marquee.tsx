// src/components/Marquee.tsx
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical"; // Scrolling direction
  reverse?: boolean; // Reverse scrolling
  speed?: number; // Speed of the scrolling effect
  className?: string; // Additional CSS classes
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "vertical",
  reverse = false,
  speed = 10,
  className,
  ...props
}) => {
  const controls = useAnimation(); // Controls for starting and stopping animation
  const marqueeRef = useRef<HTMLDivElement>(null); // Ref to track the current position
  const isHorizontal = direction === "horizontal";
  const animationKey = isHorizontal ? "x" : "y";

  // Reverse the direction based on the reverse prop
  const startPos = reverse ? "-100%" : "100%";
  const endPos = reverse ? "100%" : "-100%";

  return (
    <div
      {...props}
      className={cn(
        `overflow-hidden`,
        {
          "flex-row": direction === "horizontal",
          "flex-col": direction === "vertical",
        },
        className
      )}
    >
      <motion.div
        ref={marqueeRef}
        className=""
        animate={controls}
        transition={{
          [animationKey]: {
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
