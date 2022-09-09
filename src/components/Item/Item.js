import ItemCount from "../ItemCount/ItemCount";
import React,{useState} from "react";

const Item = (props) => {
    const {producto} = props;
    let [carrito, setCarrito] = useState(0);

    const onAdd = (valor) =>{
        carrito = carrito + valor;
        setCarrito(carrito);
    }

    return(
        <div className="contenedorItem">
            <img src={producto.image} className="imagenItem"/>
            <h2 className="tituloItem">{producto.title}</h2>
            <p className="precioItem">{producto.price}</p>
            <ItemCount inicio={0} stock={producto.stock} onAdd={onAdd} carrito={carrito}/>
            <p className="indicadorCarrito" >{carrito} unidades en el carrito</p>
        </div>
    );
}

export default Item;