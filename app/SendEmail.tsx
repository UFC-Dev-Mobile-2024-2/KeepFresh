import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _SendEmail from './_SendEmail'; // Importa a tela principal

const SendEmail = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_SendEmail />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default SendEmail;
