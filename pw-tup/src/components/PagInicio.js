import "./PagInicio.css"
import React from "react";
import pgimg from "../images/cervezas.png";
import pgimg1 from "../images/pintas.jpeg";
import pgimg2 from "../images/okey.jpg";
import pgimg3 from "../images/554456752_171431165_1024x576.jpg";
import pgimg4 from "../images/hamburguesa-3-655x368.jpg";
import pgimg5 from "../images/istockphoto-1188412964-612x612.jpg";

function PagInicio () {

    return (
        <div className="backgroundColor">
            <div className="container">
                <div className="row">
                    <h1 className="col-lg-12 home-title">¡Bienvenidos a BeerBoys!</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="carousel-img col-lg-6 col-xs-12">
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
                    <div className="col-lg-6 col-xs-12">
                       {/* <h2 className="home-subtitle">Registrate para acceder al foro de cervezas mas grande del pais!</h2>*/}
                        <p className="home-texto">Bienvenidos,
                            este foro es un lugar para los amantes de la cerveza,para que los entusiastas del sabor amargo
                            pero agradable de una buena fresca, vengan  a dejar sus recomendaciones para el mejor acompañiamiento de
                            una hamburguesa, una picada, una charla con amigos, un partido de futbol, un asado, unos sanguchitos y para ser honesto,
                            de todas las cosas lindas.
                            Pasa y descubri, la adecuada para vos. Ya sea roja, negra o rubia, Artesanal o industrial, suave o fuerte.
                            Veni mira y comparti opiniones sobre "birras" internacionales o nacionales.
                            No te molesto mas, entra y tentate, de una buena cerveza.</p>
                    </div>
                </div>
            </div>
            <div className="container-burger">
                <h3>¡Implementamos una nueva sección!</h3>
            </div>
            <div>
                <div className="carousel-img2 col-lg-6 col-xs-12">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={pgimg3} className="d-block w-100 "/>
                            </div>
                            <div className="carousel-item">
                                <img src={pgimg4} className="d-block w-100 "/>
                            </div>
                            <div className="carousel-item">
                                <img src={pgimg5} className="d-block w-100 "/>
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
                    <div className="col-lg-6 col-xs-12">
                        {/* <h2 className="home-subtitle">Registrate para acceder al foro de cervezas mas grande del pais!</h2>*/}
                        <p className="home-texto">Gracias a las buenas reseñas que fueron agregando ustedes, pudimos ampliar nuestro negocio,
                            formando una nueva seccion para hamburguesas. El mejor acompañamiento de una buena birra, como podes apreciar en
                            nuestra otra sección. Ahora sí! Te invitamos a registrarte, ingresar y dejar tu opinion de las hamburguesas mas ricas que hayas
                            probado asi todos los amantes de las hamburguesas podemos estar bien informados! Gracias!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <footer className="col-lg-12">
                        <h4 className="footer">MLE Web Development ®</h4>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default PagInicio;