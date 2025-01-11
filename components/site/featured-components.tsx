import React from "react";

const FeaturedComponents = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center space-y-4 text-center py py-12 md:py-16 lg:py-20 bg-gradient-to-r from-neutral-200/0 via-muted dark:via-neutral-100/5 to-neutral-200/0">
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
    </section>
  );
};

export default FeaturedComponents;
