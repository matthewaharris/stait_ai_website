import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "stait.ai — AI Implementation for Growing Businesses",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stait.ai",
    siteName: "stait.ai",
    title: "stait.ai — AI Implementation for Growing Businesses",
    description:
      "AI strategy, implementation, AI Ops, and governance for growing businesses. Based in Boise, Idaho.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "stait.ai — AI Implementation for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "stait.ai — AI Implementation for Growing Businesses",
    description:
      "AI strategy, implementation, AI Ops, and governance for growing businesses. Based in Boise, Idaho.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "stait.ai",
      url: "https://www.stait.ai",
      email: "hello@stait.ai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boise",
        addressRegion: "ID",
        addressCountry: "US",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "stait.ai",
      url: "https://www.stait.ai",
      email: "hello@stait.ai",
      description:
        "AI strategy, implementation, AI Ops, and governance for growing businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boise",
        addressRegion: "ID",
        addressCountry: "US",
      },
    },
    {
      "@type": "Service",
      name: "AI Jumpstart",
      provider: { "@type": "Organization", name: "stait.ai" },
      description:
        "6–8 week engagement delivering a readiness assessment, ROI model, production-grade pilot, governance baseline, and 90-day roadmap.",
    },
    {
      "@type": "Service",
      name: "Company Knowledge AI",
      provider: { "@type": "Organization", name: "stait.ai" },
      description:
        "Secure RAG-based internal knowledge assistant with permissions, citations, and auditability.",
    },
    {
      "@type": "Service",
      name: "AI Ops Retainer",
      provider: { "@type": "Organization", name: "stait.ai" },
      description:
        "Ongoing monitoring, optimization, governance updates, and quarterly strategic planning for AI systems.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
