import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Linking, ScrollView, TextInput, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { restaurancillos } from "../datos";
import { useNavigation } from "@react-navigation/native";
import PantallaGrande from "../assets/pantallagrande/Pantallagrande";
import { useDatos } from "./Contexto/Provider";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase"; 
import Anuncio from "../anexos/Anuncio";

const Restaurantes = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const [local, setLocal] = useState("");
  const [filteredRestaurantes, setFilteredRestaurantes] = useState(restaurancillos);

  const { datos,setDatos } = useDatos();

  
  const obtenerDatosFirebase = async () => {
    try {
      const votacionesCollection = collection(db, 'votacionesR');
      const snapshot = await getDocs(votacionesCollection);
      const votacionesData = snapshot.docs.map(doc => doc.data());
      // Actualiza el estado local con los datos de votación de Firebase
      // Asumiendo que los datos están en un formato adecuado en Firebase.
      // Actualiza el estado "datosfilteredBares" con los datos de votación
      setDatos(votacionesData[0].datos);
    } catch (error) {
      console.error('Error al obtener los datos de Firebase: ', error);
    }
  };
 
  useEffect(() => {
    obtenerDatosFirebase();
  }, []);

  const restaOrden = datos.slice().sort((a, b) => b.votos - a.votos);

  const buscar = () => {
    const resultado = restaurancillos.filter((item) => item.nombre.toLowerCase().includes(local.toLowerCase()));
    setDatos(resultado);if (resultado==''){alert('No se han encontrado coincidencias')}
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
    <Anuncio/>
      <View style={styles.searchContainer}>
        <TextInput
          value={local}
          placeholder="Busca un restaurante"
          onChangeText={(e) => setLocal(e)}
          style={styles.textInput}
        />
        <Button title="BUSCAR" onPress={buscar} />
      </View>
      <ScrollView style={styles.restaurantesContainer} showsVerticalScrollIndicator={false}>
        {filteredRestaurantes.length > 0 ? (
          restaOrden.map((item, index) => (
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
                <Text style={styles.colorB}>Votos:{item.votos}</Text>
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
    marginTop:30,
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
  colorB:{
    color:"red",
    fontWeight:'bold',
    fontSize:18
  },
});

export default Restaurantes;
