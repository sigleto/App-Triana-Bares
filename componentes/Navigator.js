import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import Home from '../componentes/Home';
import Establecimi from "../componentes/Establecimientos";
import Bares from "../componentes/Bares";
import Restaurantes from "../componentes/Restaurantes";
import Formulario from '../componentes/Formulario';
import Carta from "./Carta";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function EstablecimientosStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Establecimientos" component={Establecimi} />
      <Stack.Screen name="Bares" component={Bares} />
      <Stack.Screen name="Restaurantes" component={Restaurantes} />
      <Stack.Screen name="CartaScreen" component={Carta} />
  
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator  >
      
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home"  size={26} />
          )
        }}
      />

      <Tab.Screen
        name="Locales"
        component={EstablecimientosStack}
        options={{
          tabBarLabel: "Establecimientos",
          tabBarIcon: () => (
            <MaterialIcons
              name="restaurant"
              
              size={26}
            />
          ),
        }}
      />

<Tab.Screen
        name="Formulario"
        component={Formulario}
        options={{
          tabBarLabel: "Contacto",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="contacts"  size={26} />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
