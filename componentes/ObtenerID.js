import { db } from '../firebase';
import {doc,getDocs,setDoc,collection,addDoc} from 'firebase/firestore'
import publicIP from 'react-native-public-ip';

//FUNCIONES RELATIVAS A DIRECCION IP
// Función para obtener la dirección IP del usuario
export const obtenerDireccionIPDelUsuario = async () => {
    try {
      const userIP = await publicIP();
      return userIP;
    } catch (error) {
      console.error('Error al obtener la IP del usuario:', error);
      return null;
    }
  };
  // Función para verificar si la dirección IP ya ha votado bares
  export const verificarSiLaDireccionIPYaHaVotado = async (userIP) => {
    try {
      const votosCollection = collection(db, 'votos'); // Cambia 'votos' al nombre de tu colección de votos
      const querySnapshot = await getDocs(votosCollection);
      
      // Verifica si la dirección IP ya existe en la colección de votos
      return querySnapshot.docs.some((doc) => doc.data().ip === userIP);
    } catch (error) {
      console.error('Error al verificar si la dirección IP ya ha votado:', error);
      return false;
    }
  };

  // Función para verificar si la dirección IP ya ha votado restaurantes
  export const verificarSiLaDireccionIPYaHaVotadoR = async (userIP) => {
    try {
      const votosCollection = collection(db, 'votosR'); // Cambia 'votos' al nombre de tu colección de votos
      const querySnapshot = await getDocs(votosCollection);
      
      // Verifica si la dirección IP ya existe en la colección de votos
      return querySnapshot.docs.some((doc) => doc.data().ip === userIP);
    } catch (error) {
      console.error('Error al verificar si la dirección IP ya ha votado:', error);
      return false;
    }
  };
  
  // Función para registrar el voto en la base de datos bares
  export const registrarVotoEnBaseDeDatos = async (userIP, seleccion) => {
    try {
      const votosCollection = collection(db, 'votos'); // Cambia 'votos' al nombre de tu colección de votos
      await addDoc(votosCollection, {
        ip: userIP,
        seleccion: seleccion,
      });
      console.log('Voto registrado en la base de datos.');
    } catch (error) {
      console.error('Error al registrar el voto en la base de datos:', error);
    }
  };

  // Función para registrar el voto en la base de datos bares
  export const registrarVotoEnBaseDeDatosR = async (userIP, seleccion) => {
    try {
      const votosCollection = collection(db, 'votosR'); // Cambia 'votos' al nombre de tu colección de votos
      await addDoc(votosCollection, {
        ip: userIP,
        seleccion: seleccion,
      });
      console.log('Voto registrado en la base de datos.');
    } catch (error) {
      console.error('Error al registrar el voto en la base de datos:', error);
    }
  };
  
  
  