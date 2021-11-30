import "./Beers.css";
import pgimg from "../../images/logo1.png";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../../Utils/httpFunctions";
import {httpPut,httpDelete} from "../../Utils/httpFunctions";

const axios = require('axios');

function Beers () {

    const [Rubias, setRubias] = useState(false)
    const [Rojas, setRojas] = useState(false)
    const [Negras, setNegras] = useState(false)
    const [Beers, setBeers] = useState([])
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])
    const [review, setreview] = useState([])


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
        httpPost('api/beers/', {name: name, price: price, type: type,review: review})
            .then(fetchbeers)
    }

    const [cerveza, setCerveza] = useState();



    const handleIdChange = (event) => {
        setCerveza({ ...cerveza, id: event.target.value });
    };
    const handleNombreChange = (event) => {
        setCerveza({ ...cerveza, name: event.target.value });
    };

    const handlePrecioChange = (event) => {
        setCerveza({ ...cerveza, price: event.target.value });
    };

    const handleEstiloChange = (event) => {
        setCerveza({ ...cerveza, type: event.target.value });
    };

    const handleReseniaChange = (event) => {
        setCerveza({ ...cerveza, review: event.target.value });
    };


    useEffect(fetchbeers, [])
    /*useEffect(myFunction)*/

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
                                    <legend>Nueva Reseña</legend>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-control" value={name} placeholder="Nombre"
                                               onChange={(e) =>setName(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Precio</label>
                                        <input type="number" className="form-control" value={price} placeholder="Precio de referencia"
                                               onChange={(e) =>setPrice(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Estilo</label>
                                        <input type="text" className="form-control" value={type} placeholder="rubia, roja o negra"
                                               onChange={(e) =>setType(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Reseña</label>
                                        <input type="text" className="form-control" value={review} placeholder="Opinion de la birra"
                                               onChange={(e) =>setreview(e.target.value)}/>
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
                                    <form>
                                    <img src={pgimg} className="img-product" alt="logo"/>
                                    <h2 className="product-title">{beer.name}</h2>
                                    <h2 className="product-price">{beer.price}</h2>
                                    <h2>{beer.id}</h2>
                                    <label>Descripcion</label>
                                    <p>{beer.review}</p>
                                    {/*<button type="submit">delete</button>*/}
                                </form>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <form action="">
                        <input type="number" onChange={handleIdChange} defaultValue={cerveza?.id} placeholder="Nro de cerveza"/>
                        <input type="text" onChange={handleNombreChange} defaultValue={cerveza?.name}placeholder="Nombre"/>
                        <input type="number" onChange={handlePrecioChange} defaultValue={cerveza?.price}placeholder="Precio"/>
                        <input type="text" onChange={handleEstiloChange} defaultValue={cerveza?.type}placeholder="roja, rubia o negra"/>
                        <input type="text" onChange={handleReseniaChange} defaultValue={cerveza?.review}placeholder="Modificar descripcion"/>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            httpGet('api/beers/'+cerveza.id+"/")
                                .then((res) => setCerveza(res.data))
                        }}>Buscar</button>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            httpPut('api/beers/' + cerveza.id + "/", cerveza)
                                .then(window.location.reload());
                        }}>Modificar</button>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            httpDelete('api/beers/'+cerveza.id+"/")
                                .then(fetchbeers)
                        }}>Eliminar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Beers;

