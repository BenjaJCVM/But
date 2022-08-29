import ItemCount from "../ItemCount/ItemCount";
import React,{useState} from "react";

const Card = ({imagen, titulo, precio, stock}) => {
    let [carrito, setCarrito] = useState(0);

    const onAdd = (valor) =>{
        carrito = carrito + valor;
        setCarrito(carrito);
    }
    return(
        <div className="contenedorCard">
            <img src={imagen} className="imagenCard"/>
            <h2 className="tituloCard">{titulo}</h2>
            <p className="precioCard">{precio}</p>
            <ItemCount inicio={0} stock={stock} onAdd={onAdd} carrito={carrito}/>
            <p className="indicadorCarrito" >{carrito} unidades en el carrito</p>
        </div>
    );
}

export default Card;