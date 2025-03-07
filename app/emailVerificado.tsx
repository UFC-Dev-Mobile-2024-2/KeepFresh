import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Importação do useRouter

const EmailVerificado = () => {
  const router = useRouter(); // Hook para navegação

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          source="check-circle" 
          size={64} 
          color="#34C759"
        />
      </View>

      <Text variant="headlineMedium" style={styles.title}>
        E-mail verificado
      </Text>

      <Text variant="bodyLarge" style={styles.message}>
        Seu e-mail foi verificado com sucesso
      </Text>

      <Button
        mode="contained"
        onPress={() => router.push('/login')} // Navega para a tela Home
        style={styles.button}
        labelStyle={styles.buttonText}
        buttonColor="#007AFF"
      >
        Concluído
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  iconContainer: {
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#000', 
  },
  message: {
    marginBottom: 32,
    textAlign: 'center',
    color: '#555', 
  },
  button: {
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff', 
  },
});

export default EmailVerificado;