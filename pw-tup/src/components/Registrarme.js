import "./Registrarme.css"
import {useEffect, useState} from "react";
import {httpGet, httpPost2} from "../Utils/httpFunctions";
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert2';



const Registrarme = () => {

    const [username,setUsername] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [first_name,setFirstname] = useState()
    const [last_name,setLastname] = useState()
    const history = useHistory();

    const mostrarAlerta=()=>{
        swal.fire({
            title: 'Se ha registrado con éxito, por favor Inicie sesión',
            icon: 'success'}
        )
    }
    const mostrarError=()=>{
        swal.fire({
            title: 'No se pudo registrar, intente nuevamente',
            icon: 'error'}
        )
    }

    const createUsername = (e) => {
        e.preventDefault()
        httpPost2('api/register/', {username: username,
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name}).then(() => {
                mostrarAlerta();
                history.push('/Login');
        }).catch(() => {
            mostrarError();
        })}

    return (
        <div className="padding-top">
            <div className="form-container">
                <div className="center">
                    <form className="form-horizontal" onSubmit={createUsername}>
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="control-label">Email</label>
                            <div className="form1">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Mail"
                                       onChange={(e) => setEmail(e.target.value)}
                                       required value={email}
                                       minLength="5"
                                       maxLength="50"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Nombre</label>
                            <div className="">
                                <input
                                    onChange={(e) => setFirstname(e.target.value)}
                                    name="Firstname"
                                    type="text"
                                    placeholder="Nombre"
                                    className="form-control"
                                    required value={first_name}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Apellido</label>
                            <div className="">
                                <input
                                    onChange={(e) => setLastname(e.target.value)}
                                    name="Lastname"
                                    type="text"
                                    placeholder="Apellido"
                                    className="form-control"
                                    required value={last_name}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="control-label">Username</label>
                            <div className="">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    className="form-control"
                                    required value={username}
                                    minLength="8"
                                    maxLength="30"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    required
                                    value={password}
                                />
                            </div>
                        </div>
                        {/*<div className="form-group form">
                        <div className="col-sm-offset-2 buttons registerbutton">*/}
                        <button type="submit" className="btn btn-default button">Registrarme</button>
                        {/* </div>
                    </div>*/}
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Registrarme;