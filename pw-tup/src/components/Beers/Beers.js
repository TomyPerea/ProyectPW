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

    let id = beers.id;

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
    const deleteBeer = () =>{
        httpDelete('api/beers/'+id+"/")
            .then(fetchbeers)
    }
    const modifyRecipe = () =>{
        httpPut('api/Recipes/'+id+"/", {id: beers.id,name: name, price: price, type: type,review: review})
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
                                    <h2 className="product-price">{beer.price}</h2>
                                    <label>descripcion</label>
                                    <p>{beer.review}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <form onSubmit={deleteBeer}>
                        <button type="submit" className="bg-black text-white px-2 px-1">
                            Borrar cerveza
                        </button>
                    </form>
                    <form onSubmit={modifyRecipe}>
                        <input type="text" id="disabledTextInput" className="form-control" value={review}
                               onChange={(e) => setreview(e.target.value)}
                               placeholder="Modificar review"
                        />
                        <button type="submit" className="bg-black text-white px-2 px-1">
                            Modificar review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Beers;

