import { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string; // unique identifier (productId + variantId)
  product: Product;
  variant: ProductVariant;
  quantity: number;
}
