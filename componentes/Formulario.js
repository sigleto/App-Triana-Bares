import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from "react-native";
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
      console.log("Datos enviados correctamente");
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
              rules={{ required: true }}
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
                rules={{ required: true }}
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
                rules={{ required: true }}
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
                  placeholder="Introduce tu email"
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
                  placeholder="Puedes enviar el nombre un establecimiento que deseas que se incluya."
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
      </View>
<<<<<<< HEAD
      
    </>
=======
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Preferencias</Text>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setPreferencias("bares")}
        >
          <Text style={styles.subLabel}>Bares, tascas y demás</Text>
          <Text style={preferencias === "bares" ? styles.selectedOption : styles.unselectedOption}>
            {preferencias === "bares" ? "✓" : ""}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setPreferencias("restaurantes")}
        >
          <Text style={styles.subLabel}>Restaurantes y similares</Text>
          <Text style={preferencias === "restaurantes" ? styles.selectedOption : styles.unselectedOption}>
            {preferencias === "restaurantes" ? "✓" : ""}
          </Text>
          
        </TouchableOpacity>
        
        {errors.preferencias?.type === "required" && (
          <Text style={styles.errorText}>Por favor, elige una preferencia</Text>
        )}
        
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-Mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu email"
          {...register("correo", {
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
          })}
        />
        {errors.correo?.type === "pattern" && (
          <Text style={styles.errorText}>Eso no es un correo válido</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>COMENTARIOS</Text>
        <TextInput
          style={styles.inputComentario}
          placeholder='Puedes enviar un establecimiento que deseas que se incluya. Solo escribe el nombre'
          {...register("comentarios")}
        />
      </View>
      <Button title="ENVIAR DATOS" onPress={handleSubmit(accion)} />
    </View>
>>>>>>> e9a41cc9e182331801929f47ec5cf51ea361bbb5
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
   marginTop:70,
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
    backgroundColor: "#7fffd4", // Add your selected color here
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
<<<<<<< HEAD
    borderRadius: 4,
    padding: 10,
=======
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    
>>>>>>> e9a41cc9e182331801929f47ec5cf51ea361bbb5
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
<<<<<<< HEAD
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
      marginTop:10

    },
    imagen:{
      width: 280,
      height: 160,
     marginBottom:60
    }


   
=======
  inputComentario: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height:120
    
  }

>>>>>>> e9a41cc9e182331801929f47ec5cf51ea361bbb5
});

export default Formulario;
