import React from 'react';
import { Provider } from './componentes/Contexto/Provider';
import Navigation from './componentes/Navigator';

export default function App() {
  return (
    <Provider>
    
   <Navigation />
   </Provider>
   
  );
}

