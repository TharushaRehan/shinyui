"use client";

import { ReviewCard } from "@/registry/components/example/marquee-demo";
import FloatingCursor from "@/registry/components/shinyui/floating-cursor";
import Marquee from "@/registry/components/shinyui/marquee";
import React from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const FeaturedComponents = () => {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center bg-gradient-to-r from-neutral-200/0 via-muted dark:via-neutral-100/5 to-neutral-200/0">
        <div className="inline-block border rounded-lg px-5 py-2 tracking-wide">
          Featured Components
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Discover Our UI Components
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore our collection of beautifully designed, customizable, and
          accessible UI components to enhance your web applications.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Marquee */}
        <div className="border rounded-lg p-5">
          <div className="relative flex h-[500px] justify-center gap-x-5">
            <Marquee vertical>
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee vertical reverse className="hidden md:flex">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:grid-rows-2 gap-5">
          {/* Floating Cursors */}
          <div className="border rounded-lg p-5 flex justify-center gap-x-20 h-[300px] lg:h-full">
            <div className="mt-10">
              <FloatingCursor text="Tharusha" className="" />
            </div>
            <div className="mt-32">
              <FloatingCursor
                text="Rehan"
                className="bg-teal-500 border-teal-400"
                cursorColor="#14b8a6"
                translateX={["0", "-30px", "0px", "-30px", "0"]}
              />
            </div>
            <div className="mt-32 hidden md:block">
              <FloatingCursor
                text="Perera"
                className="bg-purple-500 border-purple-400"
                cursorColor="#a855f7"
                translateX={["0", "10px", "0px", "10px", "0"]}
                translateY={["0", "-20px", "-30px", "-20px", "0"]}
              />
            </div>
          </div>
          <div className="border rounded-lg p-5"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedComponents;
