import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import "./DesingLogin.css";
import { TbPasswordUser } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [claveUnica, setClaveUnica] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeError(''); // Reiniciar el mensaje de error
    if (!nombre || !claveUnica || !contraseña) {
      setMensajeError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/Home', {
        nombre,
        claveUnica,
        contraseña
      });
      const userData = response.data; // Obtener datos del usuario
      setUser(userData); // Guardar datos del usuario en el contexto
      navigate('/Perfil');
    } catch (error) {
      setMensajeError(error.response ? error.response.data : 'Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="container-formulario">
      <div className="form-wrapper">
        <div className="image-section">
          <img src="./Dropping.png" className='img' alt="Logo de Gota de Agua" />
        </div>
        <div className="form-section">
          <span className='text'>¡Bienvenido Administrativo!</span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre"><CiUser /> Nombre:</label>
            <input 
              id="nombre" 
              type="text" 
              className="input-field" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
            <label htmlFor="claveunica"><TbPasswordUser /> Clave Única:</label>
            <input 
              id="claveunica" 
              type="text" 
              className="input-field" 
              value={claveUnica} 
              onChange={(e) => setClaveUnica(e.target.value)} 
              required 
            />
            <label htmlFor="contrasena"><IoKeyOutline /> Contraseña:</label>
            <input 
              id="contrasena" 
              type="password" 
              className="input-field" 
              value={contraseña} 
              onChange={(e) => setContraseña(e.target.value)} 
              required 
            />
            <button type="submit" className="submit-button">INICIAR SESIÓN</button>
          </form>
          {mensajeError && <div className="error-message">{mensajeError}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;






/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import "./DesingLogin.css";
import { TbPasswordUser } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [claveUnica, setClaveUnica] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeError(''); // Reiniciar el mensaje de error
    if (!nombre || !claveUnica || !contraseña) {
      setMensajeError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login/administrativo', {
        nombre,
        claveUnica,
        contraseña
      });
      const userData = response.data; // Obtener datos del usuario
      setUser(userData); // Guardar datos del usuario en el contexto
      navigate('/perfil');
    } catch (error) {
      setMensajeError(error.response ? error.response.data : 'Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <div className="container-formulario">
      <div className="form-wrapper">
        <div className="image-section">
          <img src="./Dropping.png" className='img' alt="Logo de Gota de Agua" />
        </div>
        <div className="form-section">
          <span className='text'>¡Bienvenido Administrativo!</span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre"><CiUser /> Nombre:</label>
            <input 
              id="nombre" 
              type="text" 
              className="input-field" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
            <label htmlFor="claveunica"><TbPasswordUser /> Clave Única:</label>
            <input 
              id="claveunica" 
              type="text" 
              className="input-field" 
              value={claveUnica} 
              onChange={(e) => setClaveUnica(e.target.value)} 
              required 
            />
            <label htmlFor="contrasena"><IoKeyOutline /> Contraseña:</label>
            <input 
              id="contrasena" 
              type="password" 
              className="input-field" 
              value={contraseña} 
              onChange={(e) => setContraseña(e.target.value)} 
              required 
            />
            <button type="submit" className="submit-button">INICIAR SESIÓN</button>
          </form>
          {mensajeError && <div className="error-message">{mensajeError}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;
*/