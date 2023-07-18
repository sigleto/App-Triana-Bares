import React from "react";
import { useForm } from "react-hook-form";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Formulario = () => {
  const { register, handleSubmit, reset, formState } = useForm();
const { errors } = formState;

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
      // Navegar a otra pantalla en Expo
      // Aquí debes definir la lógica para navegar a la pantalla deseada
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alias</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu alias"
          {...register("alias", { required: true })}

        />
        {errors.alias?.type === "required" && (
          <Text style={styles.errorText}>Es obligatorio ingresar un alias</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Preferencias</Text>
        <View>
          <Text style={styles.subLabel}>Bares, tascas y demás</Text>
          <TextInput
            style={styles.radioInput}
            type="radio"
            name="sitios"
            value="bares"
            {...register("preferencias", { required: true })}
          />
        </View>
        <View>
          <Text style={styles.subLabel}>Restaurantes y cosas finas</Text>
          <TextInput
            style={styles.radioInput}
            type="radio"
            name="sitios"
            value="restaurantes"
            {...register("preferencias", { required: true })}
          />
        </View>
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
          style={styles.input}
          placeholder="Puedes enviar un establecimiento que deseas que incluya. Solo escribe el nombre"
          {...register("comentarios")}
        />
      </View>
      <Button title="ENVIAR DATOS" onPress={handleSubmit(accion)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  radioInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

export default Formulario;
