import "./Rojas.css";
import pgimg from "../../images/logo1.png";
const cervezas = ["Andes Roja", "Patagonia Amber Lager", "American Amber Lager","Oranjeboom","Barba Roja Diabla","Temple Demon Honey"]
const Rojas = () => {
    return (
        <div>
            <div className="red-container">
                <h1 className="red-title">ROJAS</h1>
            </div>
            <div>
                {
                    cervezas.map((cerveza) => {
                        return (
                            <div className={"Big-container"}>
                                <div className="product-container">
                                    <img src={pgimg} className="img-product" alt="logo"/>
                                    <h2 className="product-title">{cerveza}</h2>
                                    <h2 className="product-price">$100.00</h2>
                                    <label className="product-cantidad">Cantidad</label>
                                    <input type="number" className="product-box"/>
                                    <button className="product-button">Añadir</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Rojas;
