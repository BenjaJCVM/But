import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";
import Info from "../Info/Info";

const ItemListContainer = () => {
    return(
        <div className="contenedorBody">
            <div className="contenedorCarousel">
                <Carousel/>
            </div>
            <div className="contenedorInfo">
                <Info/>
            </div>
            <div className="contenedorProductos">
                <ItemList/>
            </div>
        </div>

    );
}

export default ItemListContainer;