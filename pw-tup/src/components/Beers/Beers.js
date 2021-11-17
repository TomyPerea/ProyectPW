import "./Beers.css";
import pgimg from "../../images/logo1.png";
const beers = ["Andes rubia", "Stella Artois","Patagonia Weiss","Stout", "Choco Ale","Black Mamba","Dark Reservoir","Andes Roja", "Patagonia Amber Lager", "American Amber Lager","Oranjeboom","Barba Roja Diabla"]
const prices = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]

const Beers = () => {
    return (
        <div>
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">NUESTRAS CERVEZAS</h1>
                </div>
                <div className="products-container">
                    {
                        beers.map((beer, price) => {
                            return (
                                <div className="product-container">
                                    <img src={pgimg} className="img-product" alt="logo"/>
                                    <h2 className="product-title">{beer}</h2>
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