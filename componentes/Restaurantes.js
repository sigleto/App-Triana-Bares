2 / 2
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Restaurantes = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
<View style={styles.estab}>
    <Text style={styles.bar}>VICTORIA 8</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Restaurante+Victoria+8/@37.3830354,-6.0025717,15z/data=!4m5!3m4!1s0x0:0x8f72e73773904258!8m2!3d37.3830832!4d-6.0027072")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://module.thefork.com/es_ES/module/21282-fa7d6/9390-6aa?tracking_id=a93bf61a-ad12-4368-aa70-2740bd12da88")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d2261643-Reviews-Victoria_8-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>CAS MONTALVAN</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Alfarer%C3%ADa+21+-+Casa+Montalv%C3%A1n/@37.385251,-6.0060092,18z/data=!4m5!3m4!1s0xd126dcc91390a41:0x822a8a2a0246d830!8m2!3d37.3847906!4d-6.0049599?hl=es&authuser=0")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.link}>Reserva: Tfno 955 83 48 75 </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d14953628-Reviews-Alfareria_21-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>MARIA TRIFULCA</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d14953628-Reviews-Alfareria_21-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://mariatrifulca.com/#reservas")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d11549017-Reviews-Mariatrifulca-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>LA PRIMERA DEL PUENTE</Text>
    <TouchableOpacity onPress={() => handleLinkPress("")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("")}>
      <Text style={styles.link}>Reservas: Tfno 954276918</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23498957-Reviews-La_Primera_del_Puente-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>RESTAURANTE EL SELLA</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Restaurante+El+Sella+Triana+(Sevilla)/@37.384839,-6.0055886,567m/data=!3m1!1e3!4m5!3m4!1s0xd126d623bfa8ddb:0x828b4d5913d3f96f!8m2!3d37.3848113!4d-6.0027415?hl=es&authuser=0")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/restaurante-tapas-el-sella-r584393/menu")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d15534171-Reviews-Restaurante_tapas_El_Sella-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>EL PANZÓN</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Bar+restaurante+El+Panzon/@37.3808831,-6.0149063,15z/data=!4m9!1m2!2m1!1srestaurantes!3m5!1s0xd126d39f18fe35d:0xccd78392e8a9c9ee!8m2!3d37.3754072!4d-6.0048813!15sCgxyZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgENYmFyX2FuZF9ncmlsbOABAA?hl=es&authuser=0")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.elpanzon.es/reserva/")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d17593568-Reviews-Restaurante_El_Panzon-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>RINCONETE Y CORTADILLO</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Restaurante+RICO+Rinconete+y+Cortadillo/@37.3835762,-6.0051456,401m/data=!3m1!1e3!4m9!1m2!2m1!1srestaurantes!3m5!1s0xd126d7a8b45d8b3:0xe654e565a7099026!8m2!3d37.3839673!4d-6.0045634!15sCgxyZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNMk5qUm1kRzlCUlJBQuABAA?hl=es&authuser=0")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://ricorinconeteycortadillo.com/")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23482813-Reviews-Rico_rinconete_Y_Cortadillo-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>LA VALIENTE</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Restaurante+La+Valiente/@37.3846631,-6.0068482,674m/data=!3m1!1e3!4m9!1m2!2m1!1srestaurantes!3m5!1s0xd126d5178eef11d:0x971ff821e0cb903f!8m2!3d37.3847009!4d-6.0041434!15sCgxyZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VObE5EVkRiVFJSUlJBQuABAA?hl=es&authuser=0")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity >
      <Text style={styles.link}>Reserva: Tfno:  955 46 73 00</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>ARROCERÍA CRIAÍTO</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Arrocer%C3%ADa+Criaito+Triana/@37.3856463,-6.0032357,15z/data=!4m2!3m1!1s0x0:0x1a797f02f63d895e?sa=X&ved=2ahUKEwiogObB_YuAAxXaiP0HHZo_BdcQ_BJ6BAhOEAA&ved=2ahUKEwiogObB_YuAAxXaiP0HHZo_BdcQ_BJ6BAhqEAg")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("")}>
      <Text style={styles.link}>Reserva: Tfno 680 70 84 39</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d10721760-Reviews-Arroceria_Criaito_Triana-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>SAHONA TRIANA</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Saona+Triana/@37.3829696,-6.0045468,15z/data=!4m2!3m1!1s0x0:0xabbd62ee206cc792?sa=X&ved=2ahUKEwjDzNPe_ouAAxXziv0HHfbnAc0Q_BJ6BAhLEAA&ved=2ahUKEwjDzNPe_ouAAxXziv0HHfbnAc0Q_BJ6BAhhEAg")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("")}>
      <Text style={styles.link}>Reserva: Tfno 954 66 76 04</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23685089-Reviews-Saona_Triana-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>ASADOR ATAHUALPA</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Atahualpa/@37.3789583,-6.0009944,15z/data=!4m2!3m1!1s0x0:0x95cb20765fe398b?sa=X&ved=2ahUKEwjJxubm_4uAAxWWtqQKHZgKAR8Q_BJ6BAhHEAA&ved=2ahUKEwjJxubm_4uAAxWWtqQKHZgKAR8Q_BJ6BAhoEAg")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/parrilla-argentina-atahualpa-r14396")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d4433546-Reviews-Atahualpa-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>
<View style={styles.estab}>
    <Text style={styles.bar}>MESÓN CASA LUCIANO</Text>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Mes%C3%B3n+Casa+Luciano/@37.3794444,-6.0008333,15z/data=!4m2!3m1!1s0x0:0x8fc31191f572feeb?sa=X&ved=2ahUKEwigg8jKgIyAAxXLGewKHbRgCrQQ_BJ6BAhLEAA&ved=2ahUKEwigg8jKgIyAAxXLGewKHbRgCrQQ_BJ6BAhlEAg")}>
      <Text style={styles.link}>Ubicación</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/meson-casa-luciano-r36392")}>
      <Text style={styles.link}>Reserva una mesa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d3876780-Reviews-Meson_Casa_Luciano-Seville_Province_of_Seville_Andalucia.html")}>
      <Text style={styles.link}>Estrellas de TripAdvisor</Text>
    </TouchableOpacity>
  </View>

  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#f6f6e2'
  },
  estab: {
    marginBottom: 16,
  },
  bar: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Restaurantes;
