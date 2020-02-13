import React from 'react';
import { Tag } from 'antd';

export default () => (
    <p className='work-details-container'>
        <h1>
            Experience
        </h1>
        <span className='work-details-description'>
            I've been working with startups and corporations, developing prototypes and full fledged applications serving millions of users.
            Here is a list of main technologies I've been using:
        </span>
        <div className='work-details-tags'>
            <Tag className='framework'>React</Tag>
            <Tag className='framework'>BackboneJS</Tag>
            <Tag className='tool'>Babel</Tag>
            <Tag className='tool'>Rollup</Tag>
            <Tag className='tool'>Webpack</Tag>
            <Tag className='tool'>Storybook</Tag>
            <Tag className='language'>Nodejs</Tag>
            <Tag className='framework'>ExpressJS</Tag>
            <Tag className='framework'>HapiJS</Tag>
            <Tag className='language'>ES6</Tag>
            <Tag className='language'>Typescript</Tag>
            <Tag className='language'>Java</Tag>
            <Tag className='language'>Sass</Tag>
            <Tag className='cicd'>AWS</Tag>
            <Tag className='cicd'>GoCD</Tag>
            <Tag className='cicd'>Jenkins</Tag>
            <Tag className='cicd'>CircleCI</Tag>
        </div>
    </p>
)
