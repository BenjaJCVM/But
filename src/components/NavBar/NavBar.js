import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <Link to='/' className='enlaceLogo'>BUT</Link>
            </div>
            <ul className="menu">
                <Link to='/' className='enlace'>Inicio</Link>
                <Dropdown/>
                <Link to='/Cart' className='enlace'><CartWidget /></Link>
            </ul>
        </nav>
    );
}

export default NavBar;