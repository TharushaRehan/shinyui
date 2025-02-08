"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 20,
  ...props
}) => {
  const direction = reverse ? "-100%" : "100%";
  const axis = vertical ? "translateY" : "translateX";

  return (
    <div
      className={cn("flex overflow-hidden", {
        "flex-row": !vertical,
        "flex-col": vertical,
      })}
      {...props}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            initial={{ [axis]: 0 }}
            animate={{ [axis]: direction }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
            }}
            className={cn(
              "flex flex-shrink-0",
              {
                "flex-row space-x-4 pr-4": !vertical,
                "flex-col space-y-4 pb-4": vertical,
              },
              className
            )}
          >
            {children}
          </motion.div>
        ))}
    </div>
  );
};

export default Marquee;
