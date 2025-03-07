import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, useTheme, Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Importação correta do useRouter

const Cadastro = () => {
  const theme = useTheme(); // Hook para acessar o tema do Material Design
  const router = useRouter(); // Hook para navegação
  const [senhaVisivel, setSenhaVisivel] = useState(false); // Estado para controlar a visibilidade da senha
  const [nome, setNome] = useState(''); // Estado para o campo de nome
  const [email, setEmail] = useState(''); // Estado para o campo de e-mail
  const [senha, setSenha] = useState(''); // Estado para o campo de senha
  const [erro, setErro] = useState({ nome: false, email: false, senha: false }); // Estado para controlar erros de validação

  // Função para validar os campos
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

    setErro(novosErros); // Atualiza o estado de erro
    return camposValidos;
  };

  // Função para navegar para a tela Home após validação
  const irParaHome = () => {
    if (validarCampos()) {
      router.push('/login'); // Navega para a tela Home se os campos estiverem preenchidos
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Barra de Topo (Header) */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.push('/login')} /> {/* Seta de voltar para a tela de Login */}
      </Appbar.Header>

      {/* Conteúdo da Tela */}
      <View style={styles.content}>
        {/* Título Centralizado */}
        <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onBackground }]}>
          Cadastro
        </Text>

        {/* Subtítulo */}
        <Text variant="bodyMedium" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
          Crie uma nova conta
        </Text>

        {/* Campo de Nome */}
        <TextInput
          label="NOME"
          mode="outlined"
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            setErro({ ...erro, nome: false }); // Remove o erro ao digitar
          }}
          error={erro.nome} // Destaca o campo se houver erro
          theme={{
            colors: {
              primary: erro.nome ? 'red' : theme.colors.primary, // Cor da borda em vermelho se houver erro
            },
          }}
        />

        {/* Campo de E-mail */}
        <TextInput
          label="E-MAIL"
          mode="outlined"
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErro({ ...erro, email: false }); // Remove o erro ao digitar
          }}
          error={erro.email} // Destaca o campo se houver erro
          theme={{
            colors: {
              primary: erro.email ? 'red' : theme.colors.primary, // Cor da borda em vermelho se houver erro
            },
          }}
        />

        {/* Campo de Senha */}
        <TextInput
          label="SENHA"
          mode="outlined"
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErro({ ...erro, senha: false }); // Remove o erro ao digitar
          }}
          error={erro.senha} // Destaca o campo se houver erro
          secureTextEntry={!senhaVisivel} // Oculta ou exibe a senha
          right={
            <TextInput.Icon
              icon={senhaVisivel ? 'eye-off' : 'eye'} // Ícone de olho
              onPress={() => setSenhaVisivel(!senhaVisivel)} // Alterna a visibilidade da senha
            />
          }
          theme={{
            colors: {
              primary: erro.senha ? 'red' : theme.colors.primary, // Cor da borda em vermelho se houver erro
            },
          }}
        />

        {/* Botão de Cadastro */}
        <Button
          mode="contained"
          onPress={irParaHome} // Navega para a tela Home após validação
          style={styles.button}
          labelStyle={styles.buttonText}
          buttonColor="#007AFF" // Cor personalizada para o botão
        >
          Entrar
        </Button>

        {/* Termos de Uso */}
        <Text variant="bodySmall" style={[styles.terms, { color: theme.colors.onSurfaceVariant }]}>
          Fazendo seu cadastro você está concordando com os Termos de Uso e Política de Privacidade
        </Text>

        {/* Divisor */}
        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: theme.colors.outline }]} />
          <Text variant="bodySmall" style={[styles.dividerText, { color: theme.colors.onSurfaceVariant }]}>
            Ou
          </Text>
          <View style={[styles.divider, { backgroundColor: theme.colors.outline }]} />
        </View>

        {/* Botão de Conectar com Gmail */}
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
    borderColor: '#007AFF', // Cor da borda do botão do Gmail
  },
  googleButtonText: {
    fontWeight: 'bold',
  },
});

export default Cadastro;