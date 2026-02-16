import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "stait.ai — Practical AI. Measurable results.",
  description:
    "AI strategy, implementation, AI Ops, and governance for growing businesses. Based in Boise, Idaho.",
  metadataBase: new URL("https://stait.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
