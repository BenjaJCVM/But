import {useContext} from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";

const CartWidget = () => {

    const { items } = useContext(ItemsContext)
    let itemsInCart = 0;

    items.map((item) => {
      itemsInCart = itemsInCart + item.cantidad;
    })

    return(
        <>
            <i className="bi bi-bag carrito"></i>
            {itemsInCart}
        </>
    );
}

export default CartWidget;