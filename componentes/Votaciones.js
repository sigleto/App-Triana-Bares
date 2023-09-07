// Actualiza la pantalla Votaciones de esta manera
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Votaciones = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <Text style={styles.texto}>Elige tipo de establecimiento:</Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("VotacionB")}
        >
          <Text style={styles.linkText}>BARES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("VotacionR")}
        >
          <Text style={styles.linkText}>RESTAURANTES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lista: {
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Votaciones;
