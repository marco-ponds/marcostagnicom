import React from 'react';

import './header.scss';

const Header = () => (
    <header>
        <span className="title">
            Marco
        </span>
        <ul className="menu">
            <li>projects</li>
            <li><a target="_blank" href='http://blog.marcostagni.com'>blog</a></li>
            <li>whoami</li>
        </ul>
    </header>
);

export default Header;