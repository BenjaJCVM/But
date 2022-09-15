import { useContext } from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";


const Cart = () =>{
    const test = useContext(ItemsContext);

    return(
        <div className="contenedorItemsCarrito">
            <button onClick={test.clear}>Borrar todo</button>
            {
                test.items.map(item =>
                <div key={item.id} className='itemEnCarrito'>
                    <div className="contImagenCarrito">
                        <img src={item.image} className="carritoImagenItem"/>
                    </div>
                    <div className="contInfoCarrito">
                        <p className="tituloCarrito">{item.title}</p>
                        <p className="cantidadCarrito">Cantidad: {item.cantidad}</p>
                    </div>
                    <div className="contBotonCarrito">
                        <button onClick={() => test.removeItem(item.id)}className='botonCerrarCarrito'>x</button>
                    </div>
                </div>)
                
            }
        </div>
    )
}

export default Cart