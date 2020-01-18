import React from 'react';

import './app.scss';
import Header from './Header';
import Main from './Main';
import Map from './Map';
import Footer from './Footer';

export default ({ children }) => {
    return (
        <div>
            <Map />
            <div className='triangle' />
            <div className="main-wrapper">
                <Header/>
                { children }
                <Footer/>
            </div>
        </div>
    );
};
