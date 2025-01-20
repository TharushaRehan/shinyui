import { MainNavItem, SidebarNavItem } from "@/types";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs",
    },
    {
      title: "Templates",
      href: "/templates",
      comingSoon: true,
      disabled: true,
      paid: true,
    },
    {
      title: "Pricing",
      href: "/pricing",
      //comingSoon: true,
      disabled: true,
    },
  ],

  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Marquee",
          href: "/docs/components/marquee",
          items: [],
          addedDate: new Date("2024-09-18"),
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Number Ticker",
          href: "/docs/components/number-ticker",
          items: [],
          addedDate: new Date("2024-09-01"),
        },
        {
          title: "Word Fade In",
          href: `/docs/components/word-fade-in`,
          items: [],
        },
        {
          title: "Typing Text",
          href: `/docs/components/typing-text`,
          items: [],
          addedDate: new Date("2024-09-18"),
        },
      ],
    },
  ],
};
