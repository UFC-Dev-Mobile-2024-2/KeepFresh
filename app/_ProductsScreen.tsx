import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Appbar, Card, Button, IconButton, Text, FAB } from 'react-native-paper';

const data = [
  {
    id: '1',
    name: 'Sorvete',
    //image: require('../assets/sorvete.png'), >>>>> procurar as imagens
    validade: '09/01/2025',
    quantidade: '1',
    observacao: '',
  },
  {
    id: '2',
    name: 'Queijo',
    //image: require('../assets/queijo.png'),
    validade: '--',
    quantidade: '--',
    observacao: '--',
  },
  {
    id: '3',
    name: 'Leite',
    //image: require('../assets/leite.png'),
    validade: '--',
    quantidade: '--',
    observacao: '--',
  },
  {
    id: '4',
    name: 'Iogurte',
    //image: require('../assets/iogurte.png'),
    validade: '--',
    quantidade: '--',
    observacao: '--',
  },
];

const _ProductsScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        {}
        <Image source={item.image} style={styles.image} />

        {}
        <View style={styles.infoContainer}>
          <Text variant="titleMedium" style={styles.productName}>
            {item.name}
          </Text>
          <Text>Validade: {item.validade}</Text>
          <Text>Quantidade: {item.quantidade}</Text>
          <Text>Observação: {item.observacao}</Text>
        </View>
      </View>

      {}
      <View style={styles.buttonContainer}>
        <Button mode="contained" buttonColor="blue" onPress={() => console.log(`${item.name} consumido!`)}>
          Consumido
        </Button>

        {}
        <IconButton icon="pencil" size={20} style={styles.editButton} onPress={() => console.log(`Editar ${item.name}`)} />
      </View>
    </Card>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Geladeira" titleStyle={{ textAlign: 'center' }} />
        <Appbar.Action icon="filter-variant" onPress={() => console.log('Abrir filtros')} />
      </Appbar.Header>

      {}
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={{ padding: 10 }} />

      {}
      <FAB
        icon="plus"
        color="#FFF"
        style={styles.fab}
        onPress={() => console.log('Adicionar item')}
      />
    </View>
  );
};

export default _ProductsScreen;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  editButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#EAEAEA',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
  },
});
