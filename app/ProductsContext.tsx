import React, { createContext, useContext, useState } from 'react';
import { Produto } from './Produto';

type ProductsContextType = {
  products: Produto[];
  addProduct: (product: Produto) => void;
  updateProduct: (updatedProduct: Produto) => void;
  removeProduct: (productId: string) => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Produto[]>([]);

  const addProduct = (product: Produto) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateProduct = (updatedProduct: Produto) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
  }
  return context;
};
