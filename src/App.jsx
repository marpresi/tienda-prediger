import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import { NavBar } from './components/Header/NavBar';
import { Contacto } from './pages/Contacto';
import { Faq } from './pages/Faq';

import { NoEncontrado } from './pages/NoEncontrado';
import { ItemListContainer } from './components/Items/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { CartListContainer } from './components/Cart/CartListContainer';



function App() {
  const tienda = 'Prediger';

 
  return <>
    <CartProvider>
      <BrowserRouter>
          <NavBar tiendaName={`Tienda ${tienda}`} />
          <div className="container-fluid mt-3">
              <div className="row">
                <div className="col">
                    <Routes>
                      <Route path='/' element={<ItemListContainer />} />
                      <Route path='/category/:id' element={<ItemListContainer />} />
                      <Route path='/item/:id' element={<ItemDetailContainer/>} />
                      <Route path='/cart' element={<CartListContainer />} />
                      <Route path='/contacto' element={<Contacto />} />
                      <Route path='/faq' element={<Faq />} />
                      <Route path='*' element={<NoEncontrado />} /> 
                    </Routes>
                </div>
            </div>
          </div>
      </BrowserRouter>
    </CartProvider>
  </>
}

export default App;
