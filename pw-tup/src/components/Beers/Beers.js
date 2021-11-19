import "./Beers.css";
import pgimg from "../../images/logo1.png";
import {useState} from "react";

const beers = [
    {name:"Andes rubia", type:"rubia"},
    {name:"Stella Artois", type:"rubia"},
    {name:"Patagonia Weiss",type:"rubia"}, {name:"Stout", type:"negra"}, {name:"Choco Ale", type:"negra"},{name:"Black Mamba",type:"negra"},{name:"Dark Reservoir",type:"negra"},{name:"Andes Roja",type:"roja"}, {name:"Patagonia Amber Lager",type:"roja"}, {name:"American Amber Lager",type:"roja"},{name:"Oranjeboom",type:"roja"},{name:"Barba Roja Diabla",type:"roja"}]
const prices = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]

function Beers () {
    const[filtered,setfiltered] = useState(false)
    return (
        <div>
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">NUESTRAS CERVEZAS</h1>
                </div>
                <ul>
                    <li className="list"onClick={() => {
                        setfiltered(!filtered)}}
                    >{filtered ? "dejar de filtrar" : "filtrar"}
                    <ul>
                        <li className="list">negras</li>
                        <li className="list">rojas</li>
                        <li className="list">rubias</li>
                    </ul>
                    </li>
                </ul>
                <div className="products-container">
                    {
                        beers
                            .filter((beer) => {
                                return beer.type === "rubia"})
                            .map((beer, price) => {
                            return (
                                <div className="product-container">
                                    <img src={pgimg} className="img-product" alt="logo"/>
                                    <h2 className="product-title">{beer.name}</h2>
                                    <h2 className="product-price">{price}</h2>
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