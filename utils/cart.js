import React from "react";
// import useSWR from "swr";
// import {useErrorHandler} from "react-error-boundary";

// import axios from "utils/axios";

const CartContext = React.createContext();

export function CartProvider({children}) {
  // const {data: items, mutate, error} = useSWR("/api/v1/users/1/cart", url =>
  //   axios.get(url).then(res => res.data)
  // );
  // useErrorHandler(error);
  const items = Array.from(Array(6)).map((_, idx) => ({
    id: idx,
    name: "Casual Jaguar Reborn Brown White [Women]",
    brand: "jaguar",
    price: 1510000,
    image: "/assets/images/product1.png",
    quantity: 1
  }));

  const increase = () => {};

  const decrease = () => {};

  const add = () => {};

  const remove = () => {};

  return (
    <CartContext.Provider value={{items, increase, decrease, add, remove}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return React.useContext(CartContext);
}
