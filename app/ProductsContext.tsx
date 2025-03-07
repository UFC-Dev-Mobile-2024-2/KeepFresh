import React, { createContext, useContext, useState } from 'react';
import { Produto } from './Produto';

const ProductsContext = createContext<{
  products: Produto[];
  addProduct: (product: Produto) => void;
  removeProduct: (productId: string) => void;
  updateProduct: (updatedProduct: Produto) => void;
} | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Produto[]>([]);

  const addProduct = (product: Produto) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const updateProduct = (updatedProduct: Produto) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
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
