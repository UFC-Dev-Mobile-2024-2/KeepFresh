import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _emailVerificado from './_emailVerificado'; // Importa a tela principal

const emailVerificado = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_emailVerificado />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default emailVerificado;