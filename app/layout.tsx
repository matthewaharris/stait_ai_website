import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "stait.ai",
    template: "%s | stait.ai",
  },
  description:
    "AI strategy, implementation, AI Ops, and governance for growing businesses. Based in Boise, Idaho.",
  metadataBase: new URL("https://www.stait.ai"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
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
