import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";

export default function Brands () {
    React.useEffect(() => {
        Aos.init({duration: 2000})
    })

    return (
        <div className="loading-transition p-relative">
        <Header/>
        <div className="p-t p-b p-relative">
            <div className="brands box-container">
                <h2 data-aos='fade-down' className='brands__title pb-5'>Marcas con las que trabajamos</h2>
                <section style={{paddingTop: 20}}>
                    <Gallery/>
                </section>
            </div>
        </div>
        </div>
    )
}