import React from 'react';

import './app.scss';
import Header from './header/Header';
import Map from './Map';
import Footer from './footer/Footer';
import Canvas from '../app/Canvas';

export default ({ children, homepage = false, currentPage = '' }) => {
    return (
        <div>
            <Map />
            <div className='triangle' />
            <Canvas />
            <div className="main-wrapper">
                <Header
                    homepage={homepage}
                    currentPage={currentPage}/>
                { children }
                <Footer/>
            </div>
        </div>
    );
};
