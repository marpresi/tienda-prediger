import {useState} from  'react';
import {ItemListContainer} from './components/ItemListContainer';
import {NavBar} from './components/NavBar';


function App() {
  const [tienda, setTienda] = useState('Prediger'); 
  return <>
    <NavBar tiendaName={`Tienda ${tienda}`} />
    <ItemListContainer greeting={`Bienvenido a la tienda de "${tienda}"`}/>
  </>
}

export default App;
