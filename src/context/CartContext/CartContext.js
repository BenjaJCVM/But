import {createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) =>{
    const [items, setItems] = useState([]);

    const isInCart = (id) =>{
        return items.find(prod => prod.id === id)?true:false;
    }

    const addItem = (item, cantidad) =>{
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
        <ItemsContext.Provider value={{items, addItem, removeItem, clear,isInCart}}>
            {children}
        </ItemsContext.Provider>
    );

}