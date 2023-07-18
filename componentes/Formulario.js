import React from "react";
import { useForm } from "react-hook-form";
import Clima from "../anexos/clima";
import { View, Text, TextInput, Button } from "react-native";

const Formulario = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
    <View>
      <View>
        <Text>Alias</Text>
        <TextInput
          placeholder="Introduce tu alias"
          {...register("alias", { required: true })}
        />
        {errors.alias?.type === "required" && (
          <Text>Es obligatorio ingresar un alias</Text>
        )}
      </View>
      <View>
        <Text>Preferencias</Text>
        <View>
          <Text>Bares, tascas y demás</Text>
          <TextInput
            type="radio"
            name="sitios"
            value="bares"
            {...register("preferencias", { required: true })}
          />
        </View>
        <View>
          <Text>Restaurantes y cosas finas</Text>
          <TextInput
            type="radio"
            name="sitios"
            value="restaurantes"
            {...register("preferencias", { required: true })}
          />
        </View>
        {errors.preferencias?.type === "required" && (
          <Text>Por favor, elige una preferencia</Text>
        )}
      </View>
      <View>
        <Text>E-Mail</Text>
        <TextInput
          placeholder="Introduce tu email"
          {...register("correo", {
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
          })}
        />
        {errors.correo?.type === "pattern" && (
          <Text>Eso no es un correo válido</Text>
        )}
      </View>
      <View>
        <Text>COMENTARIOS</Text>
        <TextInput
          placeholder="Puedes enviar un establecimiento que deseas que incluya. Solo escribe el nombre"
          {...register("comentarios")}
        />
      </View>
      <Button title="ENVIAR DATOS" onPress={handleSubmit(accion)} />
      <Clima />
    </View>
  );
};

export default Formulario;
