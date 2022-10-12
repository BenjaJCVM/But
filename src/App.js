import './App.scss';
import {ItemsProvider } from './context/CartContext/CartContext';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

//react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//VIEWS
import Inicio from './views/Inicio/Inicio';
import Contacto from './views/Contacto/Contacto';
import ProductoDetalle from './views/ProductoDetalle/ProductoDetalle';
import Cart from './views/Cart/Cart';
import Category from './views/Categorias/Category';
import Checkout from './views/Checkout/Checkout';

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
              <Route path='/Contacto' element={<Contacto/>}/>
              <Route path='/Detalle/:id' element={<ProductoDetalle/>}/>
              <Route path='/Category/:category' element={<Category />} />
              <Route path='/Cart' element={<Cart />}/>
              <Route path='/Checkout' element={<Checkout />}/>
            </Routes>
          </body>
          <footer className='footerTienda'>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
