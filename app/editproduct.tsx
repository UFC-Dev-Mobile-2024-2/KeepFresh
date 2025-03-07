import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text, List, IconButton } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router"

const EditProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [inputDate, setInputDate] = useState<Date | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const [observation, setObservation] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBackPress = () => {
    router.push('/_ProductsScreen');
  }

  const handleEditProduct = () => {
    router.push('/_ProductsScreen');
  };

  return (
    <View style={styles.container}>
      <IconButton
      icon="arrow-left"
      size={24}
      style={styles.backButton}
      onPress={handleBackPress}
      />
      <View style={styles.imageCard}>
        <Image source={{ uri: '' }} style={styles.image} />
      </View>

      <TextInput
        label="Nome do Produto"
        value={productName}
        onChangeText={text => setProductName(text)}
        style={styles.input}
      />

<SafeAreaProvider>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <DatePickerInput
          locale="pt"
          label="Data de Validade"
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          style={{ backgroundColor: '#ffff' }}
        />
      </View>
    </SafeAreaProvider>

      <List.Accordion
        title={selectedCategory ? selectedCategory : "Categoria do Produto"}
        style={styles.accordion}
        expanded={visible}
        onPress={() => setVisible(!visible)}
      >
        <List.Item title="Armário" onPress={() => { setSelectedCategory('Armário'); setVisible(false); }} />
        <List.Item title="Geladeira" onPress={() => { setSelectedCategory('Geladeira'); setVisible(false); }} />
        <List.Item title="Freezer" onPress={() => { setSelectedCategory('Freezer'); setVisible(false); }}/>
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

      <Button mode="contained" style={styles.editButton} onPress={handleEditProduct}>
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
  backButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 10,
    backgroundColor: 'transparent',
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
    backgroundColor: '#ffff'
  },
  dateButton: {
    marginBottom: 16,
  },
  accordion: {
    marginBottom: 16,
    backgroundColor: '#ffff'
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
    backgroundColor: '#4285F4'
  },
});

export default EditProductScreen;