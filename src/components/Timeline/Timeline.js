import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Timeline () {
    React.useState(() => {
        Aos.init({ duration:1000 })
    })

    return (
        <div className="timeline__container mt-5">
            <div className="timeline box-container">
                <section className="timeline__listing row-1 mb-5" data-aos='fade-up'>
                    <div className="timeline__listing-content justify-content-between">
                        <div className="timeline__listing-item">
                            <p>
                                El 15 de julio de 1965 nace Galería Guaraní S.A, como una empresa familiar, en una de las avenidas más emblemáticas del Centro Histórico de la ciudad de Asunción.
                                El Dr Porfirio Recanate y la Ing. Victoria de Recanate fueron sus dos visionarios fundadores,
                                que vieron un público con necesidades y encontraron la forma de satisfacerlas.
                            </p>
                            <p>
                                Poco tiempo después se crea Vendôme, una cadena de exclusivas tiendas ubicadas en Asunción y Ciudad del Este.
                            </p>
                            <p>
                                Hoy el Grupo Vendôme cuenta con 20 tiendas ubicadas en los principales shopping y
                                áreas comerciales de Paraguay, donde nuestros clientes pueden encontrar una gran variedad
                                de productos de reconocidas marcas a nivel internacional.
                            </p>  
                        </div>
                        <div className="timeline__listing-item-img">
                            <img src="../assets/about-us/Imagen1.png"/> 
                        </div>
                    </div>
                </section>
                <section className="timeline__listing row-2 mb-5" data-aos='fade-up'>
                    <div className="timeline__listing-content justify-content-between row-reverse">
                        <div className="timeline__listing-item">
                            <p>
                                Ya en los años 1969 inauguraron tres locales comerciales, dos de los cuales funcionaban sobre la Calle Palma, un epicentro comercial en el microcentro de Asunción. 
                            </p>            
                        </div>
                        <div className="timeline__listing-item-img">
                            <img src="../assets/about-us/Imagen2.jpg"/> 
                        </div>
                    </div>
                </section>
                <section className="timeline__listing row-3 mb-5" data-aos='fade-up'>
                    <div className="timeline__listing-content justify-content-between">
                        <div className="timeline__listing-item">
                            <p>
                                En 1980 la familia Recanate se hicieron con 10.000 metros cuadrados en la creciente Ciudad del Este, frontera con la República del Brasil. Apostando por un comercio internacional.
                            </p>
                            <p>
                                Donde hasta el día de hoy funciona Shopping Vendôme.
                            </p>          
                        </div>
                        <div className="timeline__listing-item-img">
                            <img src="../assets/about-us/Imagen3.jpg"/> 
                        </div>
                    </div>
                </section>
                <section className="timeline__listing row-4 mb-5" data-aos='fade-up'>
                    <div className="timeline__listing-content justify-content-between row-reverse">
                        <div className="timeline__listing-item">
                            <p>Un hito muy importante se vivió durante el año 1985.</p>
                            <p>Veinte años después de abrir sus puertas, la empresa arranca la construcción del Shopping Vendôme en la icónica esquina que ocupan hasta hoy, calles Estrella y O’leary, en la ciudad de Asunción.</p>
                            <p>El edificio de 7 pisos fue inaugurado el 16 de julio de 1986.</p>        
                        </div>
                        <div className="timeline__listing-item-img">
                            <img src="../assets/about-us/Imagen4.jpg"/> 
                        </div>
                    </div>
                </section>
                <section className="timeline__listing row-5" data-aos='fade-up'>
                    <div className="timeline__listing-item">
                        <p>Vendôme, cuenta con 9 tiendas ubicadas en los centros comerciales más importantes del Paraguay tales como:</p>
                        <ul>
                            <li>Vendôme Sol en el Shopping del Sol.</li>
                            <li>Vendôme del Paseo La Galería.</li>
                        </ul>
                        <p>Este último considerado el centro comercial más grande de Asunción.</p> 
                    </div>
                </section>
                
            </div>
        </div>
    )
}