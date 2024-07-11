import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';  // Verifica esta ruta

const Perfil = () => {
  const { user, logout } = useAuth();  // Obtener datos del usuario desde el contexto
  const [userData, setUserData] = useState(null);
  const userId = user ? user.id : null;

  // Verificar que el contexto de usuario se está llenando correctamente
  useEffect(() => {
    console.log("User from context:", user);
  }, [user]);

  // Obtener datos del usuario desde el servidor
  useEffect(() => {
    if (userId) {
      console.log("Fetching user data for ID:", userId);
      fetch(`http://localhost:3001/user/${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log("User data fetched:", data);
          setUserData(data);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  // Mostrar mensaje si el usuario no está autenticado
  if (!user) {
    return <div>No estás autenticado</div>;
  }

  // Mostrar mensaje de carga mientras se obtienen los datos
  if (!userData) {
    return <div>Cargando...</div>;
  }

  // Renderizar los datos del usuario una vez obtenidos
  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p><strong>Nombre:</strong> {userData.Nombre}</p>
      <p><strong>Clave Única:</strong> {userData.ClaveUnica}</p>
      <p><strong>Contraseña:</strong> {userData.Contraseña}</p>
      <p><strong>Fecha de Nacimiento:</strong> {userData.Fecha_nac}</p>
      <p><strong>RFC:</strong> {userData.RFC}</p>
      <p><strong>CURP:</strong> {userData.CURP}</p>
      <p><strong>Dirección:</strong> {userData.Direccion}</p>
      <p><strong>Comentarios:</strong> {userData.Comentarios}</p>
      <p><strong>Estado:</strong> {userData.Estado}</p>
      <button onClick={logout}>Cerrar Sesión</button> {/* Botón para cerrar sesión */}
    </div>
  );
}

export default Perfil;