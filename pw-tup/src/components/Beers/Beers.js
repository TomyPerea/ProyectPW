import "./Beers.css";
import pgimg from "../../images/cerveza.png";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../../Utils/httpFunctions";
import {httpPut,httpDelete} from "../../Utils/httpFunctions";


function Beers () {

    const [Rubias, setRubias] = useState(false)
    const [Rojas, setRojas] = useState(false)
    const [Negras, setNegras] = useState(false)
    const [Beers, setBeers] = useState([])
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])
    const [review, setReview] = useState([])
    const [cerveza, setCerveza] = useState();
    const [filtered, setFiltered] = useState([])

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
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
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

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const reName = () => {
        myFunction();
        clickFunction()
    }

    const getName = () => {
        return filtered ? "Filtrar" : "Dejar de filtrar"
    }

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

    return (
        <div className="backgroundColor">
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">NUESTRAS CERVEZAS</h1>
                </div>
                <div className="botones-container">
                    <button className="filtro" id="sex" onClick={reName}>{getName()}</button>
                    <div className="x" id="myDIV">
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/beers/?type=rubia')
                                .then((res) => setBeers(res.data))}}>Rubias</button>
                        </div>
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/beers/?type=negra')
                                .then((res) => setBeers(res.data))}}>Negras</button>
                        </div>
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/beers/?type=roja')
                                .then((res) => setBeers(res.data))}}>Rojas</button>
                        </div>
                        <div>
                            <button onClick={fetchbeers}>Todas</button>
                        </div>
                    </div>
                        <div className="container">
                            <div className="row">
                                <form onSubmit={createBeers} className="col-lg-6">
                                    <fieldset>
                                        <legend className="custom-legend">Nueva Reseña</legend>
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
                                                   onChange={(e) =>setReview(e.target.value)}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Crear Cerveza</button>
                                    </fieldset>
                                </form>
                                <div  className="form-modify col-lg-6">
                                    <legend>Modificar reseña</legend>
                                    <form action="" className="form-container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="number" onChange={handleIdChange} defaultValue={cerveza?.id} placeholder="Nro de cerveza"/>
                                                <input type="text" onChange={handleNombreChange} defaultValue={cerveza?.name}placeholder="Nombre"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="number" onChange={handlePrecioChange} defaultValue={cerveza?.price}placeholder="Precio"/>
                                                <input type="text" onChange={handleEstiloChange} defaultValue={cerveza?.type}placeholder="roja, rubia o negra"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="text" onChange={handleReseniaChange} defaultValue={cerveza?.review}placeholder="Modificar descripcion"/>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="col-lg-12">
                                                <button className="button-modify" onClick={(e)=>{
                                                    e.preventDefault();
                                                    httpGet('api/beers/'+cerveza.id+"/")
                                                        .then((res) => setCerveza(res.data))
                                                }}>Buscar</button>
                                                <button className="button-modify" onClick={(e)=>{
                                                    e.preventDefault();
                                                    httpPut('api/beers/' + cerveza.id + "/", cerveza)
                                                        .then(window.location.reload);
                                                }}>Modificar</button>
                                                <button className="button-modify" onClick={(e)=>{
                                                    e.preventDefault();
                                                    httpDelete('api/beers/'+cerveza.id+"/")
                                                        .then(fetchbeers)
                                                }}>Eliminar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                <div className="products-container">
                    {
                        finalbeers.map((beer) => {
                            return (
                                <div className="product-container">
                                    <form className="centrar">
                                        <img src={pgimg} className="img-product" alt="logo"/>
                                        <h2 className="product-title">{beer.name}</h2>
                                        <h2 className="product-price">{beer.price}</h2>
                                        <h2 className="idbeer">{beer.id}</h2>
                                        <label>Descripcion</label>
                                        <p>{beer.review}</p>
                                    </form>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="container">

                </div>
            </div>
        </div>
    )
}

export default Beers;

