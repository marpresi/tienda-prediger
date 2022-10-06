import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

import { db } from "../../utils/firebase";

import { CartWidget } from '../Cart/CartWidget';

export const NavBar = ({ tiendaName }) => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        let data = [];
        const query = collection(db, 'Categories');
        const result = await getDocs(query);
        const docs = result.docs;
        data = docs.map(doc => { return { ...doc.data(), id: doc.id } });
        setCategorias(data);
      } catch (err) {
        setCategorias([]);
      }
    }
    cargarCategorias();
  })

  return (<>
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
            {
              categorias.map(categoria => (
                <li  key={categoria.id} className="nav-item">
                  <NavLink to={`/category/${categoria.categoryId}`}
                    className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`}>{categoria.name}</NavLink>
                </li>
              ))
            }
          </ul >
        </div>
        <div className="d-flex">
          <CartWidget />
        </div>
      </div>
    </header>
  </>)
}
