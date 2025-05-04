import { createContext, useState } from 'react';
import data from '../shopdata.json';

export const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
