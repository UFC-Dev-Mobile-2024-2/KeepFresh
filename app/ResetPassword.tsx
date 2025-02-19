import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import _ResetPassword from './_ResetPassword';

const ResetPassword = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <_ResetPassword />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ResetPassword;
