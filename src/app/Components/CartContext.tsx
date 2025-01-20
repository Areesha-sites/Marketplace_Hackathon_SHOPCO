import React, { createContext, useState, ReactNode, useEffect } from 'react';
interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  color: string;
  size: string;
}

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData | null>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: CartItem) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingProductIndex === -1) {
      setCartItems((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
