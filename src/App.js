import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer otroSaludo="Hola" greetings={"Bienvenidos a mi ecommerce"} />
    </>
  );
}

export default App;
