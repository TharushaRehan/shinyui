import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

export function isNew(addedDate: Date | undefined): boolean {
  const currentDate: Date = new Date();
  if (!addedDate) return false;
  const addedDateTimestamp = addedDate.getTime();
  const currentDateTimestamp = currentDate.getTime();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000 * 20;

  // Check if the added date is within the last 20 days
  return currentDateTimestamp - addedDateTimestamp < oneDayInMilliseconds;
}
