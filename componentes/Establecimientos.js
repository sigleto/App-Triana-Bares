import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet} from "react-native";
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
   

   useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Ocultar la barra de navegación en la pantalla Establecimi
    });
  }, []);
  

  return (
    
    <View style={styles.container}>
     
      
      <View style={styles.hora}>
        <Text style={styles.texto}>
          Antes de entrar en materia, puedes consultar en "thefork.es" la disponibilidad para hoy en Triana:
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
      
    </View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor:'#faf9ec'
  },
  hora: {
    marginBottom: 16,
    marginTop:70
  },
  disponible: {
    marginVertical: 8,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop:70
  },
  lista: {
    alignItems: "center",
    marginTop:30,
    
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
