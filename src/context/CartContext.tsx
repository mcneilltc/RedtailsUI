// 'use client';

// import { createContext, useContext, useState, ReactNode } from 'react';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   pricePerHour: number;
//   bookingDate: Date;
//   startTime: string;
//   duration: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addItem: (item: CartItem) => void;
//   updateItem: (id: string, newItem: CartItem) => void;
//   removeItem: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addItem = (item: CartItem) => {
//     setCartItems([...cartItems, item]);
//   };

//   const updateItem = (id: string, newItem: CartItem) => {
//     setCartItems(cartItems.map(item => 
//       item.id === id ? newItem : item
//     ));
//   };

//   const removeItem = (id: string) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addItem, updateItem, removeItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }