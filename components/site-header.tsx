"use client";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ExternalLink } from "lucide-react";
import { docsConfig } from "@/config/docs";
import { useRouter } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { Badge } from "./ui/badge";
import posthog from "posthog-js";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import SearchCommand from "./search-command";

const SiteHeader = () => {
  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <MobileNav />
            <Link
              href="/"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Icons.logo className="size-12" />
              <span className="hidden font-bold md:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <nav className="hidden lg:flex">
            {docsConfig.mainNav.map((item) => {
              return item.href && !item.disabled ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "font-medium hover:no-underline hover:text-muted-foreground transition-all duration-300"
                  )}
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
                    buttonVariants({ variant: "link" }),
                    "font-medium cursor-not-allowed opacity-60 hover:no-underline"
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
          </nav>
        </div>
        <div className="flex items-center">
          <SearchCommand />
          <Link
            href={"https://github.com/TharushaRehan/shinyui"}
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Icons.gitHub className="size-4" />
          </Link>
          {/* <Link
            href={""}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Icons.discord className="size-4" />
          </Link> */}
          <ModeToggle />
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-300/20 to-neutral-200/0" />
    </header>
  );
};

export default SiteHeader;

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
