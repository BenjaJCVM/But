import { ItemsContext } from "../../context/CartContext/CartContext";
import { useContext, useState, useEffect } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Modal from "../../components/Modal/Modal";
import * as yup from "yup";
import { Formik } from "formik";
import { doc, getDoc} from "firebase/firestore";

//traer lo del modal aca y hacer una funcion para traer la orden y luego el cambiar estado


const Checkout = () => {
  const cart = useContext(ItemsContext);
  const [total, setTotal] = useState(0);
  const [ordenID, setOrdenID] = useState("");
  const [estado, cambiarEstado] = useState(false);
  const [recibo, setRecibo] = useState([]);

 

  const sumaTotal = () => {
    let totales = cart.items.map((item) => item.total);
    const sumaTotales = totales.reduce(
      (anterior, actual) => anterior + actual,
      0
    );
    setTotal(sumaTotales);
  };

  const esquemaYup = yup
    .object()
    .shape({
      nombre: yup.string().required("Requerido"),
      apellido: yup.string().required("Requerido"),
      telefono: yup.string().required("Requerido"),
      email: yup.string().email().required("Requerido"),
      confirmacionEmail: yup.string().email().required("Requerido"),
    })
    .required();

  const submitHandler = (values, resetForm) => {
    const orden ={
        comprador:{...values},
        productos: cart.items.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
        })),
        date: serverTimestamp()
      };
    const ordenCompra = collection(db, "ordenes");
    addDoc(ordenCompra, orden).then(({ id }) => setOrdenID(id));
    resetForm();
  };

  useEffect(() => {
    sumaTotal();
  }, [cart]);

  const getOrden = () =>{
    const q = doc(db, 'ordenes', ordenID);
    getDoc(q)
        .then(res => setRecibo({
            id:res.id,
            ...res.data()}))
  }

  const estadoYRecibo = () =>{
    getOrden()
    setTimeout(function(){
      cambiarEstado(!estado)
    } , 3000)
}

  return (
    <div className="contenedorCheckout">
      <div className="contenedorFormCheck">
        <h3 className="tituloForm">Identificacion</h3>
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
            confirmacionEmail: ""
          }}
          onSubmit={(values, { resetForm}) => submitHandler(values, resetForm)}
          validationSchema={esquemaYup}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
            isValid,
          }) => (
            <div className="contendorForm">
              <form className="contenedorInputs" onSubmit={handleSubmit}>
                <input
                  placeholder="Nombre"
                  name="nombre"
                  type="text"
                  onChange={handleChange}
                  value={values.nombre}
                  onBlur={handleBlur}
                  required
                />

                <input
                  placeholder="Apellidos"
                  name="apellido"
                  type="text"
                  onChange={handleChange}
                  value={values.apellido}
                  onBlur={handleBlur}
                  required
                />

                <input
                  placeholder="Telefono"
                  name="telefono"
                  type="text"
                  onChange={handleChange}
                  value={values.telefono}
                  onBlur={handleBlur}
                  required
                />

                <input
                  placeholder="Email"
                  className="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  required
                />

                <input
                  placeholder="Email"
                  className="email"
                  name="confirmacionEmail"
                  type="email"
                  onChange={handleChange}
                  value={values.confirmacionEmail}
                  onBlur={handleBlur}
                  required
                />

                <input
                  type="submit"
                  className="botonComprarAhora"
                  value="Comprar ahora"
                  disabled={!isValid}
                  
                />
              </form>
              {ordenID && (
                <p>
                  Compra realizada con exito! Su orden de compra es:{" "}
                  <span className="orderIDNegrita">{ordenID}</span>
                </p>
              )}
            </div>
          )}
        </Formik>
        <Modal 
            estado={estado}
            cambiarEstado={cambiarEstado}
            recibo={recibo}
            total={total}
        >
            {cart.items.map((item) => (
              <div className="divLineModal">
                <p className="itemModal">Producto: {item.title}</p>
                <p className="itemModal">Precio Unitario: {item.price}</p>
                <p className="itemModal">Cantidad: {item.cantidad}</p>
              </div>
          ))}
        </Modal>
        <button onClick={estadoYRecibo} className={!ordenID ? 'disable' : 'verRecibo'}>Ver recibo</button>
      </div>
      <div className="contenedorDetalleCheck">
        <h3 className="tituloResumenCompra">Resumen de la compra</h3>
        <div className="contItemsCheck">
          {cart.items.map((item) => (
            <div key={item.id} className="itemEnCheckout">
              <div className="contImagenCheckout">
                <img src={item.img} className="carritoImagenCheckout"></img>
              </div>
              <div className="contInfoCheckout">
                <div className="contTituloCheckout">
                  <p className="tituloCheckout">{item.title}</p>
                </div>
                <div className="contCantAndPrecio">
                  <p className="cantidadCheckout pCantCheck">
                    Cantidad: {item.cantidad}
                  </p>
                  <p className="pPrecioCheck">
                    Total: ${item.price * item.cantidad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contTotal">
          <p className="totalCheck">Total: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
