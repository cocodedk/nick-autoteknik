import type { Metadata } from "next";
import "./globals.css";
import contentData from "@/data/content.da.json";

const { business } = contentData;

export const metadata: Metadata = {
  title: "Nick Autoteknik - Autoværksted i Rødovre",
  description: `Professionel bilservice og reparation af alle bilmærker i Rødovre. Service, bremser, dæk, diagnose, AC og synsklargøring. Kontakt os på ${business.phone}.`,
  keywords: [
    "autoværksted",
    "bilservice",
    "Rødovre",
    "bilreparation",
    "service",
    "bremser",
    "dæk",
    "diagnose",
  ],
  authors: [{ name: "Nick Autoteknik" }],
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://nickautoteknik.dk",
    siteName: "Nick Autoteknik",
    title: "Nick Autoteknik - Autoværksted i Rødovre",
    description: "Professionel bilservice og reparation af alle bilmærker",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Autoteknik - Autoværksted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Autoteknik - Autoværksted i Rødovre",
    description: "Professionel bilservice og reparation af alle bilmærker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://nickautoteknik.dk",
    name: business.name,
    description: "Autoværksted - service og reparation af alle bilmærker",
    url: "https://nickautoteknik.dk",
    telephone: business.phoneFormatted,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      postalCode: business.postalCode,
      addressCountry: "DK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.6804,
      longitude: 12.4532,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

