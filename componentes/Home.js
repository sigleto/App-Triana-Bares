import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Reloj from "../anexos/reloj";
const Home = () => {
  const navigation = useNavigation();

  const politica = () => {navigation.navigate('PoliticaPrivacidad')
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagenes}>
        <Image style={styles.logo} source={require("../assets/LogoJuan.png")} />
        <Image style={styles.imagen} source={require("../assets/principal.webp")} />
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>¡Descubre Triana Bares!</Text>
      </View>
      <Reloj />
      <View style={styles.privacidadContainer}>
      <TouchableOpacity style={styles.skipButton} onPress={politica}>
          <Text style={styles.buttonText}>SALTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f6f6e2",
  },
  logo: {
    width: 300,
    height: 220,
  },
  imagen: {
    width: 300,
    height: 210,
  },
  tituloContainer: {
    marginTop: 20,
  },
  titulo: {
    fontSize: 48,
    color: "#050444",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imagenes: {
    marginTop: 10,
  },
  privacidad: {
    fontSize: 12,
  },
  privacidadContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
  },
});

export default Home;
