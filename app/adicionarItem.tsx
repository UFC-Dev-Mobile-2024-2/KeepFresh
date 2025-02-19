import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button, TextInput, Menu, Provider, Text, Card, IconButton } from 'react-native-paper';

const AdicionarItemScreen: React.FC = () => {
  const [menuVisivel, setMenuVisivel] = React.useState(false);
  const categorias = ["Alimentos", "Bebidas", "Higiene", "Outros"];

  return (
    <Provider>
      <View style={styles.container}>
        <Appbar.Header style={styles.appBar}>
          <Appbar.BackAction />
        </Appbar.Header>

        <Card style={styles.imagePlaceholder}>
          <Card.Content>
            <Text style={{ textAlign: 'center' }}>+ Insira uma imagem</Text>
          </Card.Content>
        </Card>

        <TextInput
          label="Insira um Nome"
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Data de Validade"
          mode="outlined"
          style={styles.input}
          right={<TextInput.Icon icon="calendar" />}
          editable={false}
        />

        <Menu
          visible={menuVisivel}
          onDismiss={() => setMenuVisivel(false)}
          anchor={
            <TextInput
              label="Categoria do Produto"
              mode="outlined"
              style={styles.input}
              editable={false}
              right={<TextInput.Icon icon="menu-down" onPress={() => setMenuVisivel(true)} />}
            />
          }
        >
          {categorias.map((item, index) => (
            <Menu.Item key={index} title={item} onPress={() => setMenuVisivel(false)} />
          ))}
        </Menu>

        <TextInput
          label="Observação (opcional)"
          mode="outlined"
          style={styles.input}
        />

        <View style={styles.quantidadeContainer}>
          <Text style={styles.label}>Quantidade</Text>
          <View style={styles.quantidadeControls}>
            <IconButton icon="minus" size={24} disabled />
            <Text style={styles.quantidadeText}>0</Text>
            <IconButton icon="plus" size={24} disabled />
          </View>
        </View>

        <Button mode="contained" style={styles.botao} disabled>
          Adicionar Item
        </Button>
      </View>
    </Provider>
  );
};

export default AdicionarItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  appBar: {
    backgroundColor: 'white',
    elevation: 0,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  input: {
    marginBottom: 10,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantidadeControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidadeText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#e0e0e0',
  },
});
