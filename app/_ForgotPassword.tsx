import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Appbar, Text, TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

const _ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('E-mail enviado para:', email);
    router.push('/SendEmail');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.push('/login')} />
        <Appbar.Content title="Senha esquecida" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.title}>Esqueceu sua senha?</Text>

        <Text style={styles.subtitle}>
          Insira seu e-mail. Enviaremos uma mensagem de redefinição de senha.
        </Text>

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          mode="flat"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          theme={{ colors: { primary: 'black' } }}
          textColor="black"
        />

        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: '#007AFF' }]}
          labelStyle={styles.buttonText}
          onPress={handleResetPassword}
        >
          REDEFINA SUA SENHA
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default _ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: '#fff',
  },
  headerTitle: {
    textAlign: 'center',
    color: 'black',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
