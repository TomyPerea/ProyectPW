import "./Beers.css";
import pgimg from "../../images/logo1.png";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../../Utils/httpFunctions";
const axios = require('axios');


//const prices = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]

function Beers () {

    const [Rubias, setRubias] = useState(false)
    const [Rojas, setRojas] = useState(false)
    const [Negras, setNegras] = useState(false)
    const [Beers, setBeers] = useState([])
    const [nombre, setNombre] = useState([])
    const [precio, setPrecio] = useState([])
    const [estilo, setEstilo] = useState([])

    const clickfunction = () => {
        setRubias(!Rubias)
    }
    const negrasfilter = () => {
        setNegras(!Negras)
    }
    const redfilter = () => {
        setRojas(!Rojas)
    }

    let finalbeers;
    if (Rubias) {
        finalbeers = Beers.filter((beer) => {
            return beer.type === "rubia"
        })
    } else if (Negras) {
        finalbeers = Beers.filter((beer) => {
            return beer.type === "negra"
        })
    } else if (Rojas) {
        finalbeers = Beers.filter((beer) => {
            return beer.type === "roja"
        })
    } else {
        finalbeers = Beers
    }

    function myFunction() {
        let x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const fetchbeers = () => {
        httpGet('api/beers/')
            .then((res) => setBeers(res.data))
    }

    const createBeers = (name, price, type) => {
        httpPost('api/beers/', {nombre: nombre, precio: precio, estilo: estilo})
            .then(fetchbeers)
    }

    useEffect(fetchbeers, [])


    return (
        <div>
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">NUESTRAS CERVEZAS</h1>
                </div>
                <div className="botones-container">
                    <button className="filtro" id="sex" onClick={myFunction}>Filtrar</button>
                    <div className="x" id="myDIV">
                        <div>
                            <input type="checkbox" className="item-type" onClick={clickfunction}/>Rubias
                        </div>
                        <div>
                            <input type="checkbox" className="item-type" onClick={negrasfilter}/>Negras
                        </div>
                        <div>
                            <input type="checkbox" className="item-type" onClick={redfilter}/>Rojas
                        </div>
                    </div>
                    <div>
                        <form onSubmit={createBeers}>
                            <fieldset>
                                <legend>Disabled fieldset example</legend>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" value={nombre}
                                           onChange={(e) =>setNombre(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Precio</label>
                                    <input type="number" className="form-control" value={precio}
                                           onChange={(e) =>setPrecio(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Estilo</label>
                                    <input type="text" className="form-control" value={estilo}
                                           onChange={(e) =>setEstilo(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Crear Cerveza</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-container">
                    {
                        finalbeers.map((beer) => {
                            return (
                                <div className="product-container">
                                    <img src={pgimg} className="img-product" alt="logo"/>
                                    <h2 className="product-title">{beer.name}</h2>
                                    <h2 className="product-price">100</h2>
                                    <label className="product-cantidad">Cantidad</label>
                                    <input type="number" className="product-box"/>
                                    <button className="product-button">Descripcion</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Beers;

