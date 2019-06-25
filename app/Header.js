import React from 'react';

import './header.scss';

const Header = () => (
    <header>
        <span className="title">
            <a href='/'>Marco</a>
        </span>
        <ul className="menu">
            <li>projects</li>
            <li><a target="_blank" href='http://blog.marcostagni.com'>blog</a></li>
            <li><a href='/whoami'>whoami</a></li>
        </ul>
    </header>
);

export default Header;
