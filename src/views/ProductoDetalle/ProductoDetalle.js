import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";



const ProductoDetalle = () =>{
    const [product, setProduct] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        const getData = axios(`https://fakestoreapi.com/products`);
        getData.then((res) => {
            const finder = res.data.find(p => p.id == id);
            setProduct(finder);
        })
    }, [id])


    return( 
        <div className="detalleBody">
            <ItemDetail item={product}/>
        </div>
    );
    
}

export default ProductoDetalle;