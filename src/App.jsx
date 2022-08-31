import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';



function App() {
  const tienda = 'Prediger';

  return <>
    <NavBar tiendaName={`Tienda ${tienda}`} />
    <ItemListContainer greeting={`Bienvenido a la tienda de "${tienda}"`}/>
    <ItemDetailContainer />
  </>
}

export default App;
