import React from 'react';

import './app.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default ({ children }) => {
    return (
        <div>
            <div className='triangle' />
            <div className="main-wrapper">
                <Header/>
                { children }
                <Footer/>
            </div>
        </div>
    );
};
