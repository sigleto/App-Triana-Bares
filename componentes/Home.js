import React,{useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,Linking,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Reloj from "../anexos/reloj";
import { Audio } from "expo-av";
const Home = () => {

  const navigation = useNavigation();
/*
  //Para el sonido:
  const [sound, setSound] = useState();

  async function playSound() {
    
    const { sound } = await Audio.Sound.createAsync( require('../assets/bensound-sunny.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    await sound.setVolumeAsync(0.1);
    await sound.setIsLoopingAsync(true);
  }

  useEffect(() => {
    // Reproducir el sonido al entrar en el componente
    playSound();

    // Limpiar al salir del componente
    return () => {
      if (sound) {
        console.log('Silenciando');
        sound.unloadAsync();
      }
    };
  }, []);
*/
  const politica=(url)=>{Linking.openURL(url)}
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.imagenes}>
      <Image style={styles.logo} source={require('../assets/LogoJuan.png')} />
      <Image style={styles.imagen} source={require('../assets/principal.webp')} />
      </View>
      <View style={styles.parrafo}>
        <Text style={styles.per}>
        Aquí tienes una lista de establecimientos gastronómicos ubicados en el barrio de TRIANA, categorizados como "BARES" y "RESTAURANTES".
        Todos los restaurantes de la lista aceptan reservas, aunque no todos los bares lo hacen.
        Además, todos los lugares catalogados como bares ofrecen tapas, mientras que algunos restaurantes también las sirven
        En la sección <Text style={styles.resalto}>Contacto</Text> puedes proponer algún establecimiento que deseas que se incluya.
        </Text>
      </View>
      <Reloj/>
      <View style={styles.privacidadContainer}>
        <TouchableOpacity onPress={() => politica("https://docs.google.com/document/d/e/2PACX-1vReYGEVk4kZ5cqO3H0zEuaFEHcGR_UJTSCOwajN8E6biLIPNon6-g-RyJzgFy7CFXngL4VvBue_IbpI/pub?embedded=true")}>
          <Text style={styles.privacidad}>Política de privacidad</Text>
        </TouchableOpacity>
      </View>
     </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#f6f6e2'
  },
  logo: {
    
    width: 250,
    height: 170,
  },
  imagen: {
    width: 250,
    height: 160,
  },
  parrafo: {
    marginTop: 20,
  },
  per: {
    fontSize: 16,
    textAlign: 'justify',
  },
  link: {
    fontSize:18,
    color: 'blue',
    
  },
  imagenes:{
    marginTop:10
  },
  privacidad:{
    fontSize:8
  }, privacidadContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 8,
  },
  resalto:{
    fontSize:17,
    color:'#048c16',
    fontStyle:'italic'
  }
});

export default Home;
