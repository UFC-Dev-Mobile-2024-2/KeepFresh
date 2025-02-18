import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, TextInput, Button } from 'react-native-paper';

const _ForgotPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('E-mail enviado para:', email);
    // Aqui você pode adicionar a lógica para envio do e-mail de recuperação
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Senha esquecida" titleStyle={{ textAlign: 'center' }} />
      </Appbar.Header>

      {/* Título */}
      <Text variant="headlineMedium" style={styles.title}>
        Esqueceu sua senha?
      </Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Insira seu e-mail. Enviaremos uma mensagem de redefinição de senha.
      </Text>

      {/* Campo de E-mail */}
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        mode="flat"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Botão de Redefinir Senha */}
      <Button mode="contained" buttonColor="blue" style={styles.button} onPress={handleResetPassword}>
        REDEFINA SUA SENHA
      </Button>
    </View>
  );
};

export default _ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: 'gray',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'gray',
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
  },
});
