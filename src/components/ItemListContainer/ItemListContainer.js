import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Info from "../Info/Info";

const ItemListContainer = () => {
    return(
        <div className="contenedorBody">
            <div className="contenedorCarousel">
                <Carousel/>
            </div>
            <div className="contenedorInfo">
                <Info />
            </div>
            <div className="contenedorProductos">
                <Cards/>
            </div>
        </div>

    );
}

export default ItemListContainer;