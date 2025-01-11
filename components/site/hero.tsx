"use client";

import { RocketIcon } from "@radix-ui/react-icons";
import { BoltIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SiTypescript, SiTailwindcss, SiReact } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion, useInView } from "framer-motion";

export const technologies = [
  {
    name: "React",
    icon: <SiReact size={30} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion size={30} />,
  },
];

const MotionBoltIcon = motion(BoltIcon);
const MotionLink = motion(Link);

const Hero = () => {
  const iconRef = useRef(null);
  const iconIsView = useInView(iconRef);

  return (
    <section className="w-full flex flex-col h-[calc(100vh-100px)] items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          <div className="flex items-center justify-center gap-5">
            <MotionBoltIcon
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              Beautifully Designed Components
            </motion.span>
            <MotionBoltIcon
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
            />
          </div>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="max-w-[700px] text-muted-foreground text-lg md:text-xl"
        >
          Elevate your web applications with our meticulously crafted UI
          components. Designed for performance, accessibility, and
          customization.
        </motion.p>
        <div className="flex w-full flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            href="/docs"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className={cn(
              buttonVariants({ variant: "default" }),
              "group relative w-full sm:w-fit"
            )}
            prefetch={false}
          >
            Explore Components
            <RocketIcon className="w-4 h-4 ml-2 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </MotionLink>
          <MotionLink
            href="/docs"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group relative w-full sm:w-fit"
            )}
            prefetch={false}
          >
            Get Started
            <ChevronRight className="w-4 h-4 ml-2 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </MotionLink>
        </div>
        <div className="flex gap-x-8">
          {technologies.map(({ name, icon }) => (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger>{icon}</TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
