import React from 'react';
import { Icon } from 'antd';

const codepen = 'https://codepen.io/marco-ponds';
const github = 'http://github.com/marco-ponds';

export default () => (
    <p className='projects-details-container'>
        <h1>
            Personal projects
        </h1>
        <span className='projects-details-description'>
            I spend most of my free time developing personal projects. They're not strictly related to my daily job,
            but they allow me to explore what JS can (and can't) do.
            Most of my projects are hosted on Codepen or Now, and their source code is available on Github.
        </span>
        <ul className='projects-links'>
            <li className='link'>
                <a target='_blank' href={github}>
                    <Icon type="github"/> Github
                </a>
            </li>
            <li className='link'>
                <a target='_blank' href={codepen}>
                    <Icon type="codepen"/> Codepen
                </a>
            </li>
        </ul>
    </p>
);
