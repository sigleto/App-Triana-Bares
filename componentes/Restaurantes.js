import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, ScrollView, TextInput, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { restaurancillos } from "../datos";
import { useNavigation } from "@react-navigation/native";
import PantallaGrande from "../assets/pantallagrande/Pantallagrande";

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
  const navigation=useNavigation()

  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const [fullScreenImageUrl, setFullScreenImageUrl] = useState("");

  const handleImageClick = (imageUri) => {
    setFullScreenImageUrl(imageUri);
    setShowFullScreenImage(true);
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
                <TouchableOpacity
                   onPress={() => {
                    if (item.carta.includes(".jpg") || item.carta.includes(".png")){
                    navigation.navigate("CartaScreen", { bar: item});
                    }
                                                              
                     else if (item.carta.includes("https")) {
                      handleLinkPress(item.carta);
                    }
                  }}
                >
                  <Text style={styles.link}>Carta</Text>
                  </TouchableOpacity>  
              </View>
              <TouchableOpacity onPress={() => handleImageClick(item.imagen)}>
                <Image source={item.imagen} style={styles.imagen} />
              </TouchableOpacity>
             
            </View>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </ScrollView>
      {showFullScreenImage && (
        <PantallaGrande imageUrl={fullScreenImageUrl} onClose={() => setShowFullScreenImage(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f6e2',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f4e93f",
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
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom:6
  },
  imagen: {
    width: 180,
    height: 180,
    marginLeft: 20,
  },
});

export default Restaurantes;
