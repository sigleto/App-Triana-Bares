import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion1=()=>{
const navegacion=useNavigation();
const pasa=()=>{ navegacion.navigate("Presentacion2")}
const salto=()=>{ navegacion.navigate("Navigation")}

return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Aquí encontrarás una relación de establecimientos gastronómicos ubicados en el barrio de Triana, categorizados como “BARES” y “RESTAURANTES”. Todos los restaurantes de la lista aceptan reservas, aunque no todos los bares lo hacen. Así mismo, todos los lugares catalogados como bares ofrecen tapas, mientras que algunos restaurantes también las sirven
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
  });
  

export default Presentacion1