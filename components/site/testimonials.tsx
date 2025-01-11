import React from "react";

const Testimonials = () => {
  return (
    <section className="container">
      <div className="py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-muted px-5 py-2 tracking-wide">
          Testimonials
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          What Our Users Say
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Hear from developers who have used our UI components to build amazing
          web applications.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
