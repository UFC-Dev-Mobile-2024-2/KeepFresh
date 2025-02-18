import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _ProductsScreen from './_ProductsScreen';

const ProductsScreen = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_ProductsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ProductsScreen;
