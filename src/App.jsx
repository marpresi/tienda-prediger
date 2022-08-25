import {useState} from  'react';
import {ItemListContainer} from './components/ItemListContainer';
import {NavBar} from './components/NavBar';


function App() {
  const [tienda, setTienda] = useState('Prediger'); 
  const [cantArticulos, setCantArticulos] = useState(0);

  const refrescarCarro = (cantidad) => {
    setCantArticulos(cantidad);
  }

  return <>
    <NavBar tiendaName={`Tienda ${tienda}`} cantArticulos={cantArticulos} />
    <ItemListContainer greeting={`Bienvenido a la tienda de "${tienda}"`} onRefreshCarro={refrescarCarro}/>
  </>
}

export default App;
