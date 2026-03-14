"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { CartItem, ProductSlug } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (slug: ProductSlug, quantity?: number) => void;
  updateItem: (slug: ProductSlug, quantity: number) => void;
  removeItem: (slug: ProductSlug) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "innovaherb-cart";

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      setItems(JSON.parse(raw));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem: (slug, quantity = 1) => {
        setItems((current) => {
          const existing = current.find((item) => item.slug === slug);
          if (existing) {
            return current.map((item) =>
              item.slug === slug
                ? { ...item, quantity: Math.min(12, item.quantity + quantity) }
                : item,
            );
          }
          return [...current, { slug, quantity }];
        });
      },
      updateItem: (slug, quantity) => {
        setItems((current) =>
          current
            .map((item) =>
              item.slug === slug ? { ...item, quantity: Math.max(0, quantity) } : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      removeItem: (slug) => {
        setItems((current) => current.filter((item) => item.slug !== slug));
      },
      clearCart: () => setItems([]),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
