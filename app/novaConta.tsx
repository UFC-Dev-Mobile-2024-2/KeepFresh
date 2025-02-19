import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _novaConta from './_novaConta'; // Importa a tela de cadastro

const novaConta = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_novaConta />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default novaConta;