import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Home from '../componentes/Home';
import Establecimi from "../componentes/Establecimientos";
import Bares from "../componentes/Bares";
import Restaurantes from "../componentes/Restaurantes";
import Formulario from '../componentes/Formulario';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function EstablecimientosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Establecimientos" component={Establecimi} />
      <Stack.Screen name="Bares" component={Bares} />
      <Stack.Screen name="Restaurantes" component={Restaurantes} />
    </Stack.Navigator>
  );
}

function MyTabs() {


  return (
    <Tab.Navigator 
   
    >
      
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
        name="Establecimientos"
        component={EstablecimientosStack}
        options={{
          tabBarLabel: "Establecimientos",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="store"
              
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
            <MaterialCommunityIcons name="file-document-outline"  size={26} />
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

