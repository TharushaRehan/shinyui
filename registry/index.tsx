import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  "number-ticker": {
    name: "number-ticker",
    type: "components:shinyui",
    files: ["registry/components/shinyui/number-ticker.tsx"],
  },
  "word-fade-in": {
    name: "word-fade-in",
    type: "components:shinyui",
    files: ["registry/components/shinyui/word-fade-in.tsx"],
  },
  "typing-text": {
    name: "typing-text",
    type: "components:shinyui",
    files: ["registry/components/shinyui/typing-text.tsx"],
  },
  marquee: {
    name: "marquee",
    type: "components:shinyui",
    files: ["registry/components/shinyui/marquee.tsx"],
  },
  "floating-cursor": {
    name: "floating-cursor",
    type: "components:shinyui",
    files: ["registry/components/shinyui/floating-cursor.tsx"],
  },
};

const example: Registry = {
  "number-ticker-demo": {
    name: "number-ticker-demo",
    type: "components:example",
    files: ["registry/components/example/number-ticker-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/number-ticker-demo")
    ),
  },
  "word-fade-in-demo": {
    name: "word-fade-in-demo",
    type: "components:example",
    files: ["registry/components/example/word-fade-in-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/word-fade-in-demo")
    ),
  },
  "typing-text-demo": {
    name: "typing-text-demo",
    type: "components:example",
    files: ["registry/components/example/typing-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/typing-text-demo")
    ),
  },
  "marquee-demo": {
    name: "marquee-demo",
    type: "components:example",
    files: ["registry/components/example/marquee-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/marquee-demo")
    ),
  },
  "marquee-vertical-demo": {
    name: "marquee-vertical-demo",
    type: "components:example",
    files: ["registry/components/example/marquee-vertical-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/marquee-vertical-demo")
    ),
  },
  "floating-cursor-demo": {
    name: "floating-cursor-demo",
    type: "components:example",
    files: ["registry/components/example/floating-cursor-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/floating-cursor-demo")
    ),
  },
};

export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {}
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
