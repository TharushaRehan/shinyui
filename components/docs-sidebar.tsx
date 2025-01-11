"use client";

import { cn, isNew } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <ul className="w-full pb-20">
      {items.map((item, index) => (
        <li key={index} className={cn("pb-4 h-fit")}>
          <h4 className="mb-1 rounded-md py-1 text-base font-medium text-foreground">
            {item.title}
          </h4>
          {item.items && (
            <DocsSidebarNavItems
              items={item.items}
              pathname={pathname}
              ignore={index === 0 && true}
            />
          )}
        </li>
      ))}
    </ul>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
  ignore: boolean;
}

export function DocsSidebarNavItems({
  items,
  pathname,
  ignore,
}: DocsSidebarNavItemsProps) {
  return items.length ? (
    <ul
      role="list"
      className="grid grid-flow-row auto-rows-max text-sm border-1 border-zinc-200 dark:border-zinc-800 space-y-1"
    >
      {items.map((item, index) => {
        const isItemNew = isNew(item.addedDate);
        return item.href && !item.disabled ? (
          <li key={item.title}>
            <Link
              href={item.href || "#"}
              className={cn(
                "relative group flex w-full items-center rounded-md border pl-4 border-transparent no-underline font-medium text-sm/6 space-x-4",
                pathname === item.href
                  ? "text-foreground before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:before:bg-white"
                  : "text-muted-foreground"
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              <span className="shrink-0 hover:text-zinc-950 dark:hover:text-zinc-100 hover:ml-1 transition-all duration-200 ease-in-out">
                {item.title}
              </span>
              {!ignore && isItemNew && (
                <Badge className="mx-1 font-bold" variant={"new"}>
                  New
                </Badge>
              )}
              {item.paid && (
                <Badge className="mx-1 font-bold" variant={"paid"}>
                  Paid
                </Badge>
              )}
            </Link>
          </li>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline ml-2",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {/* {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )} */}
            {!ignore && isItemNew && (
              <Badge className="mx-1 font-bold" variant={"new"}>
                New
              </Badge>
            )}
            {item.paid && (
              <Badge className="mx-1 font-bold" variant={"paid"}>
                Paid
              </Badge>
            )}
          </span>
        );
      })}
    </ul>
  ) : null;
}
