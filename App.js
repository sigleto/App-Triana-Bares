import React from 'react';
import { Provider } from './componentes/Contexto/Provider';
import Navigation from './componentes/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
   <Navigation/>
   
   </Provider>
   
  );
}

