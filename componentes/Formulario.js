import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";


const Formulario = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const [seleccion,setSeleccion]=useState(null)
  const navigation=useNavigation() 
  const accion = async (datos) => {
    try {
      await fetch("https://pagina-react-para-vercel.vercel.app/formulario", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json" }
      });
      alert ('!!!Gracias por tu colaboración¡¡¡')
      reset();
      navigation.navigate("Home")
      setSeleccion(null); // Resetear el estilo del radioButtonSelected
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    } 
  };

  return (
    <>
   
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formulario}>
          <View style={styles.campos}>
            <Text style={styles.enunciados}>Alias</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput style={styles.relleno}
                  placeholder="Introduce tu alias"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="alias"
              
              defaultValue=""
            />
              </View>
          <View style={styles.preferencias}>
            <Text style={styles.enunciados}
            >Preferencias</Text>
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TouchableOpacity onPress={() => {setSeleccion("bares");onChange("bares")}} style={[
                    styles.radioButton,
                    seleccion === "bares" && styles.radioButtonSelected,
                  ]}>
                    <Text style={styles.separo}>Bares, tascas y demás</Text>
                  </TouchableOpacity>
                )}
                name="preferencias"
                
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TouchableOpacity onPress={() => {setSeleccion("restaurantes");onChange("restaurantes")}}style={[
                    styles.radioButton,
                    seleccion === "restaurantes" && styles.radioButtonSelected,
                  ]} >
                    <Text style={styles.separo}>Restaurantes y similares</Text>
                  </TouchableOpacity>
                )}
                name="preferencias"
                
                defaultValue=""
              />
            </View>
          </View>
          <View style={styles.campos}>
            <Text style={styles.enunciados}>E-Mail</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput style={styles.relleno}
                  placeholder="Solo si quieres que te contestemos"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="correo"
              rules={{ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ }}
              defaultValue=""
            /> 
          </View>
          <View style={styles.campos}>
            <Text style={styles.enunciados}>COMENTARIOS</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput style={styles.comentarios}
                  placeholder="Puedes enviar el nombre de un establecimiento que deseas que se incluya,sugerencia o corrección."
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline
                />
              )}
              name="comentarios"
              defaultValue=""
            />
          </View>
        
          <TouchableOpacity style={styles.botonEnviar} onPress={handleSubmit(accion)}>
            <Text style={styles.submitText}>ENVIAR DATOS</Text>
          </TouchableOpacity>
          {errors.alias?.type === "required" && <View><Text>Es obligatorio ingresar un alias</Text></View>}
          {errors.correo?.type === "pattern" && <View><Text>Eso no es un correo válido</Text></View>}
          {errors.preferencias?.type === "required" && <View><Text>Por favor, elige una preferencia</Text></View>}
          
        </View>
        <Image style={styles.imagen} source={require('../assets/pulpo.jpg')} />
      </ScrollView>
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffebcd",
 
   
  },
  formulario: {
   marginTop:100,
   marginBottom:50
  
  
    
  },
  campos: {
    marginBottom: 20,
    
  },
  preferencias: {
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#73f955", // Add your selected color here
    maxWidth:'60%',
    fontSize:15
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  botonEnviar: {
    backgroundColor: "#8a2be2", // Add your submit button color here
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop:40
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
  label: {
    
    marginBottom: 8,
    fontWeight: "bold",
  },
  relleno:{
    backgroundColor:"#f0f8ff"
  },
  comentarios:{
    backgroundColor:"#f0f8ff",
    height:60},
  enunciados:{
      fontSize:17
    },
    separo:{
      color:"blue",
      marginTop:10,
      fontSize:15

    },
    imagen:{
      width: 280,
      height: 160,
     marginBottom:60
    },
    mensaje:{
      color: "green", // Puedes personalizar el color
      fontSize: 18,
      marginTop: 10,
      textAlign: "center",
    }


   
});

export default Formulario;
