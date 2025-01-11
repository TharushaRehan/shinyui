import { PricingCard } from "@/types";

export const pricingOptions: PricingCard[] = [
  {
    title: "Existing Components",
    description: "For personal projects and learning",
    price: "Free",
    priceCondition: "",
    features: ["A growing library", "React / Next.js / Tailwind CSS code"],
    button: "Browse Components",
    href: "/docs",
    buttonVariant: "outline",
  },
  {
    title: "Custom Components",
    description:
      "Standalone components tailored to fit seamlessly into your project.",
    price: "899",
    priceCondition: "per month",
    conditionPosition: "after",
    features: [
      "React / Next.js / Tailwind CSS code",
      "Documentation",
      "Design + Development",
      "Pause or cancel anytime",
    ],
    button: "Buy Now",
    href: "",
  },
  {
    title: "Web Pages",
    description:
      "Professionally designed web pages optimized for performance, aesthetics, and responsiveness.",
    price: "1899",
    priceCondition: "per month",
    conditionPosition: "after",
    features: [
      "One request / page at a time",
      "React / Next.js / Tailwind CSS code",
      "Documentation",
      "Design + Development",
      "Search Engine Optimization",
      "Pause or cancel anytime",
    ],
    button: "Buy Now",
    href: "",
    highlight: true,
  },
  {
    title: "Web Applications",
    description:
      "Fully-fledged web applications built from the ground up, with scalable architecture.",
    price: "3500",
    priceCondition: "starts at",
    conditionPosition: "before",
    features: [
      "Web Apps & SaaS Development",
      "Documentation",
      "Design + Development",
    ],
    button: "Contact Us",
    buttonClassName: "bg-blue-500 dark:text-white hover:bg-blue-100",
    href: "contact",
  },
];
