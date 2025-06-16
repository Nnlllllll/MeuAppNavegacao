import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground } from 'react-native';

const windowWidth = Dimensions.get("window").width;

export default function CadastroScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      const savedUsers = await AsyncStorage.getItem('users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];

      if (users.some(user => user.username === username)) {
        Alert.alert('Erro', 'Usuário já cadastrado');
        return;
      }

      const newUsers = [...users, { username, password }];
      await AsyncStorage.setItem('users', JSON.stringify(newUsers));

      Alert.alert('Sucesso', 'Cadastro realizado!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro');
    }
  };

  return (
    <ImageBackground
    source={require('../assets/backgroundCadastro.jpg')}
    style={styles.background}
    resizeMode="cover">

    <View style={styles.rootContainer}>
      <View style={styles.header}>
      <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.body}>

      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
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
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={handleRegister}
          color="#4B0082" 
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Login"
          onPress={() => navigation.navigate('Login')}
          color="#4B0082" 
        />
      </View>
    </View>

    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background:{
  flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    alignItems: 'center',
    marginTop: 80,

  },
  title: {
    fontSize: 104,
    marginBottom: 20,
    color: '#663399',
    borderColor: 'white',
    textShadowColor: 'white',
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 1,
    marginTop: -20,
  },
  inputContainer: {
    width: windowWidth * 0.8,
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
    backgroundColor: '#add8e6',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});