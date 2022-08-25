const Card = ({imagen, titulo, precio}) => {
    return(
        <div className="contenedorCard">
            <img src={imagen} className="imagenCard"/>
            <h2 className="tituloCard">{titulo}</h2>
            <p className="precioCard">{precio}</p>
        </div>
    );
}

export default Card;