import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import CadastroScreen from './Screens/CadastroScreen';


const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={CadastroScreen}   options={{ headerShown: false }} />
        <Stack.Screen name ='Login' component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}