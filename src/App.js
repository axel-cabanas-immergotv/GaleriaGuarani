import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from "./views/About/About";
import Work from './views/Work/Work';
import ParticlesBackground from './components/ParticlesBG/ParticlesBackground';
import Brands from './views/Brands/Brands';
import Spinner from './components/Spinner/Spinner'

export default function App() {
  const [ loading, setLoading ] = React.useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);

  return (
    <div>
      {
        loading ? <Spinner/>
        :
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/trabaja-con-nosotros" element={<Work />} />
            <Route path="/marcas" element={<Brands />} />
          </Routes>
        </BrowserRouter>
        <ParticlesBackground/>
        </>
      }
    </div>
  );
}
