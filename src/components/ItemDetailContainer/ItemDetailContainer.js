import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    //JSONBIN
    const getData = async () =>{
        const response = await fetch('https://api.jsonbin.io/v3/b/631792395c146d63ca91291b',{
            headers:{
                "X-Master-Key":'$2b$10$ZAKEWYldYWx9vlcyFPhEdeKO4bLryPCtj1sipNkgQwkpYJxCZorau'
            }
        })
        const data = await response.json();
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(data.record);
            }, 2000)
        })
    }

    useEffect(() => {
        getData().then((data) => setProducto(data));

    }, [])
    console.log(producto);
    return(
        <div className="detalleContenedorItems">
             <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;