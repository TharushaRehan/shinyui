"use client";

import { cn } from "@/lib/utils";
import { Codeblock } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
  codeBlocks: Codeblock[];
}

const CodeBlocksNavigation: React.FC<Props> = ({ className, codeBlocks }) => {
  const pathname = usePathname();

  return (
    <div className={cn("rounded-full border px-5 py-3", className)}>
      <div className="flex items-center gap-x-3">
        {codeBlocks.map((block, index) => {
          const path = pathname.split("/").pop();
          return (
            <Link
              key={index}
              href={block.pathname}
              className={cn(
                "text-sm px-2 py-1 rounded-full ",
                path === block.pathname
                  ? "bg-muted"
                  : "hover:bg-muted transition-all duration-300 opacity-50"
              )}
            >
              <span>{block.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CodeBlocksNavigation;
