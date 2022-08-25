import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <p>BUT</p>
            </div>
            <ul className="menu">
                <li><a>Inicio</a></li>
                <li><a>Productos</a></li>
                <li><a>Contacto</a></li>
                <li><a>Envios</a></li>
                <li><a><CartWidget /></a></li>
            </ul>
        </nav>
    );
}

export default NavBar;