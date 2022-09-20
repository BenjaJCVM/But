import {useContext} from "react";
import { ItemsContext } from "../../context/CartContext/CartContext";

const CartWidget = () => {

    const { items } = useContext(ItemsContext)
    let itemsInCart = 0;

    items.map((item) => {
      itemsInCart = itemsInCart + item.cantidad;
    })

    const mostarNumero = (e) =>{
        if(e > 0){
            return itemsInCart;
        }
    }

    return(
        <>
            <i className="bi bi-bag carrito"></i>
            {mostarNumero(itemsInCart)}
        </>
    );
}

export default CartWidget;