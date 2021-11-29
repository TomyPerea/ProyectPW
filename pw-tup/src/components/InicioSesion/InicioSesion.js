import "./InicioSesion.css"
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import {httpPost} from "../../Utils/httpFunctions";
import swal from 'sweetalert2';

const InicioSesion = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const history = useHistory();

    const ingresado=()=>{
        swal.fire({
            title: 'Ha iniciado sesion correctamente',
            icon: 'success'}
        )
    }

    const login = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then((res) => {
            localStorage.setItem('token', res.data.access)
            history.push('/')
        })
    }

    return (
      <div className="login">
          <div>
              <h1>Registrate para poder realizar compras</h1>
          </div>
          <div className="form-container1 center">
              <form className="form-horizontal" onSubmit={login}>
                  <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
                      <div className="col-sm-10">
                          <input
                              className="form-control"
                              id="exampleFormControlInput1"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Username"
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                      <div className="col-sm-10">
                          <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Password" />
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
                          <button type="submit" className="btn btn-default button registerbutton">Ingresar</button>
                          <Link to={'./registrarme'}><button className="btn btn-default button">Registrarme</button></Link>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default InicioSesion;