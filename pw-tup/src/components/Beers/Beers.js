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
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])

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

    const createBeers = (e) => {
        e.preventDefault()
        httpPost('api/beers/', {name: name, price: price, type: type})
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
                                    <input type="text" className="form-control" value={name}
                                           onChange={(e) =>setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Precio</label>
                                    <input type="number" className="form-control" value={price}
                                           onChange={(e) =>setPrice(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Estilo</label>
                                    <input type="text" className="form-control" value={type}
                                           onChange={(e) =>setType(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Crear Cerveza</button>
                            </fieldset>
                        </form>
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

