import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { restaurancillos } from "../../datos";
import { useDatos } from "../Contexto/Provider";
import { db } from "../../firebase"; 
import {doc,getDoc,setDoc,collection,addDoc} from 'firebase/firestore'
import { obtenerDireccionIPDelUsuario,verificarSiLaDireccionIPYaHaVotadoR,registrarVotoEnBaseDeDatosR } from "../ObtenerIP";
import { useNavigation } from '@react-navigation/native';


const VotacionR = () => {
  const { datos, setDatos } = useDatos()
  const [seleccion, setSeleccion] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [cuenta, setCuenta] = useState(0);
  const { control, handleSubmit } = useForm();
  


  const navigation = useNavigation();




    const accion = async () => {

 // Obtener la dirección IP del usuario
 const userIP = await obtenerDireccionIPDelUsuario();
 if (!userIP) {
   return; // Salir si no se pudo obtener la dirección IP
 }

 // Verificar si la dirección IP ya ha votado
 const haVotado = await verificarSiLaDireccionIPYaHaVotadoR(userIP);
 if (haVotado) {
   alert('Ya habías votado anteriormente.');
   navigation.navigate('Home');
   return;
 }

  if (seleccion.length === 3) {
    const subirDatos = restaurancillos.map((item) => {
      const nombre = item.nombre;
      const votos = seleccion.includes(nombre)
        ? seleccion.indexOf(nombre) === 0
          ? Number(item.votos + 3)
          : seleccion.indexOf(nombre) === 1
          ? Number(item.votos + 2)
          : Number(item.votos + 1)
        : item.votos;

      return { ...item, votos };
    });

    // Actualiza los datos locales
    setDatos([...subirDatos]);

    // Verifica si el documento "votosAcumulados" existe
    const docRef = doc(db, "votacionesR", "votosAcumulados");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Si existe, obtén los votos acumulados existentes
      const existingData = docSnap.data();

      // Actualiza los votos acumulados sumándolos a los nuevos votos
      const newData = subirDatos.map((item) => {
        const existingItem = existingData.datos.find((d) => d.nombre === item.nombre);
        if (existingItem) {
          return { ...item, votos: item.votos + existingItem.votos };
        } else {
          return item;
        }
      });

      // Actualiza el documento con los nuevos datos acumulados
      try {
        await setDoc(docRef, { datos: newData });
        console.log("Document updated with accumulated votes");
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    } else {
      // Si no existe, crea un nuevo documento
      try {
        const docRef = await setDoc(doc(db, "votacionesR", "votosAcumulados"), { datos: subirDatos });
        console.log("Document created with accumulated votes: ", docRef.id);
      } catch (e) {
        console.error("Error creating document: ", e);
      }
    }
     // Registrar el voto en la base de datos junto con la dirección IP
     registrarVotoEnBaseDeDatosR(userIP, seleccion);
    setSubmitted(true);
  } else {
    alert("Debes seleccionar tres establecimientos.");
  }
};


 // establece tres selecciones 
 const seleccionar = (value) => {
  if (seleccion.includes(value)) {
    setSeleccion(seleccion.filter((item) => item !== value));
  } else if (seleccion.length < 3) {
    setSeleccion([...seleccion, value]);
  }
};




  return (
    <View style={styles.container}>
      <ScrollView>
        
      
        <TouchableOpacity onPress={handleSubmit(accion)} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>VOTAR</Text>
        </TouchableOpacity>

        <View style={styles.optionsContainer}>
          {restaurancillos.map((item, index) => (
            <View key={index} style={styles.option}>
              <Controller
                control={control}
                name={`sitios[${index}]`}
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
          <TouchableOpacity
          onPress={() => seleccionar(item.nombre, index)}
          style={[
            styles.optionButton,
            seleccion.includes(item.nombre) && { backgroundColor: 'red' },,
          ]}
        >
          <Text style={styles.optionText}>
            {item.nombre}
          </Text>
        </TouchableOpacity>
                )}
              />
            </View>
          ))}
        </View>
       
      </ScrollView>
      {submitted && (
  <Text style={styles.submittedText}>
     
   ¡¡ GRACIAS POR VOTAR !!
  </Text>
)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: "row", // Cambiar de columna (valor predeterminado) a fila
    flexWrap: "wrap", // Envolver elementos a la siguiente fila
    justifyContent: "space-between", // Espacio uniforme entre elementos
  },
  option: {
    width:'48%',
    marginBottom: 8,
  },
  optionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor:"#02970b",
    textAlign:'center',
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  submitButton: {
    marginLeft:'30%',
    width:'40%',
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom:5,
    marginTop:10,
  },
  submitButtonText: {
    
    fontSize: 18,
    color: "#fff",
  },
  submittedText: {
    fontSize: 20,
    color: "green",
    marginTop: 16,
  },
});

export default VotacionR;
