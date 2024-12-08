"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

// Define the cart item type
export interface AddToCartItemPropsTypes {
  id: string;
  image: string;
  title: string;
  price: string;
  quantity: number;
  offer?: string;
  discount?: string;
  rating?: string;
  ratingNum?: number | string;
  isStock?: boolean;
  des?: string;
  product?: any;
}

// Define the context types
interface CartContextTypes {
  cartItems: AddToCartItemPropsTypes[];
  addItemToCart: (item: AddToCartItemPropsTypes) => void;
  deleteItemFromCart: (id: string) => void;
  clearCart: () => void;
}
interface CartProviderProps {
  children: ReactNode;
}

// Create the context
const CartContext = createContext<CartContextTypes | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<AddToCartItemPropsTypes[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCartItems(storedCart ? JSON.parse(storedCart) : []);
  }, []);
  // Add item to cart
  const addItemToCart = (item: AddToCartItemPropsTypes) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, item];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // Delete item from cart
  const deleteItemFromCart = (id: string) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear all cart items
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext