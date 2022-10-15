import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/CartContext/CartContext";


const Modal = ({ children, estado, cambiarEstado, recibo, total}) => {
  const cart = useContext(ItemsContext);
  console.log(cart.items)
  
  return (
    <>
          {estado &&
            <div className="modalRecibo">
                <div className="contenedorModal">
                    
                    <div className="contenedorX">
                      <button onClick={() => cambiarEstado(!estado)} className='cerrarModal'><i className="bi bi-x-lg"></i></button>
                    </div>
                    <h2>Datos del usuario:</h2>
                    <p>ID de la compra: <span className="idNegritaModal">{recibo.id}</span></p>
                    <p>Nombre: {recibo.comprador.nombre}</p>
                    <p>Apellido: {recibo.comprador.apellido}</p>
                    <p>Telefono: {recibo.comprador.telefono}</p>
                    <p>Email: {recibo.comprador.email}</p>
                    <h2>Productos:</h2>
                    {children}
                    <div className="conteneodrTotalBoton">
                      <h5 className="totalModal">Total: ${total}</h5>
                      <Link to='/' onClick={(cart.clear)} className='aceptarModal'>Aceptar</Link>
                    </div>
                </div>
            </div>
          }
    </>
  );
};

export default Modal;
