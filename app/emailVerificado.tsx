import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from 'react-native-paper'; // Importação do Icon

const EmailVerificado = () => {
  return (
    <View style={styles.container}>
      {/* Ícone de visto verde */}
      <View style={styles.iconContainer}>
        <Icon
          source="check-circle" // Nome do ícone
          size={64} // Tamanho do ícone
          color="#34C759" // Cor personalizada para o visto
        />
      </View>

      {/* Título */}
      <Text variant="headlineMedium" style={styles.title}>
        E-mail verificado
      </Text>

      {/* Mensagem */}
      <Text variant="bodyLarge" style={styles.message}>
        Seu e-mail foi verificado com sucesso
      </Text>

      {/* Botão */}
      <Button
        mode="contained"
        onPress={() => {}}
        style={styles.button}
        labelStyle={styles.buttonText}
        buttonColor="#007AFF" // Cor personalizada para o botão
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
    backgroundColor: '#ffffff', // Fundo branco
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
    color: '#000', // Cor do título
  },
  message: {
    marginBottom: 32,
    textAlign: 'center',
    color: '#555', // Cor da mensagem
  },
  button: {
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff', // Cor do texto do botão
  },
});

export default EmailVerificado;