import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Appbar, Card, Button, IconButton, Text, FAB } from 'react-native-paper';
import { router } from 'expo-router';
import { useProducts } from './ProductsContext';
import { Produto } from './Produto';

const _ProductsScreen = () => {
  const { products, addProduct, removeProduct } = useProducts();

  const handleAddProduct = () => {
    const newProduct: Produto = {
      id: String(Date.now()),
      name: 'Novo Produto',
      validade: '--',
      quantidade: '--',
      observacao: '--',
    };
    addProduct(newProduct);
  };

  const handleEditProduct = (product: Produto) => {
    router.push({
      pathname: '/editproduct',
      params: { product: JSON.stringify(product) },
    });
  };

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId);
  };

  const renderItem = ({ item }: { item: Produto }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={{ uri: item.image || '' }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text variant="titleMedium" style={styles.productName}>{item.name}</Text>
          <Text>Validade: {item.validade}</Text>
          <Text>Quantidade: {item.quantidade}</Text>
          <Text>Observação: {item.observacao}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" buttonColor='#007AFF' onPress={() => handleRemoveProduct(item.id)}>
          Consumido
        </Button>
        <IconButton icon="pencil" size={20} style={styles.editButton} onPress={() => handleEditProduct(item)} />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.push('/home')} />
        <Appbar.Content title="Despensa" titleStyle={styles.title} />
        <Appbar.Action icon="filter-variant" onPress={() => console.log('Abrir filtros')} />
      </Appbar.Header>
      <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.list} />
      <FAB icon="plus" color="#FFF" style={styles.fab} onPress={handleAddProduct} />
    </View>
  );
};

export default _ProductsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { textAlign: 'center' },
  list: { padding: 10 },
  card: { margin: 10, padding: 10, borderRadius: 10, backgroundColor: '#fff', elevation: 2 },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 10, backgroundColor: '#ddd' },
  infoContainer: { flex: 1 },
  productName: { fontWeight: 'bold', fontSize: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  editButton: { backgroundColor: '#EAEAEA' },
  fab: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#007AFF' },
});
