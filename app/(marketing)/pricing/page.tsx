"use client";

import PricingCard from "@/components/site/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { docsConfig } from "@/config/docs";
import { pricingOptions } from "@/constants";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

const PricingPage = () => {
  const pathname = usePathname();

  console.log(pathname);

  docsConfig.mainNav.map((nav) => {
    if (nav.href === pathname && nav.disabled) {
      return notFound();
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              initial={{ y: -100 }}
              animate={{ y: "0" }}
              transition={{ ease: "linear", duration: 1.5 }}
            >
              Simple, transparent pricing
            </motion.h1>
            <motion.p
              initial={{ y: -100 }}
              animate={{ y: "0" }}
              transition={{ ease: "linear", duration: 1 }}
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Choose the perfect plan for your project. All plans include our
              core features, with additional features and support as you scale.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {pricingOptions.map((option) => (
            <PricingCard
              key={option.title}
              title={option.title}
              description={option.description}
              price={option.price}
              priceCondition={option.priceCondition}
              conditionPosition={option.conditionPosition}
              features={option.features}
              button={option.button}
              buttonClassName={option.buttonClassName}
              buttonVariant={option.buttonVariant}
              highlight={option.highlight}
              href={option.href}
            />
          ))}
        </motion.div>
        <div className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What's included in the Free plan?
                </AccordionTrigger>
                <AccordionContent>
                  The Free plan includes access to our core components, basic
                  documentation, and community support. It's perfect for
                  personal projects and learning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I upgrade or downgrade my plan at any time?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer a trial period for the Pro plan?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial for our Pro plan. You can
                  explore all the features without any commitment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What kind of support do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer different levels of support based on your plan. Free
                  users have access to community support, Pro users get priority
                  support, and Enterprise customers receive dedicated support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
