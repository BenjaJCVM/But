import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

//react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//VIEWS
import Inicio from './views/Inicio';
import Productos from './views/Productos';
import Contacto from './views/Contacto';
import ProductoDetalle from './views/ProductoDetalle/ProductoDetalle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="headerTienda">
          <NavBar />
        </header>
        <body className='bodyTienda'>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Detalle/:id' element={<ProductoDetalle/>}/>
          </Routes>
        </body>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
