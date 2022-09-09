import React from "react";


const ItemDetail = ({item}) => {
    return(
        <div className="detalleContenedorItem">
            <div className="detalleContImagen">
                <img src={item.image} className="detalleImagenItem"/>
            </div>
            <div className="detalleContInfo">
                <h2 className="detalleTituloItem">{item.title}</h2>
                <p className="detalleDescripcionItem">{item.description}</p>
                <p className="detallePrecioItem">{item.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;