import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';

const _SendEmail = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Senha esquecida" titleStyle={{ textAlign: 'center' }} />
      </Appbar.Header>

      <View style={styles.content}>
        {}
        <Text variant="headlineMedium" style={styles.title}>
          E-mail enviado
        </Text>

        {}
        <Text style={styles.subtitle}>
          Nós mandamos as instruções de redefinição de senha para seu e-mail.
        </Text>
      </View>

      {}
      <Button mode="contained" buttonColor="blue" style={styles.button} onPress={() => navigation.navigate('Login')}>
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
  content: {
    marginTop: 50,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'gray',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});
