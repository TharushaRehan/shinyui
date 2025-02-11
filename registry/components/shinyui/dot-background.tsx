import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface DotBackgroundProps {
  color?: string;
  darkColor?: string;
  size?: number;
  spacing?: number;
  children?: React.ReactNode;
  className?: string;
}

const DotBackground: React.FC<DotBackgroundProps> = ({
  color = "#ce2727",
  darkColor = "",
  size = 1,
  spacing,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-background",
        className
      )}
    >
      <div
        className={cn(
          `absolute inset-0 size-full`,
          `bg-[radial-gradient(${color}_${size}px,transparent_1px)] dark:bg-[radial-gradient(#ff2828_${size}px,transparent_1px)]`,
          "[background-size:10px_10px]"
        )}
      />
      {children}
    </div>
  );
};

export default DotBackground;
