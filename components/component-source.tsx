"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

export function ComponentSource({
  children,
  className,
  ...props
}: ComponentSourceProps) {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("my-6 overflow-hidden rounded-md", className)}
      {...props}
    >
      {children}
    </CodeBlockWrapper>
  );
}

// import React from "react";
// import { CodeWrapper } from "./code-wrapper";
// import { getComponentSource } from "@/lib/component-source";
// import { CodeBlockCollapsible } from "./collapsible-wrapper";
// import { cn } from "@/lib/utils";

// export const ComponentSource = ({
//   name,
//   className,
// }: {
//   name: string | string[];
//   className?: string;
// }) => {
//   let code: { title: string; code: string }[] = [];

//   if (typeof name === "string") {
//     code = getComponentSource(name);
//   }

//   if (Array.isArray(name)) {
//     code = name.flatMap((n) => getComponentSource(n));
//   }

//   if (code.length === 0) {
//     return <p>Source code not found</p>;
//   }

//   return (
//     <CodeBlockCollapsible className={cn(className, "my-4")}>
//       <CodeWrapper
//         files={code.map((file) => ({
//           fileName: file.title,
//           code: file.code,
//           lang: "tsx",
//         }))}
//       />
//     </CodeBlockCollapsible>
//   );
// };
