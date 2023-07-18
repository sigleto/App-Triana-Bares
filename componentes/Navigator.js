import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Home from '../componentes/Home';
import Establecimientos from "../componentes/Establecimientos";
import Bares from "../componentes/Bares";
import Restaurantes from "../componentes/Restaurantes";
import Formulario from '../componentes/Formulario';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function EstablecimientosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Establecimientos" component={Establecimientos} />
      <Stack.Screen name="Bares" component={Bares} />
      <Stack.Screen name="Restaurantes" component={Restaurantes} />
    </Stack.Navigator>
  );
}

function MyTabs() {


  return (
    <Tab.Navigator 
    initialRouteName="Home">
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="Establecimientos"
        component={EstablecimientosStack}
        options={{
          tabBarLabel: "Establecimientos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="store"
              color={color}
              size={26}
            />
          ),
        }}
      />

<Tab.Screen
        name="Formulario"
        component={Formulario}
        options={{
          tabBarLabel: "Formulario",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-document-outline" color={color} size={26} />
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
