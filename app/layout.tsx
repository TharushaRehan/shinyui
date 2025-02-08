import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { PHProvider } from "@/components/posthog-provider";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shiny UI",
  description: "Modern UI components for Developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
