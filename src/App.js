import './App.scss';
import {ItemsProvider } from './context/CartContext/CartContext';
import NavBar from './components/NavBar/NavBar';

//react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//VIEWS
import Inicio from './views/Inicio';
import Productos from './views/Productos/Productos';
import Contacto from './views/Contacto';
import ProductoDetalle from './views/ProductoDetalle/ProductoDetalle';
import Cart from './views/Cart/Cart';

function App() {
  return (
    <ItemsProvider>
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
              <Route path='/Cart' element={<Cart />}/>
            </Routes>
          </body>
        </div>
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
