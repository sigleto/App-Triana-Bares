import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Reloj = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(horas, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function horas() {
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    if (hora < 10) {
      hora = '0' + hora;
    }
    if (minutos < 10) {
      minutos = '0' + minutos;
    }
    if (segundos < 10) {
      segundos = '0' + segundos;
    }
    let horaActual = `${hora} : ${minutos} : ${segundos}`;
    setTime(horaActual);
  }

  return (
    <View>
      <TextInput style={styles.reloj} value={time}accessibilityLabel="Reloj en tiempo real" />
    </View>
  );
};

const styles = StyleSheet.create({
  reloj: {
    fontSize: 20,
    width: '100%',
    borderColor:'magenta',
    backgroundColor:"#f0e29c",
    marginTop:10
  

  },
});

export default Reloj;
