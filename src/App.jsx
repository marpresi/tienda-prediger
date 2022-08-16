import {ItemListContainer} from './components/ItemListContainer';
import {NavBar} from './components/NavBar';

function App() {
  const name = 'Prediger';
  return <>
    <NavBar tiendaName={`Tienda ${name}`} />
    <ItemListContainer greeting={`Bienvenido a la tienda de "${name}"`}/>
  </>
}

export default App;
