import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

export default function Header() {
    const [ defuse, setDefuse ] = React.useState(false);
    const [ fixer, setFixer ] = React.useState(false);
    const [ visible, setVisible ] = React.useState(false);
    const handleClick = () => {
        setDefuse(!defuse);
    };
    const showMenu = () => {
        setVisible(!visible);
    };
    const setClass = (boolean ,text) => {
        return boolean ? text : '';
    };
    const headerFixer = () => {
        return window.scrollY > 70 ? setFixer(true) : setFixer(false);
    };
    window.addEventListener('scroll', headerFixer);

    return (
        <>
        <header className={setClass(fixer, 'fixer')}>
            <section className='box-container'>
                <div className='header__container'>
                    <div className='header__container-logo'>
                        <Link to='/'><img width='60px' height='auto' src="https://firebasestorage.googleapis.com/v0/b/vendome-278614.appspot.com/o/logo.png?alt=media&token=f1a8b363-c23a-4f69-bba1-1f5967981f7e" alt="logo" /></Link>
                    </div>
                    <div onClick={handleClick} className={`header__container-menu ${setClass(defuse ,'active')}`}>
                        <div className='trigger'>
                            <div className='hamb'>
                                <div className='hamb-1'></div>
                                <div className='hamb-2'></div>
                                <div className='hamb-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div className="Navbar box-container">
            <div className={`Navbar-overlay ${setClass(defuse ,'open')}`}></div>
            <div className={`Navbar-content ${setClass(defuse ,'open')}`}>
                <div onClick={handleClick} className={`trigger__container ${setClass(defuse ,'active')}`}>
                    <div className='trigger'>
                        <p>Close</p>
                        <div className='hamb'>
                            <div className='hamb-1'></div>
                            <div className='hamb-2'></div>
                            <div className='hamb-3'></div>
                        </div>
                    </div>
                </div>
                <div className="Navbar__menu-container box-container">
                    <div className="nav-wrapper">
                        <div className="nav_menu">
                            <ul>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(60px)', opacity: 0}}><Link className='menu-item-link' to='/' >Inicio</Link></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(90px)', opacity: 0}}><Link className='menu-item-link' to='/nosotros'>Nosotros</Link></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(120px)', opacity: 0}}><Link className='menu-item-link' to='/marcas'>Marcas</Link></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(150px)', opacity: 0}}><Link className='menu-item-link' to='/trabaja-con-nosotros'>Trabaja con nosotros</Link></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(180px)', opacity: 0}}>
                                    <a onClick={showMenu} style={{cursor: 'pointer'}} className='menu-item-link'>Contacto</a>
                                    <div className={`menu-item-submenu ${setClass(visible, 'open')}`}><Contact/></div>
                                </li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(210px)', opacity: 0}}><a className='menu-item-link' href="https://vendome.com.py/" target='_blank'>Vendôme</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')} ${setClass(defuse, 'visible')}`} style={{transform: 'translateX(240px)', opacity: 0}}>
                                    <div className={`footer ${setClass(visible, 'open')}`}>
                                        <p>© 2022 Galeria Guarani S.A</p>
                                        <p>Todos los derechos reservados</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}