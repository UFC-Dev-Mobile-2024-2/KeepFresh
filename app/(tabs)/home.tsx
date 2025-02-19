import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { Appbar, Searchbar, Card, Button, Text, FAB, BottomNavigation } from "react-native-paper";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Início", icon: "home" },
    { key: "account", title: "Minha Conta", icon: "account" },
    { key: "recipes", title: "Receitas", icon: "chef-hat" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeContent />,
    account: () => <Text style={styles.placeholder}>Minha Conta</Text>,
    recipes: () => <Text style={styles.placeholder}>Receitas</Text>,
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appHeader}>
        <Image source={require("../../assets/images/logo-simplificada.png")} style={styles.logoImage} />
      </Appbar.Header>

      <Searchbar
        placeholder="Procurar Alimento"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      <HomeContent />

      <FAB icon="plus" style={styles.fab} onPress={() => console.log("Adicionar item")} />

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottomNavigation}
        activeColor="#007BFF"
        inactiveColor="#666"
      />
    </View>
  );
}

const HomeContent = () => {
  const data = [
    {
      id: "1",
      title: "Geladeira",
      description: "Confira sua lista",
      image: require("../../assets/images/fridge.png"),
      items: "Sorvete, Queijo, Presunto, Leite, Iogurte...",
    },
    {
      id: "2",
      title: "Freezer",
      description: "Confira sua lista",
      image: require("../../assets/images/freezer.png"),
      items: "Carne de Porco, Maminha, Fraldinha, Picanha...",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Title title={item.title} subtitle={item.description} />
          <Card.Cover source={item.image} style={styles.cardImage} />
          <Card.Content>
            <Text>{item.items}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={styles.button} labelStyle={styles.buttonText} onPress={() => console.log(`Visualizar ${item.title}`)}>
              Visualizar
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  appHeader: {
    backgroundColor: "transparent",
    elevation: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  logoImage: {
    width: 180,
    height: 50,
    resizeMode: "contain",
  },
  searchBar: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FAF4FF",
    elevation: 3,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 20,
    margin: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 85,
    backgroundColor: "#007BFF",
    elevation: 6,
  },
  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  },
  placeholder: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#666",
  },
});

