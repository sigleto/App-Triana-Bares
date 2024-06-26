import React,{useState,useEffect,useRef} from "react";
import { View, Text, StyleSheet,ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import *as WebBrowser from 'expo-web-browser';
import LottieView from 'lottie-react-native';
import { Platform } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


const Establecimi = () => {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  const año = fecha.getFullYear();
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-6921150380725872/8908530226';
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
     
      <ScrollView>
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
      <View style={styles.animationContainer}>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
            // Código de LottieView
            <LottieView
              source={require("../assets/tenedores1.json")} // Reemplaza con la ruta a tu archivo de animación Lottie
              autoPlay
              loop
              style={styles.animation}
            />
          ) : null}
      </View>

      <View style={styles.lista}>
        <TouchableOpacity onPress={() => navigation.navigate("Bares")}>
          <Text style={styles.link}>BARES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Restaurantes")}>
          <Text style={styles.link}>RESTAURANTES</Text>
        </TouchableOpacity>
      </View>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
      </ScrollView>
    </View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor:'#f6feee'
  },
  hora: {
    marginBottom: 16,
    marginTop:130
  },
  disponible: {
    marginVertical: 8,
  },
  heading: {
    fontSize: 25,
    marginBottom: 8,
    marginTop:50,
    marginLeft:70
    
  },
  lista: {
    alignItems: "center",
    marginTop:30,
    display:'flex',
    flexDirection:'row',
   marginLeft:40,
    
  },
  link: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
    marginTop:20,
    padding:3,
    marginLeft:15
  
    
  },
  texto:{
    fontSize:19,
    marginTop:-100,
    textAlign: 'justify',
    fontWeight:'bold',
  } ,

  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
  animationContainer: {
    backgroundColor: '#fff',    
    
    width: '50%', // Ajusta el ancho del contenedor
    height: '25%', // Ajusta la altura del contenedor
    marginLeft:80
  
  },
  
  animation: {
    width: 200, // Ajusta el ancho de la animación
    height: 200, // Ajusta la altura de la animación
    marginLeft:-10
  },
});

export default Establecimi;
