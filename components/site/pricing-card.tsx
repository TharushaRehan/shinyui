"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PricingCard as PricingCardProps } from "@/types";
import { Icons } from "../icons";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const PricingCard = ({
  title,
  description,
  price,
  priceCondition,
  conditionPosition,
  features,
  button,
  buttonVariant = "default",
  buttonClassName,
  highlight,
  href,
}: PricingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={itemVariants}>
      {/* {highlight && (
        <div className="absolute bg-primary rotate-45 text-white ">
          <div className="flex self-center">Popular</div>
        </div>
      )} */}
      <Card className={`${highlight && "shadow-xl"}`}>
        <CardHeader className="min-h-[150px]">
          <CardTitle className="text-lg tracking-wide">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[400px]">
          {price === "Free" && !priceCondition ? (
            <div className="text-4xl font-bold">{price}</div>
          ) : (
            <p className="text-4xl font-bold">
              {conditionPosition === "before" && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {priceCondition}{" "}
                </span>
              )}
              ${price}
              {conditionPosition === "after" && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  / {priceCondition}
                </span>
              )}
            </p>
          )}
          <ul className="mt-4 space-y-4 text-sm font-light">
            {features.map((item) => (
              <li className="flex items-center gap-x-2">
                <Icons.check />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link
            href={href}
            className={twMerge(
              buttonVariants({
                variant: buttonVariant,
                className: buttonClassName,
              }),
              `w-full`
            )}
          >
            {button}
            {/* <Button
            className={`${buttonClassName} w-full`}
            variant={buttonVariant}
          >
            {button}
          </Button>*/}{" "}
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
