import React from 'react';

import './app.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default () => {
    return (
        <div className="main-wrapper">
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
};
