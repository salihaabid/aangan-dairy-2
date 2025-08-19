import { createContext } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'PKR';
  const deliveryCharges = 200;
  const value = {
    products,
    currency,
    deliveryCharges,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
