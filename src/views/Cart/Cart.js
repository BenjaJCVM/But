import { useContext } from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";
import { Link } from 'react-router-dom';


const Cart = () =>{
    const test = useContext(ItemsContext);

    return(
        <div className="contenedorItemsCarrito">
            <button onClick={test.clear} className={test.items.length !== 0 ? 'botonBorrarTodo' : 'disable'}>Borrar todo</button>
            <Link to='/' ><button className={test.items.length === 0 ? 'botonVolverInicio' : 'disable'}>Volver a productos</button></Link>
            {
                test.items.map(item =>
                <div key={item.id} className='itemEnCarrito'>
                    <div className="contImagenCarrito">
                        <img src={item.img} className='carritoImagenItem'></img>
                    </div>
                    <div className="contInfoCarrito">
                        <p className="tituloCarrito">{item.title}</p>
                        <p className="cantidadCarrito">Cantidad: {item.cantidad}</p>
                        <p>Total: ${item.price * item.cantidad}</p>
                    </div>
                    <div className="contBotonCarrito">
                        <button onClick={() => test.removeItem(item.id)}className='botonCerrarCarrito'>x</button>
                    </div>
                </div>)
            }
            <p className={test.items.length !== 0 ? 'precioTotal' : 'disable'}>Total: ${test.total}</p>
            {console.log(test.total)}
        </div>
    )
}

export default Cart