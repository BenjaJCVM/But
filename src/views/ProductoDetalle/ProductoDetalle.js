import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";



const ProductoDetalle = () =>{
    const [product, setProduct] = useState([]);

    let {id} = useParams();

    const getData = async () =>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        getData().then((data) => setProduct(data));
    }, [id])


    return( 
        <div>
            {product.map((item) => {
                return(
                    <div>
                        <ItemDetail item={item}/>
                    </div>
                );
            })}
        </div>
    );
    
}

export default ProductoDetalle;