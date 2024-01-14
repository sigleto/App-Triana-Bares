import React from 'react';
import { Provider } from './componentes/Contexto/Provider';
import Navigation from './componentes/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PresentacionesStack } from './componentes/Navigator';
import PoliticaPrivacidad from './componentes/PoliticaPrivacidad';
const Stack = createStackNavigator();

export default function App() {
  return (
   
    <Provider>
      <NavigationContainer>
     
      <Stack.Navigator initialRouteName="PresentacionesStack" screenOptions={{headerShown: false}} >
          <Stack.Screen name="PresentacionesStack" component={PresentacionesStack} />
          <Stack.Screen name="Navigation" component={Navigation} />
          <Stack.Screen name="PoliticaPrivacidad" component={PoliticaPrivacidad} /> 
       </Stack.Navigator>
           
   </NavigationContainer>
   </Provider>
  
   
  );
}

