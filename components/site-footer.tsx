import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const SiteFooter = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="container">
      <section className="flex flex-col-reverse gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-0 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {currentDate} Shiny UI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex">
          <Link
            href="/docs"
            className={buttonVariants({ variant: "link" })}
            prefetch={false}
          >
            Documentation
          </Link>
          <Link
            href="#"
            className={buttonVariants({ variant: "link" })}
            prefetch={false}
          >
            GitHub
          </Link>
          <Link
            href="#"
            className={buttonVariants({ variant: "link" })}
            prefetch={false}
          >
            Twitter
          </Link>
          <Link
            href="#"
            className={buttonVariants({ variant: "link" })}
            prefetch={false}
          >
            LinkedIn
          </Link>
        </nav>
      </section>
    </footer>
  );
};

export default SiteFooter;
