import "./Beers.css";
import pgimg from "../../images/logo1.png";
import {useState} from "react";


//const prices = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]

function Beers () {
    const beers = [
        {name: "Andes rubia", type: "rubia"},
        {name: "Stella Artois", type: "rubia"},
        {name: "Patagonia Weiss", type: "rubia"},
        {name: "Stout", type: "negra"},
        {name: "Choco Ale", type: "negra"},
        {name: "Black Mamba", type: "negra"},
        {name: "Dark Reservoir", type: "negra"},
        {name: "Andes Roja", type: "roja"},
        {name: "Patagonia Amber Lager", type: "roja"},
        {name: "American Amber Lager", type: "roja"},
        {name: "Oranjeboom", type: "roja"},
        {name: "Barba Roja Diabla", type: "roja"}]

    const [Rubias, setRubias] = useState(false)
    const [Rojas, setRojas] = useState(false)
    const [Negras, setNegras] = useState(false)

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
         finalbeers = beers.filter((beer) => {
            return beer.type === "rubia"
        })
    } else if (Negras) {
        finalbeers = beers.filter((beer) => {
            return beer.type === "negra"
        })
    } else if (Rojas){
        finalbeers = beers.filter((beer) => {
            return beer.type === "roja"
        })
    } else {
         finalbeers = beers
    }
    function myFunction() {
        let x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div>
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">NUESTRAS CERVEZAS</h1>
                </div>
                <div className="botones-container">
                    <button className="filtro" id="sex" onClick={myFunction}>Filtrar </button>
                    <div className="x" id="myDIV">
                        <div>
                            <input type="checkbox" onClick={clickfunction} />Rubias
                        </div>
                        <div>
                            <input type="checkbox"  onClick={negrasfilter}  />Negras
                        </div>
                        <div>
                            <input type="checkbox"  onClick={redfilter}  />Rojas
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
    );
}
export default Beers;
/*
<ul>
    <li className="list"
    >
        <ul>
            <li className="list" onClick={clickfunction}>rubias</li>
            <li className="list"onClick={negrasfilter}>negras</li>
            <li className="list"onClick={redfilter}>rojas</li>
        </ul>
    </li>
</ul>*/

//<button className="tipodebir" >Rubias</button>
//<button className="tipodebir" >Negras</button>