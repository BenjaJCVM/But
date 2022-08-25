const Info = () => {
    return(
        <div className="info">
            <div className="infoTruck displayInfo">
                <i class="bi bi-truck"></i>
                <p>Envíos a todo el país</p>
            </div>
            <div className="infoCard displayInfo">
                <i class="bi bi-credit-card"></i>
                <p>Hasta 12 cuotas</p>
            </div>
            <div className="infoLock displayInfo">
                <i class="bi bi-lock"></i>
                <p>Sitio Seguro</p>
            </div>
        </div>
    );
}

export default Info;