import React from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css';
import Timeline from "../../components/Timeline/Timeline";

export default function About () {
    React.useEffect(() => {
        Aos.init({duration:1000});
    })
    return (
        <div className="loading-transition p-relative">
            <Header />
            <section className="about">
                <div data-aos='fade-down' className="about__title box-container">
                    <h2>GALERIA GUARANI S.A</h2>
                    <p>Quienes somos</p>
                </div>
                <Timeline/>
                <div className="about__info box-container mt-5">
                    <div className="about__info-mv d-flex">
                        <div data-aos='fade-up' data-aos-delay='200' className="about__info-mv-mission w-50">
                            <FontAwesomeIcon icon={faEye} />
                            <h2 className="mt-3 mb-3">Misión</h2>
                            <p>
                                Ayudar a nuestros clientes a encontrar lo que buscan y necesitan, priorizando la exclusividad de nuestras marcas y una atención excelente.
                            </p>
                        </div>
                        <div data-aos='fade-up' className="about__info-mv-vision w-50">
                            <FontAwesomeIcon icon={faRocket} />
                            <h2 className="mt-3 mb-3">Visión</h2>
                            <p>
                                Continuar con nuestra trayectoria como referentes en innovación, variedad de productos y exclusividad en la representación de marcas internacionales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}