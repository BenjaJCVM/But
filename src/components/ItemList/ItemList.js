import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

const ItemList = () => {
    const [productos, setProductos] = useState([]);

    //const getData = async () =>{
    //    const response = await fetch('data.json');
    //   const data = await response.json();
    //    return new Promise((resolve) =>{
    //        setTimeout(() =>{
    //            resolve(data);
    //        }, 2000)
    //    })
    //}

    //JSONBIN
    const getData = async () =>{
        const response = await fetch('https://api.jsonbin.io/v3/b/6310086ba1610e638618034c',{
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
        getData().then((data) => setProductos(data));
    }, [])
    

    return(
        <div className="contenedorItems">
          {productos.map((item) => (
            <Item producto={item} key={item.id}/>
          ))};
          
        </div>
    );
}

export default ItemList;