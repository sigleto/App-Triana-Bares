import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion2 = () => {
  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Presentacion3") }
  const salto = () => { navegacion.navigate("Navigation") }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Vota por tus favoritos!</Text>
      <Text style={styles.text}>
        También te ofrecemos la opción de votar por tus bares o restaurantes favoritos. En este caso, podrás votar por hasta <Text style={styles.resalto}>tres establecimientos</Text>. Se otorgarán tres puntos al primer elegido, dos puntos al segundo y un punto al tercero. Las relaciones respectivas se ordenarán por orden de votos recibidos.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={salto}>
          <Text style={styles.buttonText}>SALTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={pasa}>
          <Text style={styles.buttonText}>SIGUIENTE</Text>
        </TouchableOpacity>
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
    backgroundColor: '#DAF7A6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  skipButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#33FF77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resalto: {
    fontWeight: 'bold',
    color: '#f54f3c',
  },
});

export default Presentacion2;
