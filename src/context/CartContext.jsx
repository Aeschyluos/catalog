import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity <= 0) {
          return prev.filter((item) => item.product._id !== product._id); // remove
        }

        return prev.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      // If no existing item and quantity is positive, add it
      if (quantity > 0) {
        return [...prev, { product, quantity }];
      }

      return prev; // do nothing if trying to add negative of non-existing product
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product._id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
