const Form = ({valueToState, values, terminarCompra}) =>{
    return(
        <div className="contendorForm">

            <form className="contenedorInputs">
                <input placeholder="Nombre" name="nombre" type="text" onChange={valueToState} value={values.nombre}></input>

                <input placeholder="Apellidos" name="apellido" type="text" onChange={valueToState} value={values.apellido}></input>

                <input placeholder="Telefono" name="telefono" type="tel" onChange={valueToState} value={values.telefono}></input>

                <input placeholder="Email"  name="mail" type="mail" onChange={valueToState} value={values.mail}></input>
                <input placeholder="Email" name="mail" type="mail" onChange={valueToState} value={values.mail}></input>

                <button className="botonComprarAhora" onClick={terminarCompra}>Comprar ahora</button>
            </form>
        </div>
    )
}

export default Form;