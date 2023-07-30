import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imagenes}>
      <Image style={styles.logo} source={require('../assets/LogoJuan.png')} />
      <Image style={styles.imagen} source={require('../assets/principal.webp')} />
      </View>
      <View style={styles.parrafo}>
        <Text style={styles.per}>
          Relación de establecimientos gastronómicos distribuidos en las categorías de "BARES" y "RESTAURANTES". La principal diferencia entre ambas es que en todos los sitios incluidos como restaurantes se puede reservar. Ello no quiere decir que también lo puedas hacer en algunos bares.
          Así mismo, en los todos los establecimientos catalogados como bares, se pueden pedir tapas, lo que, tampoco implica que en algunos restaurantes también te las sirvan.
          En la sección  <TouchableOpacity onPress={() => navigation.navigate("Formulario")}>
        <Text style={styles.link}> Contacto </Text>
      </TouchableOpacity> puedes proponer algún establecimiento que deseas que se incluya.
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#f6f6e2'
  },
  logo: {
    
    width: 250,
    height: 170,
  },
  imagen: {
    width: 250,
    height: 160,
  },
  parrafo: {
    marginTop: 20,
  },
  per: {
    fontSize: 16,
    textAlign: 'justify',
  },
  link: {
    fontSize:15,
    color: 'blue',
    
  },
  imagenes:{
    marginTop:10
  }
});

export default Home;
