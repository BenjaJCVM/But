import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { ItemsContext } from "../../context/CartContext/CartContext";

const ItemDetail = ({item}) => {
    const [cart, setCart] = useState(false);
    const test = useContext(ItemsContext);

    const onAdd = (cantidad,) =>{
        setCart(true);
        test.addItem(item,cantidad);
    }

    return(
        <div className="detalleContenedorItem">
            <div className="detalleContImagen">
                <img src={item.img} className="detalleImagenItem"/>
            </div>
            <div className="detalleContInfo">
                <h2 className="detalleTituloItem">{item.title}</h2>
                <p className="detallePrecioItem">${item.price}</p>
                <h2 className="detalleTituloTalles">Talles</h2>
                {cart ? 
                    <Link className="terminarBoton" to='/Cart'><div className="contTerminarBoton">Terminar Compra</div></Link>
                 : <ItemCount inicio={1} stock={item.stock} onAdd={onAdd}/>}
            </div>
        </div>
    );
}

export default ItemDetail;