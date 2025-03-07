import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, useTheme, Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router'; 

const Cadastro = () => {
  const theme = useTheme(); 
  const router = useRouter(); 
  const [senhaVisivel, setSenhaVisivel] = useState(false); 
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [erro, setErro] = useState({ nome: false, email: false, senha: false });

  const validarCampos = () => {
    let camposValidos = true;
    const novosErros = { nome: false, email: false, senha: false };

    if (!nome.trim()) {
      novosErros.nome = true;
      camposValidos = false;
    }
    if (!email.trim()) {
      novosErros.email = true;
      camposValidos = false;
    }
    if (!senha.trim()) {
      novosErros.senha = true;
      camposValidos = false;
    }

    setErro(novosErros); 
    return camposValidos;
  };

  const irParaHome = () => {
    if (validarCampos()) {
      router.push('/login');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.push('/login')} /> {/* Seta de voltar para a tela de Login */}
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onBackground }]}>
          Cadastro
        </Text>

        <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
          Crie uma nova conta
        </Text>

        <TextInput
          label="NOME"
          mode="outlined"
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            setErro({ ...erro, nome: false });
          }}
          error={erro.nome}
          theme={{
            colors: {
              primary: erro.nome ? 'red' : theme.colors.primary,
            },
          }}
        />

        <TextInput
          label="E-MAIL"
          mode="outlined"
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErro({ ...erro, email: false });
          }}
          error={erro.email} 
          theme={{
            colors: {
              primary: erro.email ? 'red' : theme.colors.primary, 
            },
          }}
        />

        <TextInput
          label="SENHA"
          mode="outlined"
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErro({ ...erro, senha: false }); 
          }}
          error={erro.senha} 
          secureTextEntry={!senhaVisivel}
          right={
            <TextInput.Icon
              icon={senhaVisivel ? 'eye-off' : 'eye'} 
              onPress={() => setSenhaVisivel(!senhaVisivel)} 
            />
          }
          theme={{
            colors: {
              primary: erro.senha ? 'red' : theme.colors.primary, 
            },
          }}
        />

        <Button
          mode="contained"
          onPress={irParaHome} 
          style={styles.button}
          labelStyle={styles.buttonText}
          buttonColor="#007AFF"
        >
          Entrar
        </Button>

        <Text variant="bodySmall" style={[styles.terms, { color: theme.colors.onSurfaceVariant }]}>
          Fazendo seu cadastro você está concordando com os Termos de Uso e Política de Privacidade
        </Text>

        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: theme.colors.outline }]} />
          <Text variant="bodySmall" style={[styles.dividerText, { color: theme.colors.onSurfaceVariant }]}>
            Ou
          </Text>
          <View style={[styles.divider, { backgroundColor: theme.colors.outline }]} />
        </View>

        <Button
          mode="outlined"
          onPress={() => {}}
          style={styles.googleButton}
          labelStyle={[styles.googleButtonText, { color: theme.colors.primary }]}
        >
          Conecte pelo Gmail
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    marginTop: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  terms: {
    marginTop: 16,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 8,
  },
  googleButton: {
    width: '100%',
    borderColor: '#007AFF',
  },
  googleButtonText: {
    fontWeight: 'bold',
  },
});

export default Cadastro;