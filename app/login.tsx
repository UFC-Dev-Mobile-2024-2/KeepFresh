import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
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
      />
      <TextInput
        label="SENHA"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity onPress={() => alert("Função ainda não implementada")}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={() => alert("Login ainda não implementado")}
        style={styles.loginButton}
        contentStyle={{ paddingVertical: 14 }}
      >
        ENTRAR
      </Button>

      <View style={styles.registerContainer}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
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
};

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

export default LoginScreen;
