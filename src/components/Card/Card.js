import ItemCount from "../ItemCount/ItemCount";

const Card = ({imagen, titulo, precio, stock}) => {

    const onAdd = (valor) =>{
        console.log(`agregaste ${valor} unidades al carrito`)
    }
    return(
        <div className="contenedorCard">
            <img src={imagen} className="imagenCard"/>
            <h2 className="tituloCard">{titulo}</h2>
            <p className="precioCard">{precio}</p>
            <ItemCount inicio={0} stock={stock} onAdd={onAdd}/>
        </div>
    );
}

export default Card;