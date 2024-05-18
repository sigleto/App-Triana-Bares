import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ZoomableImage from '../assets/ImagenZoom/ZoomImage';

const fotos = [
  { nombre: "CASA OLIVA", carta: [require('../assets/menus/cartaCasaOliva.jpg')] },
  { nombre: "LA COCINA DEL TRACA", carta: [require('../assets/menus/cartaLaCocinadelTraca.jpg')] },
  { nombre: "CERVECERÍA LA GRANDE", carta: [require('../assets/menus/cartaLaGrande.jpg')] },
  { nombre: "SALOMON", carta: [require('../assets/menus/cartaSalomon.jpg')] },
  { nombre: "TIPICO", carta: [require('../assets/menus/cartaTipico.jpg')] },
  { nombre: "CASA MONTALVAN", carta: [require('../assets/menus/cartaMontalvan.jpg')] },
  { nombre: "JOSE LUÍS", carta: [require('../assets/menus/cartaJoseLuis.jpg')] },
  { nombre: "CASA DIEGO", carta: [require('../assets/menus/cartaCasaDiego.jpg')] },
  { nombre: "CASA REMESAL", carta: [require('../assets/menus/cartaCasaRemesal.jpg')] },
  { nombre: "CASIMIRO", carta: [require('../assets/menus/cartaCasimiro.jpg')] },
  { nombre: "JUAN CARLOS", carta: [require('../assets/menus/cartaJuanCarlos.jpg')] },
  { nombre: "LA BLANCA PALOMA", carta: [require('../assets/menus/cartaLaBlancaPaloma.jpg')] },
  { nombre: "LAS GOLONDRINAS", carta: [require('../assets/menus/cartaLasGolondrinas.jpg')] },
  { nombre: "PURATASCA", carta: [require('../assets/menus/cartaPuratasca.jpg')] },
  { nombre: "MIAMI", carta: [require('../assets/menus/CartaMiami.jpg')] },
  { nombre: "PERIQUI CHICO", carta: [require('../assets/menus/cartaPeriquiChico1.png'), require('../assets/menus/cartaPeriquiChico1.png')] },
  { nombre: "LA VALIENTE", carta: [require('../assets/menus/cartaLaValiente1.jpg'), require('../assets/menus/cartaLaValiente2.jpg')] },
  { nombre: "LA CORVINA", carta: [require('../assets/menus/CartaLaCorvina.png')] },
  { nombre: "BRUTAL", carta: [require('../assets/menus/cartaBrutal.jpg')] },
  { nombre: "AMARRA", carta: [require('../assets/menus/cartaAmarra.jpg')] },
];

const CartaScreen = ({ route }) => {
  const { bar } = route.params;

  const fotoBar = fotos.find((foto) => foto.nombre === bar.nombre);

  if (fotoBar) {
    return (
      <View style={styles.container}>
        {fotoBar.carta.map((imagen, index) => (
          <ZoomableImage source={imagen} key={index} />
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Imagen no encontrada</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartaScreen;
