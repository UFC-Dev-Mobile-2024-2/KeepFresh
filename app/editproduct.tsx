import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, List, IconButton } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Produto } from './Produto';
import { useProducts } from './ProductsContext';

const EditProductScreen = () => {
  const { updateProduct } = useProducts();
  const params = useLocalSearchParams();
  const product = params.product ? JSON.parse(params.product as string) as Produto : null;

  if (!product) {
    router.push('/_ProductsScreen');
    return null;
  }

  const [productName, setProductName] = useState(product.name);
  const [inputDate, setInputDate] = useState<Date | undefined>(
    product.validade !== '--' ? new Date(product.validade) : undefined
  );
  const [observation, setObservation] = useState(product.observacao);
  const [quantity, setQuantity] = useState(parseInt(product.quantidade, 10) || 1);

  const handleSave = () => {
    const updatedProduct: Produto = {
      ...product,
      name: productName,
      validade: inputDate ? inputDate.toISOString().split('T')[0] : '--',
      quantidade: quantity.toString(),
      observacao: observation,
    };

    updateProduct(updatedProduct);
    router.push('/_ProductsScreen');
  };

  return (
    <View style={styles.container}>
      <IconButton icon="arrow-left" size={24} style={styles.backButton} onPress={() => router.push('/_ProductsScreen')} />

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image || 'https://via.placeholder.com/300' }} style={styles.image} />
      </View>

      <TextInput label="Nome do Produto" value={productName} onChangeText={setProductName} style={styles.input} />

      <SafeAreaProvider>
        <DatePickerInput locale="pt" label="Data de Validade" value={inputDate} onChange={(d) => setInputDate(d)} inputMode="start" style={styles.input} />
      </SafeAreaProvider>

      <List.Accordion title="Categoria do Produto" style={styles.dropdown}>
        <List.Item title="Armário" />
        <List.Item title="Geladeira" />
        <List.Item title="Freezer" />
      </List.Accordion>

      <TextInput label="Observação (opcional)" value={observation} onChangeText={setObservation} style={styles.input} />

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantidade:</Text>
        <IconButton icon="minus" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <IconButton icon="plus" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button mode="contained" style={styles.editButton} onPress={() => router.push('/_ProductsScreen')}>
        Editar Item
      </Button>
    </View>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  dropdown: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#007AFF', 
    paddingVertical: 8,
  },
});
