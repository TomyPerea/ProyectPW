import "./PagInicio.css"
import React from "react";
import pgimg from "../images/cervezas.png";
import pgimg1 from "../images/pintas.jpeg";
import pgimg2 from "../images/okey.jpg";

function PagInicio () {

    return (
        <div className="backgroundColor">
            <h1 className="home-title">¡Bienvenidos a BeerBoys!</h1>
        <div className="carousel-img centrar">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pgimg} className="d-block w-100 "/>
                    </div>
                    <div className="carousel-item">
                        <img src={pgimg1} className="d-block w-100 "/>
                    </div>
                    <div className="carousel-item">
                        <img src={pgimg2} className="d-block w-100 "/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            <div>
            <h2 className="home-subtitle">Registrate para acceder al foro de cervezas mas grande del pais!</h2>
            <p className="home-texto">Bienvenidos,
                este foro es un lugar para los amantes de la cerveza,para que los entusiastas del sabor amargo
                pero agradable de una buena fresca, vengan  a dejar sus recomendaciones para el mejor acompañiamiento de
                una pizza, una picada, una charla con amigos, un partido de futbol, un asado, unos sanguchitos y para ser honesto,
                de todas las cosas lindas.
                Pasa y descubri, la adecuada para vos. Ya sea roja, negra o rubia, Artesanal o industrial, suave o fuerte.
                Veni mira y comparti opiniones sobre "birras" internacionales o nacionales.
                No te molesto mas, entra y tentate, de una buena cerveza.</p>
            </div>
        </div>
    )
}

export default PagInicio;