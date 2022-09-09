import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <Link to='/' className='enlaceLogo'>BUT</Link>
            </div>
            <ul className="menu">
                <Link to='/' className='enlace'>Inicio</Link>
                <Link to='/Productos' className='enlace'>Productos</Link>
                <Link to='/Contacto' className='enlace'>Contacto</Link>
                <Link to='' className='enlace'>Envios</Link>
                <Link to='' className='enlace'><CartWidget /></Link>
            </ul>
        </nav>
    );
}

export default NavBar;