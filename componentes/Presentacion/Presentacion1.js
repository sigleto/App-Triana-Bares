import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion1 = () => {
  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Presentacion2") }
  const salto = () => { navegacion.navigate("Navigation") }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Triana Gastronómica</Text>
      <Text style={styles.text}>
        Descubre una variedad de locales gastronómicos en el encantador barrio de Triana, categorizados como "BARES" y "RESTAURANTES". Todos los restaurantes aceptan reservas, aunque no todos los bares lo hacen. Por otro lado, en todos los bares puedes pedir tapas, aunque en los restaurantes esta opción depende del establecimiento.
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
});

export default Presentacion1;
