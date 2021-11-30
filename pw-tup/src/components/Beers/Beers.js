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
    /*const [resenia, setResenia] = useState();*/



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

    const [id, setId] = useState();
   /* const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [estilo, setEstilo] = useState();
    const [resenia, setResenia] = useState();
    */

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

   /* const handleIdChange1 = (event) => {
        setId(event.target.value);
    };

    const modifyBeer = () => {
        httpPut('api/beers/'+id+"/",{id: id, name: name, price: price, type: type, review: review})
            .then(fetchbeers)
    }*/



    /*const handleNombreChange = (event) => {
        setCerveza({ ...cerveza, name: event.target.value });
    };

    const handlePrecioChange = (event) => {
        setCerveza({ ...cerveza, type: event.target.value });
    };

    const handleEstiloChange = (event) => {
        setCerveza({ ...cerveza, id: event.target.value });
    };*/

/*    const handleReseniaChange = (event) => {
        setCerveza({ ...cerveza, id: event.target.value });
    };*/

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
                                <legend>Nueva Reseña</legend>
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
                                <div className="mb-3">
                                    <label className="form-label">Reseña</label>
                                    <input type="text" className="form-control" value={review}
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
                                    <label>descripcion</label>
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
                        <input type="number" onChange={handleIdChange} defaultValue={id}/>
                        {/*<input type="text" onChange={handleIdChange} defaultValue={}/>
                        <input type="number" onChange={handleIdChange} defaultValue={id}/>
                        <input type="text" onChange={handleIdChange} defaultValue={id}/>
                        <input type="text" onChange={handleIdChange} defaultValue={id}/>*/}
                       {/* <button onClick={(e)=>{
                            e.preventDefault();
                            httpGet('api/beers/')
                                .then((res) => setBeers(res.data))
                        }}></button>*/}
                        <button onClick={(e)=>{
                            e.preventDefault();
                            httpDelete('api/beers/'+id+"/")
                                .then(fetchbeers)
                        }}>Eliminar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Beers;

