import "./Registrarme.css"
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../Utils/httpFunctions";

const Registrarme = () => {
    const [username,setUsername] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [firstname,setFirstname] = useState()
    const [lastname,setLastname] = useState()

    const fetchusers = () => {
        httpGet('api/register/')
            .then((res) => setUsername(res.data))
    }
    const createUsername = (e) => {
        e.preventDefault()
        httpPost('api/register/', {username: username,
            email: email,
            password: password,
            firstname: firstname,
            lastname:lastname})
            .then(fetchusers)
    }

    return (
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
                                required value={firstname}
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
                                required value={lastname}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="control-label">Username</label>
                        <div className="">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >Username</label>
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
                        <label htmlFor="inputPassword3" className="control-label">Contraseña</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="control-label">Reescriba su contraseña</label>
                        <input type="text" name="newPassword" ref={register({
                            validate: (value) => value === password || "Passwords don't match."
                        })} placeholder="Repetir contraseña" required/>
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