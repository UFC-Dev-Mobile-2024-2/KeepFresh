import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("Botão de login pressionado");
  
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Preencha todos os campos corretamente!");
      return;
    }
  
    setLoading(true);
    try {
      console.log("Fazendo requisição para API...");
  
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });
  
      const data = await response.json();
      console.log("Resposta da API:", data);
  
      if (response.ok) {
        Alert.alert("Sucesso", "Login realizado!");
        router.replace("/home");
      } else {
        Alert.alert("Erro no Login", "E-mail ou senha incorretos.");
      }
    } catch (error) {
      Alert.alert("Erro de Conexão", "Verifique sua internet e tente novamente.");
    }
    setLoading(false);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Boas vindas ao</Text>
        <Text style={styles.brand}>KeepFresh</Text>
      </View>

      <Text style={styles.subtitle}>
        Entre com seu e-mail. Aproveite nossa solução!
      </Text>

      <TextInput
        label="E-MAIL"
        mode="outlined"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="SENHA"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.loginButton}
        contentStyle={{ paddingVertical: 14 }}
        loading={loading}
      >
        ENTRAR
      </Button>

      <View style={styles.registerContainer}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.push("/novaConta")}>
          <Text style={styles.registerText}>Crie uma nova conta!</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Ou</Text>

      <Button
        mode="contained"
        icon={() => <AntDesign name="google" size={20} color="white" />}
        style={styles.googleButton}
        contentStyle={{ paddingVertical: 14 }}
      >
        SE CONECTE PELO GMAIL
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  headerContainer: {
    flex: 2.5,
    justifyContent: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 38,
    fontWeight: "100",
    textAlign: "left",
  },
  brand: {
    fontSize: 38,
    fontWeight: "100",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "left",
    marginBottom: 35,
  },
  input: {
    marginBottom: 18,
  },
  forgotPassword: {
    textAlign: "right",
    color: "blue",
    marginBottom: 35,
  },
  loginButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    marginBottom: 25,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  registerText: {
    color: "blue",
    marginLeft: 5,
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 35,
  },
  googleButton: {
    backgroundColor: "#4285F4",
    borderRadius: 8,
  },
});
