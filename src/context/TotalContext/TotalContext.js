import {createContext, useState} from "react";

export const TotalContext = createContext();

export const ItemsProvider = ({ children }) =>{
    let totalC = 0;

    return(
        <TotalContext.Provider value={{totalC}}>
            {children}
        </TotalContext.Provider>
    );

}