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
import { Audio } from "expo-av";

const Home = () => {
  const navigation = useNavigation();

  const politica = (url) => {
    Linking.openURL(url);
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
        <TouchableOpacity
          onPress={() =>
            politica(
              "https://docs.google.com/document/d/e/2PACX-1vReYGEVk4kZ5cqO3H0zEuaFEHcGR_UJTSCOwajN8E6biLIPNon6-g-RyJzgFy7CFXngL4VvBue_IbpI/pub?embedded=true"
            )
          }
        >
          <Text style={styles.privacidad}>Política de privacidad</Text>
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
