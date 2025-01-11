import { Icons } from "@/components/icons";
import { ButtonProps } from "@/components/ui/button";

export interface NavItem {
  title: string;
  addedDate?: Date;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  paid?: boolean;
  event?: string;
  label?: string;
  comingSoon?: boolean;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

type TocEntry = {
  /**
   * Title of the entry
   */
  title: string;
  /**
   * URL that can be used to reach
   * the content
   */
  url: string;
  /**
   * Nested items
   */
  items: TocEntry[];
};

/**
 * Tree for table of contents
 */
type TocTree = {
  /**
   *  Index of the node right after the table of contents heading, `-1` if no
   *  heading was found, `undefined` if no `heading` was given.
   */
  index?: number;
  /**
   *  Index of the first node after `heading` that is not part of its section,
   *  `-1` if no heading was found, `undefined` if no `heading` was given, same
   *  as `index` if there are no nodes between `heading` and the first heading
   *  in the table of contents.
   */
  endIndex?: number;
  /**
   *  List representing the generated table of contents, `undefined` if no table
   *  of contents could be created, either because no heading was found or
   *  because no following headings were found.
   */
  map?: List;
};

export interface PricingCard {
  title: string;
  description?: string;
  price: string; // per month
  priceCondition?: string;
  conditionPosition?: "before" | "after";
  features: string[];
  button: string;
  href: string;
  buttonVariant?: "default" | "outline";
  buttonClassName?: string;
  highlight?: boolean;
}
