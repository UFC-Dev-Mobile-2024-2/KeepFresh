import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { Appbar, Searchbar, Card, Button, Text, FAB, BottomNavigation } from "react-native-paper";

export default function home() {
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
      {/* Cabeçalho */}
      <Appbar.Header>
        <Appbar.Content title="KeepFresh" titleStyle={styles.logoText} />
      </Appbar.Header>

      {/* Barra de Pesquisa */}
      <Searchbar
        placeholder="Procurar Alimento"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      {/* Conteúdo Principal */}
      <HomeContent />

      {/* Botão Flutuante */}
      <FAB icon="plus" style={styles.fab} onPress={() => console.log("Adicionar item")} />

      {/* Navegação Inferior */}
      <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
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
            <Button mode="contained" onPress={() => console.log(`Visualizar ${item.title}`)}>
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
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBar: {
    margin: 10,
    borderRadius: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
  },
  cardImage: {
    height: 180,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 70, // Acima da barra de navegação
    backgroundColor: "#007BFF",
  },
  placeholder: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#666",
  },
});

