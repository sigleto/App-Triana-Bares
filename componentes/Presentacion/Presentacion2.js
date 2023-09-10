import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion2=()=>{
const navegacion=useNavigation();
const pasa=()=>{ navegacion.navigate("Presentacion3")}
const salto=()=>{ navegacion.navigate("Navigation")}


return (
    <View style={styles.container}>
      <Text style={styles.text}>
      También se ofrecemos la opción de votar por tus bares o restaurantes favoritos. En este caso, podrás votar por hasta <Text style={styles.resalto}>tres establecimientos</Text>, otorgándose tres puntos al primer elegido, dos puntos al segundo y un punto al tercero. Las relaciones respectivas se ordenarán por orden de votos recibidos
      </Text>
      <View style={styles.buttonContainer}>
        <Button title={'SALTAR'} onPress={salto} style={styles.button} />
        <Button title={'SIGUIENTE'} onPress={pasa} style={styles.button} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor:'#DAF7A6'
    },
    text: {
      fontSize: 38,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 40,
      
    },
    button: {
      width: '40%',
      
    },
    resalto:{
        fontWeight:'bold',
        color:'#f54f3c'
    }
  });
  
export default Presentacion2