import { useContext } from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";
import { Link } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";


const Cart = () =>{
    const cart = useContext(ItemsContext);

    const orden = {
        comprador:{
            nombre:'benja',
            apellido:'brugiafreddo',
            telefono:'123',
            direccion:'general paz'
        },
        productos: cart.items.map(item => ({id:item.id, title:item.title, price:item.price}))
    }

    const terminarCompra = () =>{
        const ordenCompra = collection(db, 'ordenes');
        addDoc(ordenCompra, orden)
            .then(({id}) => console.log(id))
    }

    return(
        <div className="contenedorItemsCarrito">
            <button onClick={cart.clear} className={cart.items.length !== 0 ? 'botonBorrarTodo' : 'disable'}>Borrar todo</button>
            <Link to='/' ><button className={cart.items.length === 0 ? 'botonVolverInicio' : 'disable'}>Volver a productos</button></Link>
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
            <p className={cart.items.length !== 0 ? 'precioTotal' : 'disable'}>Total: ${cart.total}</p>
            <div>
                <button onClick={terminarCompra} className={cart.items.length !== 0 ? 'botonVolverInicio' : 'disable'}>Terminar Compra</button>
            </div>
        </div>
    )
}

export default Cart