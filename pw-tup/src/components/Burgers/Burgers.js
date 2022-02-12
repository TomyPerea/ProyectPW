import "./Burgers.css"
import {useEffect, useState} from "react";
import pgimg from "../../images/25481.jpg";
import {httpDelete, httpGet, httpPost, httpPut} from "../../Utils/httpFunctions";



function Burgers () {

    const [filtered, setFiltered] = useState([])
    const [burgers, setBurgers] = useState([])
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])
    const [review, setReview] = useState([])
    const [hamburguesa, setHamburguesa] = useState({})



    const createBurger = (e) => {
        e.preventDefault()
        httpPost('api/burgers/', {name: name, price: price, type: type, review: review})
            .then(fetchburgers)
            .then(refreshPage)
    }


    const myFunction = () => {
        let filter = document.getElementById("myDIV");
        if (filter.style.display === "flex") {
            filter.style.display = "none";
        } else {
            filter.style.display = "flex";
        }
    }

    const refreshPage = () => {
        window.location.reload(false)
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

    const fetchburgers = () => {
        httpGet('api/burgers/')
            .then((res) => setBurgers(res.data))
    }

    const handleIdChange = (event) => {
        setHamburguesa({ ...hamburguesa, id: event.target.value });
    };
    const handleNombreChange = (event) => {
        setHamburguesa({ ...hamburguesa, name: event.target.value });
    };

    const handlePrecioChange = (event) => {
        setHamburguesa({ ...hamburguesa, price: event.target.value });
    };

    const handleEstiloChange = (event) => {
        setHamburguesa({ ...hamburguesa, type: event.target.value });
    };

    const handleReseniaChange = (event) => {
        setHamburguesa({ ...hamburguesa, review: event.target.value });
    };

    useEffect(fetchburgers,[])

    return (
        <div>
            <div>
                <div className="container-title">
                    <h1 className="title">NUESTRAS HAMBURGUESAS</h1>
                </div>
                <div className="botones-container">
                    <button className="filtro" id="sex" onClick={reName}>{getName()}</button>
                    <div className="x" id="myDIV">
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/burgers/?type=simple')
                                .then((res) => setBurgers(res.data))}}>Simples</button>
                        </div>
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/burgers/?type=doble')
                                .then((res) => setBurgers(res.data))}}>Dobles</button>
                        </div>
                        <div>
                            <button className="item-type" onClick={() => {httpGet('api/burgers/?type=triple')
                                .then((res) => setBurgers(res.data))}}>Triples</button>
                        </div>
                        <div>
                            <button onClick={fetchburgers}>Todas</button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <form onSubmit={createBurger} className="col-lg-6">
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
                                        <input type="text" className="form-control" value={type} placeholder="simple, doble o triple"
                                               onChange={(e) =>setType(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Reseña</label>
                                        <input type="text" className="form-control" value={review} placeholder="Opinion de la burger"
                                               onChange={(e) =>setReview(e.target.value)}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Crear Hamburguesa</button>
                                </fieldset>
                            </form>
                            <div  className="form-modify col-lg-6">
                                <legend>Modificar reseña</legend>
                                <form action="" className="form-container">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="number" onChange={handleIdChange} defaultValue={hamburguesa?.id} placeholder="Nro de hamburguesa"/>
                                                <input type="text" onChange={handleNombreChange} defaultValue={hamburguesa?.name} placeholder="Nombre"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="number" onChange={handlePrecioChange} defaultValue={hamburguesa?.price} placeholder="Precio"/>
                                                <input type="text" onChange={handleEstiloChange} defaultValue={hamburguesa?.type} placeholder="simple, doble o triple"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input type="text" onChange={handleReseniaChange} defaultValue={hamburguesa?.review}placeholder="Modificar descripcion"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="col-lg-12">
                                            <button className="button-modify" onClick={(e)=>{
                                                e.preventDefault();
                                                httpGet('api/burgers/'+hamburguesa.id+"/")
                                                    .then((res) => setHamburguesa(res.data))
                                            }}>Buscar</button>
                                            <button className="button-modify" onClick={(e)=>{
                                                e.preventDefault();
                                                httpPut('api/burgers/' + hamburguesa.id + "/", hamburguesa)
                                                    .then(refreshPage);
                                            }}>Modificar</button>
                                            <button className="button-modify" onClick={(e)=>{
                                                e.preventDefault();
                                                httpDelete('api/burgers/'+hamburguesa.id+"/")
                                                    .then(refreshPage)
                                                    .then(fetchburgers);
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
                        burgers.map((burger) => {
                            return (
                                <div className="product-container">
                                    <form className="centrar">
                                        <img src={pgimg} className="img-product" alt="logo"/>
                                        <h2 className="product-title">{burger.name}</h2>
                                        <h2 className="product-price">{burger.price}</h2>
                                        <h2 className="idbeer">{burger.id}</h2>
                                        <label>Descripcion</label>
                                        <p>{burger.review}</p>
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

export default Burgers