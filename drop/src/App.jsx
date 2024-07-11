// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Rutas/RutasPublic-Priv/Rutas'; // Adjust the import path accordingly
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Rutas />
      </AuthProvider>
    </Router>
  );
};

export default App;
