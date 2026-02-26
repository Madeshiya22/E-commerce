// import React from "react";
// import {useState} from "react";

// export const useCart = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, qyt: item.qyt + 1 } : item,
//         );
//       }
//       return [...prevCart, { ...product, qyt: 1 }];
//     });
//   };

//   const removeFromCart = () => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return { cart, addToCart, removeFromCart };
// };

// export default useCart;
