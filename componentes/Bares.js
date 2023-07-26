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
        <TouchableOpacity onPress={() => handleLinkPress("https://www.aeat/wlpl/RHCS-JDIT/HorarioOVP")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.estab}>
        <Text style={styles.bar}>LAS GOLONDRINAS</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/search?tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AB5stBgrAasCeWLoosit2qYfXfxnOIP7Yw:1689944126909&q=las+golondrinas+2&rflfq=1&num=10&rldimm=10750745693018016720&ved=2ahUKEwjxhf-67J-AAxWei_0HHdolA7QQu9QIegQIEhAM#rlfi=hd:;si:10750745693018016720;mv:[[37.384902,-6.0055684],[37.3840296,-6.0055887]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9")}>
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
        <Text style={styles.bar}>EL ALBOROQUE</Text>
        <TouchableOpacity >
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
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.es/search?tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=AB5stBhaEV9oxupxv3Iulg7KLLqQd3zcVA:1689944456361&q=la+blanca+paloma&rflfq=1&num=10&rldimm=9096604268979346244&ved=2ahUKEwjqtYvY7Z-AAxUKUKQEHRArCrQQu9QIegQIERAM#rlfi=hd:;si:9096604268979346244;mv:[[37.425395699999996,-5.9018292],[37.3807165,-6.0595773]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1")}>
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
        <TouchableOpacity >
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
        <TouchableOpacity >
          <Text style={styles.link}>Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.link}>Reserva una mesa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d1738841-Reviews-Vega_10-Seville_Province_of_Seville_Andalucia.html")}>
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>LA COARTADA</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/Restaurant_Review-g187443-d23934279-Reviews-La_Coartada-Seville_Province_of_Seville_Andalucia.html")}>
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
        <TouchableOpacity onPress={() => handleLinkPress("https://www.google.com/maps/reserve/v/dine/c/WfmIeBEOcrQ?source=pa&hl=es-ES&gei=1XmvZJrxI-btkdUPo760uAc&sourceurl=http://www.google.es/service/MapsPlaceService/GetPlace?authuser%3D0%26gl%3Des%26hl%3Des%26q%3DTaberna%2BSol%2By%2BSombra")}>
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
        <TouchableOpacity >
          <Text style={styles.link}>Estrellas de TripAdvisor</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.estab}>
        <Text style={styles.bar}>EL ZERO 10</Text>
        <TouchableOpacity onPress={() => handleLinkPress("https://www.tripadvisor.es/LocationPhotoDirectLink-g187443-d8084486-i237736940-41cero10-Seville_Province_of_Seville_Andalucia.html")}>
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
