import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sora" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

const description =
  "Stait AI helps small and growing businesses put AI to work: hands-on team training, a costed AI strategy, and custom AI tools built and launched. Based in Boise, serving clients nationwide.";

export const metadata: Metadata = {
  title: {
    default: "Stait AI — AI Training, Strategy & Implementation for Growing Businesses",
    template: "%s | Stait AI",
  },
  description,
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Stait AI",
    title: "Stait AI — Put AI to work in your business",
    description,
    images: [{ url: "/stait-logo.png", width: 1200, height: 630, alt: "Stait AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stait AI — Put AI to work in your business",
    description,
    images: ["/stait-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      name: site.legalName,
      alternateName: "Stait AI",
      url: site.url,
      email: site.email,
      description,
      founder: { "@type": "Person", name: "Matt Harris" },
      address: { "@type": "PostalAddress", addressLocality: "Boise", addressRegion: "ID", addressCountry: "US" },
      areaServed: "US",
    },
    ...packages.map((p) => ({
      "@type": "Service",
      name: p.name,
      url: `${site.url}/services/${p.slug}`,
      provider: { "@type": "Organization", name: site.legalName },
      description: p.summary,
      offers: { "@type": "Offer", price: p.priceValue, priceCurrency: "USD" },
    })),
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3CK0QWQP2V" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3CK0QWQP2V');
          `}
        </Script>
      </body>
    </html>
  );
}
