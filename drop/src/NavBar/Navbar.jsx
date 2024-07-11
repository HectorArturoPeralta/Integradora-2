import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./DesingNav.css";
import { CiBellOn, CiUser } from "react-icons/ci";
import {
  HomeOutlined,
  ContactsOutlined,
  PieChartOutlined,
  SolutionOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
  UserAddOutlined,
  TeamOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showVerticalMenu, setShowVerticalMenu] = useState(true);

  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  const toggleVerticalMenu = () => {
    setShowVerticalMenu(!showVerticalMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowVerticalMenu(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    
    <div className="navbar-container">
      {/* Horizontal Navigation */}
      <nav className='nav-2'>
        <ul className='horizontal-menu'>
          <li><Link to="/Perfil"> <CiUser />Perfil</Link></li>
          <li><Link to="/Notificaciones"> <CiBellOn />Notificaciones</Link></li>
        </ul>
      </nav>

      {/* Button to toggle vertical menu on small screens */}
      <button className="toggle-menu-button" onClick={toggleVerticalMenu}>
        {showVerticalMenu ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      {/* Vertical Navigation */}
      <nav className={`vertical-nav ${showVerticalMenu ? 'show' : 'hide'}`}>
        <ul>
          <li><Link to="/Home"><HomeOutlined /> Inicio</Link></li>

          <li>
            <div className="menu-item" onClick={handleMenu}>
              <TeamOutlined /> Clientes {menu ? <CaretDownOutlined /> : <CaretRightOutlined />}
            </div>
            {menu && (
              <ul className="submenu">
                <li><Link to="/Clientes"><ContactsOutlined />Lista de Clientes</Link></li>
                <li><Link to="/AgregarClientes"><UserAddOutlined />Agregar Cliente</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/Graficas"><PieChartOutlined /> Gráficas</Link></li>
          <li><Link to="/Empleados"><SolutionOutlined /> Empleados</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
