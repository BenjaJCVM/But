import { ItemsContext } from "../../context/CartContext/CartContext";
import { useContext, useState, useEffect } from "react";
import { db } from '../../firebase/FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import Form from "../../components/Form/Form";


const valoresIniciales = {
	nombre: '',
	apellido: '',
	telefono: '',
    mail:''
};


const Checkout = () =>{
    const cart = useContext(ItemsContext);
    const [total, setTotal] = useState(0);
    const [values, setValues] = useState(valoresIniciales);
    
    const orden = {
        comprador:{
            values
        },
        productos: cart.items.map(item => ({id:item.id, title:item.title, price:item.price}))
    }

    const valueToState = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

    const terminarCompra = (e) =>{
        e.preventDefault();
        const ordenCompra = collection(db, 'ordenes');
        addDoc(ordenCompra, orden)
            .then(({id}) => console.log(id));
        setValues(valoresIniciales);
    }

    
    const sumaTotal = () =>{
        let totales = cart.items.map(item => item.total)
        const sumaTotales = totales.reduce((anterior, actual) => anterior + actual, 0);
        setTotal(sumaTotales);
    }

    useEffect(() => {
        sumaTotal();
    }, [cart])


    return(
        <div className="contenedorCheckout">
            <div className="contenedorFormCheck">
                <h3 className="tituloForm">Identificacion</h3>
                <Form valueToState={valueToState} values={values} terminarCompra={terminarCompra}/>
            </div>
            <div className="contenedorDetalleCheck">
                <h3 className="tituloResumenCompra">Resumen de la compra</h3>
                <div className="contItemsCheck">
                    {
                        cart.items.map(item =>
                        <div key={item.id} className='itemEnCheckout'>
                        <div className="contImagenCheckout">
                            <img src={item.img} className='carritoImagenCheckout'></img>
                        </div>
                        <div className="contInfoCheckout">
                            <div className="contTituloCheckout">
                                <p className="tituloCheckout">{item.title}</p>
                            </div>
                            <div className="contCantAndPrecio">
                                    <p className="cantidadCheckout pCantCheck">Cantidad: {item.cantidad}</p>
                                    <p className="pPrecioCheck">Total: ${item.price * item.cantidad}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="contTotal">
                    <p className="totalCheck">Total: ${total}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout