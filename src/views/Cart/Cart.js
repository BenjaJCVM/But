import { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";
import { Link } from 'react-router-dom';



const Cart = () =>{
    const cart = useContext(ItemsContext);

    const [total, setTotal] = useState(0);

    const sumaTotal = () =>{
        let totales = cart.items.map(item => item.total)
        const sumaTotales = totales.reduce((anterior, actual) => anterior + actual, 0);
        setTotal(sumaTotales);
    }

    useEffect(() => {
        sumaTotal();
    }, [cart])

    return(
        <div className="contenedorItemsCarrito">
            <button onClick={cart.clear} className={cart.items.length !== 0 ? 'botonBorrarTodo' : 'disable'}>Borrar todo</button>
            <Link to='/' ><button className={cart.items.length === 0 ? 'botonVolverInicio' : 'disable'}>Volver a inicio</button></Link>
            {
                cart.items.map(item =>
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
                        <button onClick={() => cart.removeItem(item.id)}className='botonCerrarCarrito'>x</button>
                    </div>
                </div>)
            }
            <p className={cart.items.length !== 0 ? 'precioTotal' : 'disable'}>Total: ${total}</p>
            <Link to='/Checkout' className={cart.items.length !== 0 ? 'botonFinalizarCompra' : 'disable'}>Finalizar Compra</Link>
        </div>
    )
}

export default Cart