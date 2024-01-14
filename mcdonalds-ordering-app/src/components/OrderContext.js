// OrderContext.js

import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orderType, setOrderType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cartItems, setCartItems] = useState([]);

  const handleOrderTypeChange = (type) => {
    setOrderType(type);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    // Remove the item from the cart if its quantity becomes less than or equal to 0
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCartItems(filteredCart)
  }
 

  const contextValues = {
    orderType,
    paymentMethod,
    cartItems,
    handleOrderTypeChange,
    handlePaymentMethodChange,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <OrderContext.Provider value={contextValues}>
      {children}
    </OrderContext.Provider>
  );
};

