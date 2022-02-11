import "./Burgers.css"
import {useState} from "react";
import pgimg from "../../images/cerveza.png";



function Burgers () {

    const [filtered, setFiltered] = useState(false)

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de filtrar" : "Filtrar"
    }

    const names = ["Simple", "Doble", "Triple","Cuadruple","Quintuple"]

    const price = ["100","200","300"]

    return (
        <div>
            <div className="container-title">
                <h1 className="title">NUESTRAS HAMBURGUESAS</h1>
            </div>
            <div>
                <button className="burger-button" onClick={clickFunction}> {getName()}</button>
            </div>
                {
                    names.map((name) => {
                        return (
                            <div className={"order"}>
                                <div className="product-container">
                                    <div className="center">
                                        <img src={pgimg} className="img-product" alt="logo"/>
                                        <h2 className="product-title">{name}</h2>
                                        <h2 className="product-price">{price}</h2>
                                        <label>Descripcion</label>
                                        <input type="text"/>
                                        {/*<p>{beer.review}</p>*/}
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }



        </div>

    )

}

export default Burgers