import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="headerTienda">
        <NavBar />
      </header>
      <body className='bodyTienda'>
        <ItemListContainer />
      </body>
    </div>
  );
}

export default App;
