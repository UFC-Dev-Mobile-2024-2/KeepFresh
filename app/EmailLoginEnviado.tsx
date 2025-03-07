import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router'; 

const EmailVerificationScreen = () => {
  const router = useRouter(); 

  const handleSendAgain = () => {
    router.push('/emailVerificado'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <Text style={styles.header} variant="headlineMedium">Verifique seu e-mail</Text>
      <Text style={styles.subText} variant="bodySmall">
        Verifique sua caixa de entrada para validar seu login!
      </Text>
      <Button mode="contained" style={styles.button} onPress={handleSendAgain}>
        ENVIAR NOVAMENTE
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    backgroundColor: 'white',
    padding: 24,
  },
  header: {
    textAlign: 'left', 
    fontWeight: 'light',
    marginBottom: 8,
    fontSize: 34,
  },
  subText: {
    textAlign: 'left', 
    color: 'gray',
    fontWeight: 'regular',
    marginBottom: 34,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
  },
});

export default EmailVerificationScreen;