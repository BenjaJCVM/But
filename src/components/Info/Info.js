const Info = () => {
    return(
        <div className="info">
            <div className="infoTruck displayInfo">
                <i className="bi bi-truck"></i>
                <p>Envíos a todo el país</p>
            </div>
            <div className="infoCard displayInfo">
                <i className="bi bi-credit-card"></i>
                <p>Hasta 12 cuotas</p>
            </div>
            <div className="infoLock displayInfo">
                <i className="bi bi-lock"></i>
                <p>Sitio Seguro</p>
            </div>
        </div>
    );
}

export default Info;