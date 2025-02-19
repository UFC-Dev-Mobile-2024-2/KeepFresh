import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, TextInput, Button } from 'react-native-paper';

const _ResetPassword = ({ navigation }: any) => {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Redefinir senha" titleStyle={{ textAlign: 'center' }} />
      </Appbar.Header>

      <Text style={styles.title}>Redefina sua senha</Text>

      <Text style={styles.subtitle}>Insira sua nova senha nos espaços a seguir:</Text>

      <Text style={styles.label}>NOVA SENHA</Text>
      <TextInput
        mode="flat"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry={!senhaVisivel}
        autoCapitalize="none"
        style={styles.input}
        right={
          <TextInput.Icon
            icon={senhaVisivel ? 'eye-off' : 'eye'}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          />
        }
      />

      <Text style={styles.label}>INSIRA NOVAMENTE</Text>
      <TextInput
        mode="flat"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry={!confirmarSenhaVisivel}
        autoCapitalize="none"
        style={styles.input}
        right={
          <TextInput.Icon
            icon={confirmarSenhaVisivel ? 'eye-off' : 'eye'}
            onPress={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
          />
        }
      />

      <Button mode="contained" buttonColor="blue" style={styles.button} onPress={() => console.log('Senha redefinida')}>
        CONCLUÍDO
      </Button>
    </View>
  );
};

export default _ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
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
