import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion3=()=>{
const navegacion=useNavigation();
const pasa=()=>{ navegacion.navigate("Navigation")}


return (
    <View style={styles.container}>
      <Text style={styles.text}>
      En la sección de <Text style={styles.resalto}>Contacto</Text> puedes proponer algún establecimiento que eches de menos y deseas que se incluya, así como sugerencias o correcciones
      </Text>
      <View style={styles.buttonContainer}>
        
        <Button title={'COMENZAR'} onPress={pasa} style={styles.button} />
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
  
    button: {
      width: 'auto',
      
    },
    resalto:{
        fontWeight:'bold',
        color:'#f54f3c'
    }
  });
export default Presentacion3