import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Text, TextInput, Button } from 'react-native-paper';

const _novaConta = ({ navigation }: any) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cadastro" titleStyle={{ textAlign: 'center' }} />
      </Appbar.Header>

      {/* Título */}
      <Text style={styles.title}>Crie uma nova conta</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Insira seu nome, e-mail e senha para se cadastrar.{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Você já tem uma conta?</Text>
        </TouchableOpacity>
      </Text>

      {/* Nome */}
      <Text style={styles.label}>NOME</Text>
      <TextInput
        mode="flat"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        right={nome ? <TextInput.Icon icon="check" color="green" /> : null}
      />

      {/* E-mail */}
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        mode="flat"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        right={email ? <TextInput.Icon icon="check" color="green" /> : null}
      />

      {/* Senha */}
      <Text style={styles.label}>SENHA</Text>
      <TextInput
        mode="flat"
        value={senha}
        onChangeText={setSenha}
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

      {/* Botão de Cadastro */}
      <Button mode="contained" buttonColor="blue" style={styles.button} onPress={() => console.log('Cadastro efetuado')}>
        ENTRAR
      </Button>

      {/* Texto de Termos */}
      <Text style={styles.termos}>
        Fazendo seu cadastro você está concordando com os Termos de Uso e Política de Privacidade
      </Text>
    </View>
  );
};

export default _novaConta;

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
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
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
  termos: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});