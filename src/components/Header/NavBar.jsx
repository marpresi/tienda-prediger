import { Link, NavLink } from 'react-router-dom';

import {CartWidget} from '../Cart/CartWidget';
export const NavBar = ({tiendaName, cantArticulos}) => {
    return ( <>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark bd-navbar sticky-top px-3 py-2 ">
          <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  <i className="bi bi-bootstrap p-1"></i>
                  {tiendaName}
                </Link>
              <div className="d-flex collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/category/toallas" 
                      className={`nav-link ${({isActive}) => isActive ? 'active': ''}`}>Toallas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/category/mantas" 
                      className={`nav-link ${({isActive}) => isActive ? 'active': ''}`}>Mantas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/category/cambiadores" 
                      className={`nav-link ${({isActive}) => isActive ? 'active': ''}`}>Cambiadores</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contacto" 
                      className={`nav-link ${({isActive}) => isActive ? 'active': ''}`} >Contacto</NavLink>  
                  </li>
                  <li className="nav-item">
                    <NavLink to="/faq" 
                      className={`nav-link ${({isActive}) => isActive ? 'active': ''}`}>Preguntas Frecuentes</NavLink>  
                  </li>
                </ul >
              </div>
              <div className="d-flex"> 
                <CartWidget cantArticulos={cantArticulos}/>
              </div>
            </div>
      </header>
    </>)
  }
