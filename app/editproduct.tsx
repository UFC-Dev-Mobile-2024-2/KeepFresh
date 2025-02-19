import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, List } from 'react-native-paper';


const EditProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [visible, setVisible] = useState(false);
  const [observation, setObservation] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [datePickerVisible, setDatePickerVisible] = useState(false);



  return (
    <View style={styles.container}>
      <View style={styles.imageCard}>
        <Image source={{ uri: '' }} style={styles.image} />
      </View>

      <TextInput
        label="Nome do Produto"
        value={productName}
        onChangeText={text => setProductName(text)}
        style={styles.input}
      />

      <List.Accordion
        title="Categoria do Produto"
        style={styles.accordion}
        onPress={() => setVisible(!visible)}
      >
        <List.Item title="Armário" />
        <List.Item title="Geladeira" />
        <List.Item title="Freezer" />
      </List.Accordion>

      <TextInput
        label="Observações (opcional)"
        value={observation}
        onChangeText={text => setObservation(text)}
        style={styles.input}
      />

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantidade:</Text>
        <Button onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</Button>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button onPress={() => setQuantity(quantity + 1)}>+</Button>
      </View>

      <Button mode="contained" style={styles.editButton} onPress={() => console.log('Editar Item')}>
        Editar Item
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  imageCard: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    marginBottom: 16,
  },
  dateButton: {
    marginBottom: 16,
  },
  accordion: {
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  quantityLabel: {
    marginRight: 80,
  },
  editButton: {
    marginTop: 2,
  },
});

export default EditProductScreen;