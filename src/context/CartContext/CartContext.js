import {createContext, useState} from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) =>{
    const [items, setItems] = useState();

    return(
        <ItemsContext.Provider value={[items]}>
            {children}
        </ItemsContext.Provider>
    );

}