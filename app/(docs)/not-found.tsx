"use client";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <Button onClick={() => router.back()}>
              <Icons.chevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Go back</span>
            </Button>
            <Link className={buttonVariants({ variant: "secondary" })} href="/">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
