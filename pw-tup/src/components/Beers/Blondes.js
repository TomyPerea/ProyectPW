import "./Blondes.css";
import pgimg from "../../images/logo1.png";
const cervezas = ["Andes rubia", "Stella Artois","Patagonia Weiss"]

const Blondes = () => {
    return (
        <div>
            <div>
                <div className="blondes-container">
                    <h1 className="blondes-title">RUBIAS</h1>
                </div>
                {
                    cervezas.map((cerveza) => {
                      return (
                      <div className="product-container">
                          <img src={pgimg} className="img-product" alt="logo"/>
                          <h2 className="product-title">{cerveza}</h2>
                          <h2 className="product-price">$100.00</h2>
                          <label className="product-cantidad">Cantidad</label>
                          <input type="number" className="product-box"/>
                          <button className="product-button">Añadir</button>
                      </div>
                      )
                    })
                }

            </div>
        </div>
            );
}

export default Blondes;