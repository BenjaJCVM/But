import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

//react router dom
import { Link } from "react-router-dom";

const ItemList = () => {
    const [productos, setProductos] = useState([]);

    //JSONBIN
    /*const getData = async () =>{
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
    }*/

    //JSON LOCAL
    /*const getData = async () =>{
        const response = await fetch('data.json')
        const data = await response.json();
        return data;
    }*/

    const getData = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getData().then((data) => setProductos(data));
    }, [])
    

    return(
        <div className="contenedorItems">
            {productos.map((item) => {
                return(
                    <div key={item.id}>
                        <Link to={`/Detalle/${item.id}`}>
                            <Item producto={item}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ItemList;