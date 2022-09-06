import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";
import Info from "../Info/Info";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
    return(
        <div className="contenedorBody">
            <div className="contenedorCarousel">
            </div>
            <div className="contenedorInfo">
            </div>
            <div className="contenedorProductos">
            </div>
            <div className="detalleContenedorProductos">
                <ItemDetailContainer/>
            </div>
        </div>

    );
}

export default ItemListContainer;