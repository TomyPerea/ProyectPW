import "./Burgers.css"
import {useEffect, useState} from "react";
import pgimg from "../../images/cerveza.png";
import {httpGet, httpPost} from "../../Utils/httpFunctions";



function Burgers () {

    const [filtered, setFiltered] = useState([])
    const [Burgers, setBurgers] = useState([])
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [type, setType] = useState([])
    const [review, setReview] = useState([])



    const createBurger = (e) => {
        e.preventDefault()
        httpPost('api/burgers', {name: name, price: price, type: type, review: review})
            .then(fetchburgers)
    }


    const myFunction = () => {
        let filter = document.getElementById("myDIV");
        if (filter.style.display === "flex") {
            filter.style.display = "none";
        } else {
            filter.style.display = "flex";
        }
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

    useEffect(fetchburgers,[])

    return (
        <div>
            <div className="container-title">
                <h1 className="title">NUESTRAS HAMBURGUESAS</h1>
            </div>
            <div className="botones-container">
                <button className="filtro" id="sex" onClick={reName}>{getName()}</button>
                <div className="x" id="myDIV">
                    <div>
                        <button className="item-type" onClick={() => {httpGet('api/beers/?type=simples')
                            .then((res) => setBurgers(res.data))}}>Simples</button>
                    </div>
                    <div>
                        <button className="item-type" onClick={() => {httpGet('api/beers/?type=dobles')
                            .then((res) => setBurgers(res.data))}}>Dobles</button>
                    </div>
                    <div>
                        <button className="item-type" onClick={() => {httpGet('api/beers/?type=triples')
                            .then((res) => setBurgers(res.data))}}>Triples</button>
                    </div>
                    <div>
                        <button onClick={fetchburgers}>Todas</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Burgers