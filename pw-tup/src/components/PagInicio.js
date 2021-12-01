import "./PagInicio.css"
import React from "react";
import pgimg from "../images/logo1.png";
import pgimg1 from "../images/patagonias.png";
import pgimg2 from "../images/247.png";

function PagInicio () {

    return (
        <div className="carousel-img">
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
    )
}

export default PagInicio;