"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, MenuIcon, SidebarOpen } from "lucide-react";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { Badge } from "./ui/badge";
import posthog from "posthog-js";
import { hrtime } from "process";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <MenuIcon size={20} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center">
          <Icons.logo className="mr-2 size-12" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav.map((item) => {
              return item.href && !item.disabled ? (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  onClick={() => item.event && posthog.capture(item.event)}
                >
                  {item.title}
                  {item.external && <ExternalLink className="ml-2 size-4" />}
                </Link>
              ) : (
                <span
                  key={item.title}
                  className={cn(
                    "cursor-not-allowed opacity-60 hover:no-underline"
                  )}
                >
                  {item.title}
                  {item.comingSoon && (
                    <Badge
                      className="mx-1 font-medium text-[11px]"
                      variant={"comingSoon"}
                    >
                      Coming soon
                    </Badge>
                  )}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item.items?.map((item) =>
                  !item.disabled && item.href ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      //onOpenChange={setOpen}
                      onClick={() => item.event && posthog.capture(item.event)}
                      className={cn(
                        "text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-60"
                      )}
                    >
                      {item.title}
                      {item.label && (
                        <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                          {item.label}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className={cn(
                        "text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-60"
                      )}
                    >
                      {item.title}
                      {item.label && (
                        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                          {item.label}
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
