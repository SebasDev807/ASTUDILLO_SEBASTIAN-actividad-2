import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
// import { Ejercicio3 } from './ejercicios/Ejercicio3';
// import { Ejercicio1 } from './ejercicios/Ejercicio1';
import { Ejercicio2 } from './ejercicios/Ejercicio2';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Ejercicio1 /> */}
    <Ejercicio2 />
    {/* <Ejercicio3/> */}
  </StrictMode>,
)
