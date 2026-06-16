import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandPromiseSection } from "@/components/sections/brand-promise-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LocationSection } from "@/components/sections/location-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

import { SITE_CONFIG } from "@/constants/site";
import { products } from "@/data/products";

export default function Home() {
  // Generate JSON-LD for AI Search & Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": SITE_CONFIG.name,
    "image": "https://fasyabrownies.com/images/brownie-classic.png", // Ganti base url nanti
    "@id": "https://fasyabrownies.com",
    "url": "https://fasyabrownies.com",
    "telephone": SITE_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address,
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2293847, // Contoh kordinat
      "longitude": 106.7456743
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "servesCuisine": "Brownies, Pastries, Desserts",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Menu Brownies",
      "itemListElement": products.flatMap((product) => 
        product.variants.map((variant) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": `${product.name} - ${variant.name}`,
            "description": product.description,
            "image": `https://fasyabrownies.com${variant.image || product.baseImage}`
          },
          "price": variant.price,
          "priceCurrency": "IDR"
        }))
      )
    }
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <BrandPromiseSection />
        <ProductsSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
