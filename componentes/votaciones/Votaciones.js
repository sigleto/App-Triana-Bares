import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const Votacioness = () => {
  const navigation = useNavigation();
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-6921150380725872/8908530226';
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.heading}>¿Sobre qué tipo de establecimientos quieres votar?</Text>
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VotacionB")}
        >
          <Text style={styles.buttonText}>BARES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VotacionR")}
        >
          <Text style={styles.buttonText}>RESTAURANTES</Text>
        </TouchableOpacity>
      </View>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c5f9c8",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  innerContainer: {
    borderWidth: 1, // Agregar un borde alrededor del innerContainer
    borderColor: "#000", // Color del borde (puedes cambiarlo)
    borderRadius: 8, // Radio de borde del innerContainer
    padding: 10, // Espacio de relleno del innerContainer
    alignItems: "center",
    backgroundColor: '#babfb6' ,
    },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Votacioness;
