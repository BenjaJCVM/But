import React,{useState} from "react";

const ItemCount = ({inicio, stock, onAdd, carrito}) => {
    const [count, setCount] = useState(inicio);

    const  sumarContador = () => {
        setCount(count + 1)
    }
    const  restarContador = () => {
        setCount(count - 1)
    }
    return(
        <div className="counter">
            <div className="contContador">
                <button onClick={restarContador} disabled={count <= 0}>-</button>
                <span>{count}</span>
                <button onClick={sumarContador} disabled={count >= stock}>+</button>
            </div>
            <div className="contAgregarCarrito">
                <button className="btnAgregarCarrito" disabled={(count <= 0 || stock <= 0) || carrito >= stock} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;