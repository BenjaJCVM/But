import {createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) =>{
    const [items, setItems] = useState([]);
    const [precio, setPrecio] = useState([]);
    const [total, setTotal] = useState(0);

    const isInCart = (id) =>{
        return items.find(prod => prod.id === id)?true:false;
    }

    const addItem = (item, cantidad) =>{

        setPrecio([...precio, item.price * cantidad])
        const totalPrecios = precio.reduce((precioAnterior, precioActual) => precioAnterior + precioActual, item.price * cantidad);
        setTotal(totalPrecios);

        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.cantidad += cantidad
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, title: item.title,image: item.image , price: item.price, cantidad: cantidad}])
    }

    const removeItem = (id) =>{
        let newCartList = items.filter(item => item.id !== id)
        setItems(newCartList);
    }

    const clear = () =>{setItems([]);}

    return(
        <ItemsContext.Provider value={{items, addItem, removeItem, clear,isInCart, total}}>
            {children}
        </ItemsContext.Provider>
    );

}