import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { images, filters } from "./GalleryImages";

export default function Gallery () {
    const [ items, setItems ] = useState(images);
    const [ activeItem, setActiveItem ] = useState({type: "all"});
    const changeFilter = (item) => {
        const filteredList = 
        item.type === 'all' 
        ? images 
        : images.filter((image) => image.id === item.type);
        setItems(filteredList);
        setActiveItem(item);
    }
    const filterMap = () => {
        const filter = filters.map((item) => (
            item.id === 0 ?
            <div 
              onClick={() => changeFilter(item)} 
              className={`brands__filter-card-btn first ${item.type === activeItem.type ? 'filter-active' : ''}`}
            >
                <button>
                    {item.name}
                </button>
            </div>
            :
            <div 
              onClick={() => changeFilter(item)} 
              className={`brands__filter-card-btn ${item.type === activeItem.type ? 'filter-active' : ''}`}
            >
                <button>
                    {item.name}
                </button>
            </div>
        ));
        return filter;
    }
    const galleryMap = () => {
        const galleryFilter = items.map((item) => (
            item.link ?
            <div className="brands__category-content-item col-md-4 col-sm-6">
                <div className="brands__category-content-item-card">
                    <a href={item.link} target='_blank'><img src={item.img} /></a>
                </div>
            </div>
            :
            <div className="brands__category-content-item col-md-4 col-sm-6">
                <div className="brands__category-content-item-card">
                    <img src={item.img} />
                </div>
            </div>
        ))
        return galleryFilter;
    }
    React.useEffect(()=> {
        Aos.init({duration: 2000})
    })
    
    return (
        <>
        <section data-aos='fade-right' className="brands__filter">
            <div className="brands__filter-card">
                {filterMap()}
            </div>
        </section>
        <div className="gallery mt-5">
            {galleryMap()}
        </div>
        </>
    )
}