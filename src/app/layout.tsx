import type { Metadata } from "next";
import "./global.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/cart-drawer";

const baseUrl = "https://fasyabrownies.com"; // TODO: Ganti dengan domain asli saat sudah punya

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Fasya Brownies | Brownies Panggang Premium",
    template: "%s | Fasya Brownies",
  },
  description: "Brownies panggang premium dengan cita rasa cokelat yang kaya, dipanggang fresh setiap hari, dan menggunakan bahan berkualitas tanpa pemanis buatan.",
  keywords: ["brownies panggang", "brownies premium", "hampers", "oleh oleh jakarta", "fudgy brownies", "brownies enak"],
  authors: [{ name: "Fasya Brownies" }],
  creator: "Fasya Brownies",
  publisher: "Fasya Brownies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    title: "Fasya Brownies | Brownies Panggang Premium",
    description: "Nikmati sensasi fudgy brownies premium yang dipanggang setiap hari. Cocok untuk hampers dan camilan keluarga.",
    siteName: "Fasya Brownies",
    images: [
      {
        url: "/images/brownie-classic.png", // Akan diambil dari public folder
        width: 1200,
        height: 630,
        alt: "Fasya Brownies Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasya Brownies | Premium Fudgy Brownies",
    description: "Brownies panggang premium yang fudgy dan crusty. Pesan sekarang untuk pengiriman hari ini!",
    images: ["/images/brownie-classic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans text-brand-text-primary bg-brand-background">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
