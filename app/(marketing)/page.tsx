import FeaturedComponents from "@/components/site/featured-components";
import Hero from "@/components/site/hero";
import Testimonials from "@/components/site/testimonials";
import React from "react";

const MarketingPage = () => {
  return (
    <>
      <Hero />
      <FeaturedComponents />
      <Testimonials />
    </>
  );
};

export default MarketingPage;
