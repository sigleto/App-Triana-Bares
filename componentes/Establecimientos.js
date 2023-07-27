import React,{useState} from "react";
<<<<<<< HEAD
import { View, Text, StyleSheet,ImageBackground} from "react-native";
=======
import { View, Text, StyleSheet,ScrollView} from "react-native";
>>>>>>> e9a41cc9e182331801929f47ec5cf51ea361bbb5
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import *as WebBrowser from 'expo-web-browser'

const Establecimi = () => {
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
        <Text style={styles.texto}>
          Antes de entrar en materia, puedes consultar en "thefork.es" la disponibilidad para hoy:
        </Text>
        <TouchableOpacity onPress={handleComidaPress}>
          <Text style={styles.link}>Con disponibilidad para comida</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCenaPress}>
          <Text style={styles.link}>Con disponibilidad para cena</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Elige categoría:</Text>
      <View style={styles.lista}>
        <TouchableOpacity onPress={() => navigation.navigate("Bares")}>
          <Text style={styles.link}>BARES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Restaurantes")}>
          <Text style={styles.link}>RESTAURANTES</Text>
        </TouchableOpacity>
      </View>
<<<<<<< HEAD
      
    </View>
=======
      </View>
>>>>>>> e9a41cc9e182331801929f47ec5cf51ea361bbb5
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor:'#f4d03f'
  },
  hora: {
    marginBottom: 16,
  },
  disponible: {
    marginVertical: 8,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop:50
  },
  lista: {
    alignItems: "center",
  },
  link: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
    marginTop:20,
  
    
  },
  texto:{
    fontSize:19,
    marginTop:-100,
    textAlign: 'justify',
    fontWeight:700
  } ,
 
});

export default Establecimi;
