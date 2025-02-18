import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _ForgotPassword from './_ForgotPassword'; // Importa a tela

const ForgotPassword = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_ForgotPassword />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ForgotPassword;
