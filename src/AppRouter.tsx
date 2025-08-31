
import { Routes, Route } from 'react-router-dom'
import { Ejercicio1 } from './ejercicios/Ejercicio1'
import { Ejercicio3 } from './ejercicios/Ejercicio3'
import { Ejercicio2 } from './ejercicios/Ejercicio2'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/ejercicio_1" element={<Ejercicio1 />} />
      <Route path="/ejercicio_2" element={<Ejercicio2 />} />
      <Route path="/ejercicio_3" element={<Ejercicio3 />} />
    </Routes>
  )
}
