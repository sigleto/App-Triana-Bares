import react,{useContext,useState} from "react";
import Contexto from "./Contexto";


export const Provider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  
  return (
    <Contexto.Provider value={{ datos, setDatos }}>
      {children}
    </Contexto.Provider>
  );
};

export const useDatos = () => {
  return useContext(Contexto);
};