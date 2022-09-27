import React from "react";

const Item = (props) => {
    const {producto} = props;

    return(
        <div className="contenedorItem">
            <img src={producto.img} className="imagenItem"/>
            <h2 className="tituloItem">{producto.title}</h2>
            <p className="precioItem">${producto.price}</p>
        </div>
    );
}

export default Item;