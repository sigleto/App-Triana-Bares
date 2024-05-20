import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import { StyleSheet,View} from "react-native";


import Home from '../componentes/Home';
import Establecimi from "../componentes/Establecimientos";
import Bares from "../componentes/Bares";
import Restaurantes from "../componentes/Restaurantes";
import Formulario from '../componentes/Formulario';
import VotacionB from '../componentes/votaciones/VotacionB'
import VotacionR from '../componentes/votaciones/VotacionR';
import Carta from "./Carta";
import Votaciones from '../componentes/votaciones/Votaciones' ;
import Presentacion1 from "./Presentacion/Presentacion1";
import Presentacion2 from "./Presentacion/Presentacion2";
import Presentacion3 from "./Presentacion/Presentacion3";
import PoliticaPrivacidad from "./PoliticaPrivacidad";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export function EstablecimientosStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Establecimientos" component={Establecimi} />
      <Stack.Screen name="Bares" component={Bares}options={{ headerShown: false }}  />
      <Stack.Screen name="Restaurantes" component={Restaurantes}options={{ headerShown: false }} />
      <Stack.Screen name="CartaScreen" component={Carta}options={{ headerShown: false }} />
      <Stack.Screen name="PoliticaPrivacidad" component={PoliticaPrivacidad}options={{ headerShown: false }} />
     
      
      
  
    </Stack.Navigator>
  );

  

}
function VotacionesStack() {

  return (
    <Stack.Navigator>

      <Stack.Screen name="Votaciones" component={Votaciones}options={{ headerShown: false }} />
      <Stack.Screen name="VotacionB" component={VotacionB}options={{ headerShown: false }} />
      <Stack.Screen name="VotacionR" component={VotacionR}options={{ headerShown: false }} />
        
    </Stack.Navigator>
  );

}

export function PresentacionesStack(){
  return(
  <Stack.Navigator initialRouteName="Presentacion1" options={{headerShown: false}} >
  <Stack.Screen name="Presentacion1" component={Presentacion1}options={{ headerShown: false }} />
  <Stack.Screen name="Presentacion2" component={Presentacion2}options={{ headerShown: false }} />
  <Stack.Screen name="Presentacion3" component={Presentacion3}options={{ headerShown: false }} />
      
  </Stack.Navigator>
  )
}


export function MyTabs() {
  return (
    
    
    <Tab.Navigator  screenOptions={{
      tabBarStyle: { backgroundColor: 'red' },
    }}>
      
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home"  size={26} style={styles.iconos}/>
          )
        }}
      />

      <Tab.Screen
        name="Locales"
        component={EstablecimientosStack}
        options={{
          tabBarLabel: "Locales",
          tabBarIcon: () => (
            <MaterialIcons
              name="restaurant"
              
              size={26} style={styles.iconos}
            />
          ),
        }}
      />


  <Tab.Screen
        name="Votaciones"
        component={VotacionesStack}
        options={{
          tabBarLabel: "Votar",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="vote-outline"  size={26} style={styles.iconos}/>
          ),
        }}
      />    
      <Tab.Screen
        name="Formulario"
        component={Formulario}
        options={{
          tabBarLabel: "Contacto",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="contacts"  size={26} style={styles.iconos} />
          ),
        }}
      />
      
    </Tab.Navigator>
    
  );
}
const styles = StyleSheet.create({
  iconos: {color:"#331da0",
  backgroundColor:"#d7f794",
fontWeight:'bold'},
  })

export default function Navigation() {
  return (
   
            <MyTabs />
           
       
  
  );
}