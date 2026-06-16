import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasyabrownies.com"; // Placeholder

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Jika ada halaman tambahan (Tentang, Produk), tambahkan di sini nanti
  ];
}
