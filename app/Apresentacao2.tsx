import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Apresetacao2() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo-simplificada.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/images/Illustrations.png")} 
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} variant="headlineMedium">
          Chega de desperdício
        </Text>
        <Text style={styles.subtitle}>
          Nós vamos te ajudar a organizar sua geladeira, despensa, armário e o que você quiser, em um só lugar
        </Text>
      </View>

      <Button mode="contained" style={styles.button} onPress={() => console.log("Botão clicado")}>
        Se conecte!
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
    width: 180,
    height: 60,
  },
  illustrationContainer: {
    marginBottom: 20,
  },
  illustration: {
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
    color: "#000",
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
    justifyContent: "center",
  },
});

