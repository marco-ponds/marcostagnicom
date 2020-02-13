import React from 'react';
import { Icon } from 'antd';

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
            <li className='link'><a href='http://github.com/marco-ponds'><Icon type="github"/> Github</a></li>
            <li className='link'><a href='https://codepen.io/marco-ponds'><Icon type="codepen"/> Codepen</a></li>
        </ul>
    </p>
);
