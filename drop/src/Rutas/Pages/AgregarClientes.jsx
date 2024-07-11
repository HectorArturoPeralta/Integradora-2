import React, { useState } from 'react';
import axios from 'axios';
import './Diseños/DesingAgregar.css'; // Importa tus estilos CSS personalizados

const AgregarClientes = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Celular: '',
    Correo: '',
    Localidad: '',
    Direccion: '',
    Rotoplace: '',
    Estado: '',
    Contraseña: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/clients', formData);
      alert('Cliente agregado exitosamente');
      setFormData({
        Nombre: '',
        Celular: '',
        Correo: '',
        Localidad: '',
        Direccion: '',
        Rotoplace: '',
        Estado: '',
        Contraseña: ''
      });
    } catch (error) {
      console.error('Error al agregar el cliente', error);
      alert('Hubo un error al agregar el cliente');
    }
  };

  return (
    <div className="agregar-clientes-container">
      <h2>Agregar Cliente</h2>
      <form className="agregar-clientes-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="Nombre">Nombre:</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Celular">Celular:</label>
          <input
            type="text"
            id="Celular"
            name="Celular"
            value={formData.Celular}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Correo">Correo:</label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            value={formData.Correo}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Localidad">Localidad:</label>
          <input
            type="text"
            id="Localidad"
            name="Localidad"
            value={formData.Localidad}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Direccion">Direccion:</label>
          <input
            type="text"
            id="Direccion"
            name="Direccion"
            value={formData.Direccion}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Rotoplace">Rotoplace:</label>
          <input
            type="text"
            id="Rotoplace"
            name="Rotoplace"
            value={formData.Rotoplace}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Estado">Estado:</label>
          <input
            type="text"
            id="Estado"
            name="Estado"
            value={formData.Estado}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="Contraseña">Contraseña:</label>
          <input
            type="password"
            id="Contraseña"
            name="Contraseña"
            value={formData.Contraseña}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Agregar Cliente</button>
      </form>
    </div>
  );
};

export default AgregarClientes;
