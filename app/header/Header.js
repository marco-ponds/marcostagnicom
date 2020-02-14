import React from 'react';

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

const Header = ({ homepage = true, currentPage }) => (
    <header>
        { !homepage &&
            <span className="title">
                { getLink(currentPage, 'Marco') }
            </span>
        }
        <ul className="menu">
            <li>{ getLink(currentPage, 'resume') }</li>
            <li>{ getLink(currentPage, 'work') }</li>
            <li>{ getLink(currentPage, 'projects') }</li>
            <li>{ getLink(currentPage, 'blog') }</li>
            <li>{ getLink(currentPage, 'contacts') }</li>
        </ul>
    </header>
);

export default Header;
