import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';
import { router } from 'expo-router';

const _SendEmail = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.push('/ForgotPassword')} />
        <Appbar.Content title="Senha esquecida" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <View style={styles.content}>
        {/* Título */}
        <Text style={styles.title}>E-mail enviado</Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Nós mandamos as instruções de redefinição de senha para seu e-mail.
        </Text>
      </View>

      {/* Botão Concluído */}
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: '#007AFF' }]}
        labelStyle={styles.buttonText}
        onPress={() => router.push('/login')} // 🔥 Ajustado para ir para a tela de login
      >
        CONCLUÍDO
      </Button>
    </View>
  );
};

export default _SendEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  appbar: {
    backgroundColor: '#fff',
  },
  headerTitle: {
    textAlign: 'center',
    color: 'black',
  },
  content: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
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
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
  },
});
