export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  image?: string;
  hoverImage?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  baseImage: string;
  hoverImage?: string;
  isPopular?: boolean;
  variants: ProductVariant[];
}
