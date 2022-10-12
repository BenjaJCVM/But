import { Link } from "react-router-dom";

const Dropdown = () => {

    return(
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
            </a>
            <ul className="dropdown-menu">
                <li><Link to='/Category/tshirt' className="dropdown-item">Remeras</Link></li>
                <li><Link to='/Category/hoodie' className="dropdown-item">Hoodies</Link></li>
                <li><Link to='/Category/jacket' className="dropdown-item">Jackets</Link></li>
            </ul>
        </div>
    );
}

export default Dropdown;