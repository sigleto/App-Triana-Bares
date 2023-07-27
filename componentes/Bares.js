import React from "react";
import { View, Text, StyleSheet,Linking,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Bares = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url)};
  const handleCall=(phone) =>{
    Linking.openURL(`tel:${phone}`)} ;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.estab}>
        <Text style={styles.bar}>LA PARRALA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/La+Parrala/@37.3824545,-6.0019085,15z/data=!4m5!3m4!1s0x0:0xd99fca132859003!8m2!3d37.3824545!4d-6.0019085")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/la-parrala-r731694#booking")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/ShowUserReviews-g187443-d25239542-r897227083-La_Parrala-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.estab}>
        <Text style={styles.bar}>LAS GOLONDRINAS</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/place/Las+Golondrinas+-+Pag%C3%A9s+del+Corro/@37.3840805,-6.0081625,17z/data=!3m1!4b1!4m6!3m5!1s0xd126dc7dcdff66d:0x9532523f76e64bd0!8m2!3d37.3840763!4d-6.0055876!16s%2Fg%2F12qh9h80m?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleCall("954333640")}>
          <Text style={styles.link}>Reserva: 954 33 36 40</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d1965505-Reviews-Las_Golondrinas_2-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>EL ALBOROQUE</Text>
        <TouchableOpacity  onPress={()=>handleLinkPress("https://www.google.com/maps/place/Restaurante+Alboroque/@37.3830044,-6.0054374,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c14e0e25e33:0xab8e720a2c6f8429!8m2!3d37.3830002!4d-6.0028625!16s%2Fg%2F1wz53z68?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/reserve/v/dine/c/nqeAimyFvos?source=pa&hl=es-ES&gei=epXqY8raCoSCkdUPoI6N2A8&sourceurl=http://www.google.es/service/MapsPlaceService/GetPlace?authuser%3D0%26gl%3Des%26hl%3Des%26q%3DAlboroque%2B,Tapas,%2BBar%2BRestaurantes")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.co/ShowUserReviews-g187443-d1002508-r785585866-Restaurante_Alboroque-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>LA BLANCA PALOMA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/search/la+blanca+paloma+sevilla/@37.3848248,-5.9992497,13z/data=!3m1!4b1?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleCall("954333640")}>
          <Text style={styles.link}>Reserva: 954 33 36 40</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d2360731-Reviews-Blanca_Paloma-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>CASA DIEGO</Text>
        <TouchableOpacity onPress={()=>handleLinkPress("https://www.google.com/maps/place/Cervecer%C3%ADa+casa+Diego/@37.3808934,-6.0086182,17z/data=!3m1!4b1!4m6!3m5!1s0xd126d511db89839:0x98574522496bc869!8m2!3d37.3808892!4d-6.0060433!16s%2Fg%2F11v0fft1sg?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.link}>No se reserva</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.co/Restaurant_Review-g187443-d6778587-Reviews-or50-Casa_Diego-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>CASA RUPERTO</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Bar+Casa+Ruperto/@37.3819311,-6.0085324,15z/data=!4m6!3m5!1s0xd126c6963bc510d:0xc6d653b3474cfdfc!8m2!3d37.3819311!4d-6.0085324!16s%2Fg%2F1tznnlzk?entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.link}>No se reserva</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d4040632-Reviews-Bar_Casa_Ruperto-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>POR LA BOCA MUERE EL PEZ</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Restaurante+Por+la+boca+muere+el+pez+tapas/@37.3766714,-6.005816,15z/data=!4m2!3m1!1s0x0:0xbb965783ee86fad6?sa=X&ved=2ahUKEwiLlI6pppP9AhXQSKQEHbfFB5YQ_BJ6BQiHARAI")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleCall("625819934")}>
          <Text style={styles.link}>Reserva: 625 81 99 34</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23375731-Reviews-Por_La_Boca_Muere_El_Pez_Tapas-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>VEGA 10</Text>
        <TouchableOpacity onPress={()=>handleLinkPress("https://www.google.com/maps/place/Vega+10/@37.3808012,-6.0022029,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c15fa433273:0x5f9e535f5fb99977!8m2!3d37.380797!4d-5.999628!16s%2Fg%2F1tjh0mng?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity pnPress={()=>handleLinkPress("https://www.thefork.es/restaurante/vega-10-r568901")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d1738841-Reviews-Vega_10-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>LA COARTADA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/place/Restaurante+LA+COARTADA/@37.3805764,-6.0004729,17z/data=!3m1!4b1!4m6!3m5!1s0xd126db599605dcb:0x43ed23237335bd2a!8m2!3d37.3805722!4d-5.997898!16s%2Fg%2F11ptnc61wr?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/la-coartada-r721345#date=2023-07-13&hour=1290&partySize=2")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23934279-Reviews-La_Coartada-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>GASCONA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Gascona/@37.3867464,-6.0048046,15z/data=!4m2!3m1!1s0x0:0x4ec5e366e3ccb3fa?sa=X&ved=2ahUKEwjrkPqV6IqAAxVCTqQEHYEkDuIQ_BJ6BAhPEAA&ved=2ahUKEwjrkPqV6IqAAxVCTqQEHYEkDuIQ_BJ6BAhjEAg")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/gascona-r726404#date=2023-07-13&hour=1230&partySize=2")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23788283-Reviews-Gascona-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>SOL Y SOMBRA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/place/Taberna+Sol+y+Sombra/@37.3891339,-6.0124763,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c6e0b1d1e67:0x1442a5b988d62cd1!8m2!3d37.3891297!4d-6.0099014!16s%2Fg%2F1tg87xv7?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.thefork.es/restaurante/sol-y-sombra-r17946#date=2023-07-13&hour=1260&partySize=2")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d1153685-Reviews-Sol_y_Sombra-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>CASA REMESAL</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/maps/place/Bar+Casa+Remesal/@37.3837026,-6.0009529,15z/data=!4m2!3m1!1s0x0:0xd1d4aff642c0d6fe?sa=X&ved=2ahUKEwiF3Kyd6oqAAxWzVaQEHa01Af0Q_BJ6BAhOEAA&ved=2ahUKEwiF3Kyd6oqAAxWzVaQEHa01Af0Q_BJ6BAhgEAg")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleCall("608615846")}>
          <Text style={styles.link}>Reserva: 608 61 58 46</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d2341423-Reviews-Casa_Remesal-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>EL ZERO 10</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/place/El+Zero10/@37.3809224,-6.0079922,17z/data=!3m1!4b1!4m6!3m5!1s0xd126c6ac82eabf1:0xaec18fbd2ce9ccde!8m2!3d37.3809182!4d-6.0054173!16s%2Fg%2F11b7lplp84?authuser=0&entry=ttu")}>
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://elzero10.com/reservas/")}>
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/LocationPhotoDirectLink-g187443-d8084486-i237736940-41cero10-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
         </View>
         </ScrollView>
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
    marginTop:20
  },
});

export default Bares;
