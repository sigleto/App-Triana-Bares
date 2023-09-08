import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Swiper from 'react-native-swiper';

const PresentationScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 2) {
      // Si no es la última pantalla, pasa a la siguiente
      setCurrentIndex(currentIndex + 1);
    } else {
      // Si es la última pantalla, navega a la siguiente pantalla o componente principal
      navigation.navigate('Home'); // Cambia 'Main' al nombre de tu componente principal
    }
  };

  const presentationTexts = [
    'Aquí encontrarás una relación de establecimientos gastronómicos ubicados en el barrio de Triana, categorizados como “BARES” y “RESTAURANTES”. Todos los restaurantes de la lista aceptan reservas, aunque no todos los bares lo hacen. Así mismo, todos los lugares catalogados como bares ofrecen tapas, mientras que algunos restaurantes también las sirven.',
    'También ofrecemos la opción de votar por tus bares o restaurantes favoritos. En este caso, podrás votar por hasta tres establecimientos, otorgándose tres puntos al primero elegido, dos puntos al segundo y un punto al tercero. Las relaciones respectivas se ordenarán por orden de votos recibidos.',
    'En la sección de contacto puedes proponer algún establecimiento que eches de menos y deseas que se incluya, así como sugerencias o correcciones.',
  ];

  return (
    <Swiper loop={false} showsPagination={false} index={currentIndex}>
      {presentationTexts.map((text, index) => (
        <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{text}</Text>
          <Button title={index === 2 ? 'Comenzar' : 'Siguiente'} onPress={handleNext} />
        </View>
      ))}
    </Swiper>
  );
};

export default PresentationScreen;
