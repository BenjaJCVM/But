import React, { useState, useEffect } from 'react';
import Item from "../../components/Item/Item";
import { useParams, Link } from 'react-router-dom';

import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';

const Category = () => {
	const [product, setProduct] = useState([]);
	
	const { category } = useParams();

	useEffect(() => {
		const getRopa = async () => {
			const q = query(collection(db, 'ropa'), where('category', '==', category));
            getDocs(q)
                .then(res => setProduct(res.docs.map(product => ({id:product.id, ...product.data()}))))
		};
		getRopa();
	}, [category]);

	return (
		<div className='contenedorCategorias'>
			<div className='productosCategorias'>
				{product.map((item) => {
							 return(
								 <div key={item.id}>
									 <Link to={`/Detalle/${item.id}`}>
										 <Item producto={item}/>
									 </Link>
								 </div>
							 )
						 })}
			</div>
		</div>
	);
};

export default Category;