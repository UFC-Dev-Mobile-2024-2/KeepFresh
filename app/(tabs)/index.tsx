import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} variant="headlineMedium">
          Boas Vindas!
        </Text>
        <Text style={styles.subtitle}>
          É um prazer te ver por aqui, nós estamos muito animados em ter você no nosso time!
        </Text>
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => router.push("/Apresentacao2")} 
      >
        Venha nos conhecer
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 62,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    width: "80%",
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
});
