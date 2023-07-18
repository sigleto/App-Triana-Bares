import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {tema}   from './tema';
import Navigation from './componentes/Navigator';
export default function App() {
  return (
    <ThemeProvider theme={tema}>
   <Navigation/>
   </ThemeProvider>
  );
}


