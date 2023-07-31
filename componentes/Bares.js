import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, ScrollView, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { barecillos } from "../datos";

const Bares = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const [local, setLocal] = useState("");
  const [filteredBares, setFilteredBares] = useState(barecillos);

  const buscar = () => {
    const resultado = barecillos.filter((item) =>
      item.nombre.toLowerCase().includes(local.toLowerCase())
    );
    setFilteredBares(resultado);
  };

  return (
    <>
      <TextInput
        value={local}
        placeholder="Busca un bar"
        onChangeText={(e) => setLocal(e)}
        style={styles.textInput}
      />
      <Button title="BUSCAR" onPress={buscar} />

      <ScrollView style={styles.container}>
        {filteredBares.length > 0 ? (
          filteredBares.map((item, index) => (
            <View key={index} style={styles.estab}>
              <Text style={styles.bar}>{item.nombre}</Text>
              <TouchableOpacity onPress={() => handleLinkPress(item.ubicacion)}>
                <Text style={styles.link}>Ubicación</Text>
              </TouchableOpacity>
              {item.reserva && (
                <TouchableOpacity
                  onPress={() => {
                    if (item.reserva.includes("95")) {
                      handleCall(item.reserva);
                    } else if (item.reserva.includes("https")) {
                      handleLinkPress(item.reserva);
                    }
                  }}
                >
                  <Text style={styles.link}>Reserva una mesa</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => handleLinkPress(item.estrellas)}>
                <Text style={styles.link}>Estrellas de TripAdvisor</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f6f6e2",
  },
  estab: {
    marginBottom: 16,
  },
  bar: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  textInput: {
    height: 40,
    backgroundColor: "#def43f",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
   
  },
});

export default Bares;
