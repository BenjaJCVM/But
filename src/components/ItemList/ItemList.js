import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

//react router dom
import { Link } from "react-router-dom";
// FIREBASE

import { getTodaRopa } from '../../firebase/FirebaseConfig';

const ItemList = () => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        getTodaRopa()
            .then(result => setProductos(result) )
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