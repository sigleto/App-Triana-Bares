import React,{useState} from "react";
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import *as WebBrowser from 'expo-web-browser'

const Establecimientos = () => {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  const año = fecha.getFullYear();

  const navigation = useNavigation();

  const url_cena = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-0${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=1290&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;
  const url_comida = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-0${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=840&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;

  const [result, setResult] = useState(null);

  const handleComidaPress =async() =>
   {let result= await WebBrowser.openBrowserAsync(url_comida);setResult(result)};
   
  const handleCenaPress =async() =>
   {await WebBrowser.openBrowserAsync(url_cena)};
   

  

  return (
    <View style={styles.container}>
      <View style={styles.hora}>
        <Text>
          Antes de entrar en materia, consulta la disponibilidad para hoy:
        </Text>
        <TouchableOpacity onPress={handleComidaPress}>
          <Text style={styles.disponible}>Con disponibilidad para comida</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCenaPress}>
          <Text style={styles.disponible}>Con disponibilidad para cena</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Elige categoría:</Text>
      <View style={styles.lista}>
        <TouchableOpacity onPress={() => navigation.navigate("Bares")}>
          <Text>BARES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Restaurantes")}>
          <Text>RESTAURANTES</Text>
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
  },
  hora: {
    marginBottom: 16,
  },
  disponible: {
    marginVertical: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  lista: {
    alignItems: "center",
  },
});

export default Establecimientos;
