import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Diseños/DesingClientes.css'; // Importa tus estilos CSS personalizados

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/clients');
        setClientes(response.data);
      } catch (error) {
        console.error('Error fetching clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div className="clientes-container">
      <h2>Clientes Registrados</h2>
      <div className="table-container">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Correo</th>
              <th>Localidad</th>
              <th>Dirección</th>
              <th>RotoPlace</th>
              <th>Estado</th>
              {/* <th>Contraseña</th> */} {/* Ocultar columna sensible */}
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.Id}>
                <td>{cliente.Id}</td>
                <td>{cliente.Nombre}</td>
                <td>{cliente.Celular}</td>
                <td>{cliente.Correo}</td>
                <td>{cliente.Localidad}</td>
                <td>{cliente.Direccion}</td>
                <td>{cliente.Rotoplace}</td>
                <td>{cliente.Estado}</td>
                {/* <td>{cliente.Contraseña}</td> */} {/* Ocultar dato sensible */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clientes;
