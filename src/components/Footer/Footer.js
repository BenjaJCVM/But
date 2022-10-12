import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <div className="contenedorFooter">
            <div className="navFooter">
                <h3 className='tituloFooter'>Navegacion</h3>
                <ul className='ulNavFooter'>
                    <Link to='/' className='enlace'>Inicio</Link>
                    <Link to='/Productos' className='enlace'>Productos</Link>
                    <Link to='/Contacto' className='enlace'>Contacto</Link>
                    <Link to='' className='enlace'>Envios</Link>
                </ul>
            </div>
            <div className="contactanosFooter">
                <h3 className='tituloFooter'>Contactanos</h3>
                <p className='pContactanosFooter'>But_Clothes@gmail.com</p>
                <p className='pContactanosFooter'>Tucuman 1082, Villa Maria</p>
            </div>
            <div className="redesFooter">
                <h3 className='tituloFooter'>Redes Sociales</h3>
                <i className="bi bi-instagram icono"></i>
                <i className="bi bi-facebook icono"></i>
            </div>
        </div>
    );
}

export default Footer;