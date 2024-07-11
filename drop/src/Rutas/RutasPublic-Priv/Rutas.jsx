// Rutas.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../NavBar/Navbar';
import Home from '../Pages/Home';
import Clientes from '../Pages/Clientes';
import AgregarClientes from '../Pages/AgregarClientes';
import Empleados from '../Pages/Empleados';
import Graficas from '../Pages/Graficas';
import Notificaciones from '../Pages/Notificaciones';
import Perfil from '../Pages/Perfil';
import ProtectedRoute from './PrivateRoute'; // Adjust the import path accordingly

const Rutas = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Clientes' element={<Clientes />} />
        <Route path='/AgregarClientes' element={<AgregarClientes />} />
        <Route path='/Empleados' element={<Empleados />} />
        <Route path='/Graficas' element={<Graficas />} />
        <Route path='/Notificaciones' element={<Notificaciones />} />
        <Route path='/Perfil' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default Rutas;
