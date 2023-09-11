import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentacion3 = () => {
  const navegacion = useNavigation();
  const pasa = () => { navegacion.navigate("Navigation") }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Tu opinión importa!</Text>
      <Text style={styles.text}>
        En la sección de <Text style={styles.resalto}>Contacto</Text>, puedes proponer algún establecimiento que eches de menos y deseas que se incluya, así como enviarnos tus sugerencias o correcciones. Tu feedback es valioso para nosotros.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={pasa}>
          <Text style={styles.buttonText}>COMENZAR</Text>
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
    justifyContent: 'center',
    width: '100%',
  },
  startButton: {
    backgroundColor: '#33FF77',
    paddingVertical: 10,
    paddingHorizontal: 30,
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

export default Presentacion3;
