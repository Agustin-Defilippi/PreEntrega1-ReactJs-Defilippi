import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar/>
      <main className='contenedorPrincipal'>
        <ItemListContainer greetin={"Welcome Defilippi Classic New Store"}/>
      </main>
    </>
  )
}

export default App