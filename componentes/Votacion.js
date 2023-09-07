import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { barecillos } from "../datos";
import { useDatos } from "./Contexto/Provider";
import { db } from "../firebase"; 
import {doc,getDoc,setDoc} from 'firebase/firestore'
//import CookieManager from 'react-native-cookies'


const Votacion = () => {
  const { datos, setDatos } = useDatos()
  const [seleccion, setSeleccion] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [cuenta, setCuenta] = useState(0);
  const { control, handleSubmit } = useForm();





const accion = async () => {

 /* Verifica si el usuario ya ha votado utilizando una cookie
 const hasVotedCookie = await CookieManager.get('hasVoted');

 if (hasVotedCookie.hasVoted === 'true') {
   alert("Ya has emitido un voto.");
   return;
 }
*/
  if (seleccion.length === 3) {
    const subirDatos = barecillos.map((item) => {
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
    const docRef = doc(db, "votaciones", "votosAcumulados");
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
        const docRef = await setDoc(doc(db, "votaciones", "votosAcumulados"), { datos: subirDatos });
        console.log("Document created with accumulated votes: ", docRef.id);
      } catch (e) {
        console.error("Error creating document: ", e);
      }
    }
   /*Establece una cookie para marcar que el usuario ha votado
   await CookieManager.set({
    hasVoted: 'true',
    expirationDate: '365', // La cookie expirará en 365 días
  });
*/
    setSubmitted(true);
  } else {
    alert("Debes seleccionar tres establecimientos.");
  }
};

// Agrega una función para cambiar el estado de selección
const toggleSeleccion = (value) => {
  setSeleccion((prevSeleccion) => ({
    ...prevSeleccion,
    [value]: !prevSeleccion[value], // Invierte el estado de selección
  }));

}
 // establece tres selecciones 
  const seleccionar = (value) => {
    if (seleccion.includes(value)) {
      setSeleccion(seleccion.filter((item) => item !== value));
    } else if (seleccion.length < 3) {
      setSeleccion([...seleccion, value]);
      setCuenta(cuenta + 1);
    }
  };
  useEffect(() => {
    // Llama a ambas funciones después de actualizar el estado de selección
    // Esto asegura que ambas funciones se ejecuten cuando cambie la selección
    barecillos.forEach((item) => {
      if (seleccion[item.nombre]) {
        toggleSeleccion(item.nombre);
        seleccionar(item.nombre);
      }
    });
  }, [seleccion]);



  const mensaje = () => {
    if (cuenta === 1) {
      return "Primera elección";
    } else if (cuenta === 2) {
      return "Segunda elección";
    } else if (cuenta === 3) {
      return "Tercera elección";
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Votaciones</Text>
        <Text style={styles.message}>{mensaje()}</Text>
        <TouchableOpacity onPress={handleSubmit(accion)} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>VOTAR</Text>
        </TouchableOpacity>

        <View style={styles.optionsContainer}>
          {barecillos.map((item, index) => (
            <View key={index} style={styles.option}>
              <Controller
                control={control}
                name={`sitios[${index}]`}
                defaultValue={true}
                render={({ field: { onChange, value } }) => (
                  <TouchableOpacity
                    onPress={() =>{seleccionar(item.nombre)}}
                    style={[
                      styles.optionButton,
                      { backgroundColor: seleccion[item.nombre] ? "green" : "red" },
                    ]}
                    key={value}
                  >
                    <Text style={styles.optionText}>
                      {item.nombre} - {seleccion[item.nombre] ? "No Seleccionado" : "Seleccionado"}
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
    Resultados de Votación:
    {datos.map((item) => (
      <Text key={item.nombre}>
        {item.nombre}: {item.votos} votos
      </Text>
    ))}
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
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  submitButton: {
    margin:'auto',
    width:'20%',
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom:5,
  },
  submitButtonText: {
    
    fontSize: 18,
    color: "#fff",
  },
  submittedText: {
    fontSize: 18,
    color: "green",
    marginTop: 16,
  },
});

export default Votacion;
