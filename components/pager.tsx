import Link from "next/link";
import { Doc } from "@/.contentlayer/generated";
import { NavItem, NavItemWithChildren } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface DocsPagerProps {
  doc: Doc;
}

export function DocPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);
  //console.log("Pager:", pager);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href ? (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "outline" }), "group h-full")}
        >
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground flex items-center mb-1.5">
              <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-all duration-300 ease-out" />
              Previous
            </div>
            {pager.prev.title}
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "group h-full")}
        >
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground flex items-center mb-1.5">
              Next
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-all duration-300 ease-out" />
            </div>
            {pager.next.title}
          </div>
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
