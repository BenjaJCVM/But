import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

//react router dom
import { Link } from "react-router-dom";

const ItemList = () => {
    const [productos, setProductos] = useState([]);

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