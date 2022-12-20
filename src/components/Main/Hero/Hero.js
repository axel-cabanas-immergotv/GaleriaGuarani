import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero () {
    React.useEffect(() => {
        Aos.init({duration: 1800})
    });

    return (
        <>
        <div className="hero">
            <div className="box-container">
                <div className="hero__content">
                    <img src="./assets/logo.png" width='140px' height='auto' alt="logo"/>
                    <p className="hero__content-text ready pb-4">
                        GALERIA GUARANI S.A
                    </p>
                    <div data-aos='fade-right' data-aos-anchor-placement="bottom-bottom">
                        <Link to='/marcas'>Nuestras marcas</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}