import CodeBlocksNavigation from "@/components/code-blocks-navigation";
import { Codeblock } from "@/types";

const blocks: Codeblock[] = [
  { title: "Hero-Section", pathname: "hero-section" },
  {
    title: "Testimonials",
    pathname: "testimonials",
  },
  {
    title: "Features",
    pathname: "features",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1 flex-col pt-5 pb-20">
      <CodeBlocksNavigation className="mb-10" codeBlocks={blocks} />
      {children}
    </div>
  );
}
