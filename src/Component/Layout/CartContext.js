import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Using an array to store cart items

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = [...cart];
    const existingItemIndex = cartData.findIndex(item => item.id === itemId && item.size === size);

    if (existingItemIndex !== -1) {
      // If item exists in cart, increase quantity
      cartData[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      cartData.push({ id: itemId, size, quantity: 1 });
    }

    setCart(cartData);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0); // Total quantity of all items
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
