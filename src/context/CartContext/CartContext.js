import {createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) =>{
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const isInCart = (id) =>{
        return items.find(prod => prod.id === id)?true:false;
    }

    const addItem = (item, cantidad, total) =>{
        total = cantidad * item.price;
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.cantidad += cantidad
                prod.total = prod.cantidad * prod.price;
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, title: item.title,img: item.img , price: item.price, cantidad: cantidad, total: total}])
    }

    const removeItem = (id) =>{
        let newCartList = items.filter(item => item.id !== id);
        const nuevoTotal = newCartList.map(item => item.cantidad * item.price);
        let sum = 0;
        for(let i = 0; i < nuevoTotal.length; i++){
            sum += nuevoTotal[i];
        }
        setItems(newCartList);
        setTotal(sum);
    }
    const clear = () =>{setItems([]);}

    return(
        <ItemsContext.Provider value={{items, addItem, removeItem, clear, isInCart, total}}>
            {children}
        </ItemsContext.Provider>
    );

}