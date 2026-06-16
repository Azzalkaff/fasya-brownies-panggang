"use client"
import * as React from "react"
import { CartItem } from "@/types/cart"
import { Product, ProductVariant } from "@/types/product"

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
}

interface CartContextType extends CartState {
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleDrawer: () => void;
  setDrawerOpen: (isOpen: boolean) => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Load from localStorage on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("fasya_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to parse cart from local storage", e);
    }
  }, []);

  // Save to localStorage on change
  React.useEffect(() => {
    localStorage.setItem("fasya_cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.variant.id === variant.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === existingItem.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        id: `${product.id}-${variant.id}`,
        product,
        variant,
        quantity
      }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
  };

  const clearCart = () => setItems([]);
  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const setDrawerOpen = (isOpen: boolean) => setIsDrawerOpen(isOpen);

  const cartTotal = items.reduce((total, item) => total + (item.variant.price * item.quantity), 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isDrawerOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleDrawer,
      setDrawerOpen,
      cartTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
