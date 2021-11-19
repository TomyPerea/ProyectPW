import "./Registrarme.css"

const Registrarme = () => {
    return (
        <div className="form-container">
            <div className="center">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="control-label">Email</label>
                        <div className="form1">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Mail"/>
                        </div>
                    </div>
                    <div>
                        <label className="control-label">Nombre</label>
                        <div className="">
                            <input type="name" className="form-control" id="inputEmail3" placeholder="Nombre"/>
                        </div>
                    </div>
                    <div>
                        <label className="control-label">Apellido</label>
                        <div className="">
                            <input type="name" className="form-control" id="inputEmail3" placeholder="Apellido"/>
                        </div>
                    </div>
                    <div>
                        <label className="control-label">DNI</label>
                        <div className="">
                            <input type="number" className="form-control" id="inputEmail3" placeholder="DNI"/>
                        </div>
                    </div>
                    <div>
                        <label className="control-label">Fecha nacimiento</label>
                        <div className="">
                            <input type="date" className="form-control" id="inputEmail3" placeholder="Nacimiento"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="control-label">Contraseña</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="control-label">Reescriba su contraseña</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="form-group form">
                        <div className="col-sm-offset-2 buttons registerbutton">
                            <button type="submit" className="btn btn-default button">Registrarme</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registrarme;