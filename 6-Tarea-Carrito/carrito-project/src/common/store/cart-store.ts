import { create } from "zustand";
import type { Product } from "../types";

interface CartStore {
  cart: Product[];
  addProductToCart: (value: Product) => void;
  removeProductFromCart: (id: number) => void;
  decreaseProductQuantity: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addProductToCart: (newProduct) =>
    set((state) => ({ cart: [...state.cart, newProduct] })),
  removeProductFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  decreaseProductQuantity: (id) =>
    set((state) => {
      const indexToRemove = state.cart.findIndex((item) => item.id === id);
      if (indexToRemove === -1) return { cart: state.cart };
      const newCart = [...state.cart];
      newCart.splice(indexToRemove, 1);
      return { cart: newCart };
    }),
}));
