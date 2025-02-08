"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";

interface FloatingCursorProps {
  text: string;
  cursorColor?: string;
  translateX?: string[];
  translateY?: string[];
  className?: string;
}

const FloatingCursor: React.FC<FloatingCursorProps> = ({
  text,
  cursorColor = "#0284c7",
  translateX = ["0", "30px", "0px", "30px", "0"],
  translateY = ["0", "20px", "30px", "20px", "0"],
  className,
}) => {
  return (
    <motion.div
      initial={{ translateX: "0", translateY: "0" }}
      animate={{
        translateX,
        translateY,
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className={"flex items-center gap-2"}
    >
      <MousePointer2 fill={cursorColor} color="none" />
      <div
        className={cn(
          "w-fit rounded-full px-2 bg-sky-600 border border-sky-400 text-white",
          className
        )}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default FloatingCursor;
