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
                <p className="detallePrecioItem">${item.price}</p>
                <h2 className="detalleTituloTalles">Talles</h2>
                <select className="select">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <button className="detalleBoton compra">Comprar</button>
                <button className="detalleBoton">Compra Rapida</button>
            </div>
        </div>
    );
}

export default ItemDetail;