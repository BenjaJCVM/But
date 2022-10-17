import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

// FIREBASE
import { db } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProductoDetalle = () => {
  const [product, setProduct] = useState([]);

  let { id } = useParams();


  useEffect(() => {
    const q = doc(db, "ropa", id);
    getDoc(q).then((res) =>
      setProduct({
        id: res.id,
        ...res.data(),
      }))
  }, [id]);



  return (
    <div className="detalleBody">
        <ItemDetail item={product} />
    </div>
  );
};

export default ProductoDetalle;
