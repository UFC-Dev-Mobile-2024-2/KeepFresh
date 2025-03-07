import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const SuccessScreen = () => {
  const router = useRouter(); 

  const handleBackPress = () => {
    router.push('/_ProductsScreen'); 
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="check" size={50} color="#79C930" style={styles.icon} />
      <Text style={styles.message}>
        Item adicionado com sucesso
      </Text>
      <Button mode="contained" style={styles.button} onPress={handleBackPress}>
        Voltar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  message: {
    textAlign: 'center',
    color: 'black',
    marginVertical: 20,
    marginTop: 36, 
    fontWeight: 'light'
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#007AFF',
    marginTop: 47, 
    width: '60%'
  },
  icon: {
    marginBottom: 20,
  },
});

export default SuccessScreen;