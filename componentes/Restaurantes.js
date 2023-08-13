import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, ScrollView, TextInput, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { restaurancillos } from "../datos";

const Restaurantes = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const [local, setLocal] = useState("");
  const [filteredRestaurantes, setFilteredRestaurantes] = useState(restaurancillos);

  const buscar = () => {
    const resultado = restaurancillos.filter((item) => item.nombre.toLowerCase().includes(local.toLowerCase()));
    setFilteredRestaurantes(resultado);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={local}
          placeholder="Busca un restaurante"
          onChangeText={(e) => setLocal(e)}
          style={styles.textInput}
        />
        <Button title="BUSCAR" onPress={buscar} />
      </View>
      <ScrollView style={styles.restaurantesContainer}>
        {filteredRestaurantes.length > 0 ? (
          filteredRestaurantes.map((item, index) => (
            <View key={index} style={styles.restauranteContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.nombre}>{item.nombre}</Text>
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
              <Image source={item.imagen} style={styles.imagen} />
            </View>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#d7d03d',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    height:90

    
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f9f8d7",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  restaurantesContainer: {
    flex: 1,
  },
  restauranteContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    padding:3
  },
  imagen: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
});

export default Restaurantes;
