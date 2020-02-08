import React from 'react';

import './header.scss';

const Header = ({ homepage = true }) => (
    <header>
        { !homepage &&
            <span className="title">
                <a href='/'>Marco</a>
            </span>
        }
        <ul className="menu">
            <li><a href='/resume'>resume</a></li>
            <li><a href='/projects'>work</a></li>
            <li><a href='/projects'>projects</a></li>
            <li><a target="_blank" href='http://blog.marcostagni.com'>blog</a></li>
            <li><a href='/contacts'>contacts</a></li>
        </ul>
    </header>
);

export default Header;
