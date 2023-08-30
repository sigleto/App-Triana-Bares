import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const PantallaGrande = ({ imageUrl, onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>Cerrar</Text>
      </TouchableOpacity>
      <Image source={imageUrl} style={styles.fullScreenImage} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    color: "white",
    backgroundColor:'brown',
    fontSize: 18,
  },
  fullScreenImage: {
    width: 350,
    height: 350,
  },
});

export default PantallaGrande;
