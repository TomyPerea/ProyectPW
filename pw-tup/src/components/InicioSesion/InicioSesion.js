import "./InicioSesion.css"
import {Link} from "react-router-dom";

const InicioSesion = () => {
    return (
      <div>
          <div className="center">
              <form className="form-horizontal">
                  <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail3" placeholder="Mail"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                      <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                          <div className="checkbox">
                              <label>
                                  <input type="checkbox"/> Recordarme
                              </label>
                          </div>
                      </div>
                  </div>
                  <div>
                      <h2 className="text">¿No tenes cuenta? Registrate</h2>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10 buttons">
                          <button type="submit" className="btn btn-default button">Ingresar</button>
                          <Link to={'./registrarme'}><button type="submit" className="btn btn-default button">Registrarme</button></Link>
                      </div>
                  </div>
              </form>
          </div>
      </div>

    );
}

export default InicioSesion;