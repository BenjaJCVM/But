import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <h1>BUT</h1>
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