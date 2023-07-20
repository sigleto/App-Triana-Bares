2 / 2
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Restaurantes = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
    <View style={styles.estab}>
      <Text style={styles.bar}>LA PARRALA</Text>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/La+Parrala/@37.3824545,-6.0019085,15z/data=!4m5!3m4!1s0x0:0xd99fca132859003!8m2!3d37.3824545!4d-6.0019085")}>
        <Text style={styles.link}>Ubicación</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/la-parrala-r731694#booking")}>
        <Text style={styles.link}>Reserva una mesa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.aeat/wlpl/RHCS-JDIT/HorarioOVP")}>
        <Text style={styles.link}>Estrellas de TripAdvisor</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.estab}>
      <Text style={styles.bar}>LAS GOLONDRINAS 2</Text>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Las+Golondrinas+-+Pag%C3%A9s+del+Corro/@37.3840763,-6.0055876,15z/data=!4m5!3m4!1s0x0:0x9532523f76e64bd0!8m2!3d37.3840811!4d-6.0055642")}>
        <Text style={styles.link}>Ubicación</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("")}>
        <Text style={styles.link}>Reserva una mesa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.aeat/wlpl/RHCS-JDIT/HorarioOVP")}>
        <Text style={styles.link}>Estrellas de TripAdvisor</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.estab}>
      <Text style={styles.bar}>EL ALBOROQUE</Text>
      <TouchableOpacity onPress={() => handleLinkPress("https://github.com/sigleto/paginaweb.git")}>
        <Text style={styles.link}>Ubicación</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/reserve/v/dine/c/nqeAimyFvos?source=pa&hl=es-ES&gei=epXqY8raCoSCkdUPoI6N2A8&sourceurl=http://www.google.es/service/MapsPlaceService/GetPlace?authuser%3D0%26gl%3Des%26hl%3Des%26q%3DAlboroque%2B,Tapas,%2BBar%2BRestaurantes")}>
        <Text style={styles.link}>Reserva una mesa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.co/ShowUserReviews-g187443-d1002508-r785585866-Restaurante_Alboroque-Seville_Province_of_Seville_Andalucia.html")}>
        <Text style={styles.link}>Estrellas de TripAdvisor</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#f6f6e2'
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
  },
});

export default Restaurantes;
