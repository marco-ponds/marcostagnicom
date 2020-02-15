import React from 'react';
import { Icon } from 'antd';

import './header.scss';

const LINKS = {
    Marco: { href: '/', target: '_self' },
    resume: { href: '/resume', target: '_self' },
    work: { href: '/work', target: '_self' },
    projects: { href: '/projects', target: '_self' },
    blog: { href: 'http://blog.marcostagni.com', target: '_blank' },
    contacts: { href: '/contacts', target: '_self' }
};

const getLink = (currentPage, title) => {
    const className = currentPage === title ? 'current' : '';

    return <a {...LINKS[title] } className={className}>
        {title}
    </a>;
}

const ToggleMenu = () => (
    <a id="menu-toggle" class="menu-toggle-button" href="#menu">
        <Icon type="menu"/>
    </a>
);

const CloseMenu = () => (
    <a href='#menu-toggle'>
        <Icon type="close"/>
    </a>
);

const Title = (currentPage) => (
    <span className="title">
        { getLink(currentPage, 'Marco') }
    </span>
);

const Header = ({ homepage = true, currentPage }) => (
    <header>
        { !homepage && <Title currentPage={currentPage}/> }
        <ToggleMenu/>
        <ul id='menu' className="menu">
            <li>{ getLink(currentPage, 'resume') }</li>
            <li>{ getLink(currentPage, 'work') }</li>
            <li>{ getLink(currentPage, 'projects') }</li>
            <li>{ getLink(currentPage, 'blog') }</li>
            <li>{ getLink(currentPage, 'contacts') }</li>
            <li className='menu-close-button'>
                <CloseMenu/>
            </li>
        </ul>
    </header>
);

export default Header;
