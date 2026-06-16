import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "Brownies Sekat Original",
    name: "Brownies Sekat Original",
    description: "Brownies panggang dengan tekstur fudgy di dalam dan crusty di luar, menggunakan 100% coklat premium.",
    baseImage: "/images/brownie-sekat-large.png",
    hoverImage: "/images/brownie-sekat-large-bitten.png",
    isPopular: true,
    variants: [
      { id: "v1-small", name: "Small", price: 30000, image: "/images/brownie-sekat-small.png", hoverImage: "/images/brownie-sekat-small-bitten.png" },
      { id: "v1-reg", name: "Reguler", price: 60000, image: "/images/brownie-sekat-medium.png", hoverImage: "/images/brownie-sekat-medium-bitten.png" },
      { id: "v1-lrg", name: "Large", price: 120000, image: "/images/brownie-sekat-large.png", hoverImage: "/images/brownie-sekat-large-bitten.png" },
    ],
  },
  {
    id: "Brownies Original",
    name: "Brownies Original",
    description: "Brownies original yang bikin nagih",
    baseImage: "/images/brownie-original.png",
    hoverImage: "/images/brownie-original-bitten.png",
    variants: [
      { id: "v5-reg", name: "Reguler", price: 55000 }
    ],
  },
  {
    id: "Brownies Cream Cheese",
    name: "Brownies Cream Cheese",
    description: "Paduan brownies dark chocolate dengan lapisan cream cheese yang lembut dan gurih.",
    baseImage: "/images/brownie-creamcheese.png",
    hoverImage: "/images/brownie-creamcheese-bitten.png", // Versi digigit
    variants: [
      { id: "v2-reg", name: "Reguler (20x10)", price: 75000 },
    ],
  },
  {
    id: "Bolu Ketan Hitam Lumer",
    name: "Bolu Ketan Hitam Lumer",
    description: "Kombinasi kaya rasa antara bolu ketan hitam dengan lapisan keju lumer yang lembut dan gurih.",
    baseImage: "/images/bolu-ketan-hitam-lumer-new.png",
    hoverImage: "", // Versi digigit
    variants: [
      { id: "v3-reg", name: "Reguler", price: 120000 },
    ],
  },
  {
    id: "Bolu Pisang",
    name: "Bolu Pisang",
    description: "Paduan bolu pisang dengan fla vanilla yang lembut dan gurih.",
    baseImage: "/images/bolu-pisang.png",
    hoverImage: "", // Versi digigit
    variants: [
      { id: "v4-reg", name: "Reguler", price: 50000 },
    ],
  },
  {
    id: "Bolu Marmer",
    name: "Bolu Marmer",
    description: "Paduan bolu marmer dengan fla vanilla yang lembut dan gurih.",
    baseImage: "/images/bolu-marmer.png",
    hoverImage: "", // Versi digigit
    variants: [
      { id: "v4-reg", name: "Reguler", price: 50000 },
    ],
  },
  {
    id: "Soes Vanilla",
    name: "Soes Vanilla 6 pcs",
    description: "Paduan soes dengan fla vanilla yang lembut dan gurih.",
    baseImage: "/images/soes-vanilla.png",
    hoverImage: "/images/soes-bitten.png", // Versi digigit
    variants: [
      { id: "v4-reg", name: "Reguler", price: 50000 },
    ],
  },
  {
    id: "Soes Coklat",
    name: "Soes Coklat 6 pcs",
    description: "Paduan soes dengan fla coklat yang lembut dan gurih.",
    baseImage: "/images/soes-coklat.png",
    hoverImage: "", // Versi digigit
    variants: [
      { id: "v5-reg", name: "Reguler", price: 50000 },
    ],
  },
];
