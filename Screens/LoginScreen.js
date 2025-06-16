import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground } from 'react-native';

//const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logar = async () => {
    try {
      const savedUsers = await AsyncStorage.getItem('users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];

      const userExists = users.some(
        user => user.username === username && user.password === password
      );

      if (userExists) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
    }
  };

  return (
    <ImageBackground
    source={require('../assets/backgroundLogin.jpg')}
    style={styles.background}
    resizeMode="cover">
    
    <View style={styles.rootContainer}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
  
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
  
        <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={logar} color="#4B0082" />
        </View>
  
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} color="#4B0082"/>
        </View>
      </View>
  
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  header: {
    alignItems: 'center',
    marginTop: 80, 
  },
  title: {
    fontSize: 104,
    color: '#9400D3',
    borderColor: 'white',
    textShadowColor: 'white',
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 1,
    marginTop: -20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#BA55D3',
    margin: 10,
    width: '50%',
    borderRadius: 5,
  },
});