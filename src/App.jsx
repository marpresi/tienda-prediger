import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/Header/NavBar';
import { Contacto } from './pages/Contacto';
import { Faq } from './pages/Faq';

import { NoEncontrado } from './pages/NoEncontrado';
import {ItemListContainer} from './components/Items/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer';



function App() {
  const tienda = 'Prediger';

  const [cantArticulos,setCantArticulos] = useState('0');

  const onAdd = (cant) =>{
    setCantArticulos(cant);
  }

  return <>
    <BrowserRouter>
      <NavBar tiendaName={`Tienda ${tienda}`} cantArticulos={cantArticulos} />
      <div className="container-fluid mt-3">
          <div className="row">
            <div className="col">
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='*' element={<NoEncontrado />} /> 
              </Routes>
          </div>
        </div>
      </div>
      
    </BrowserRouter>
  </>
}

export default App;
