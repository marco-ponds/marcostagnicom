import React from 'react';
import ProjectItem from './ProjectItem';
import {ES6, ZEIT_NOW, MAGEENGINE, SASS, CODEPEN} from '../work/constants';

const PROJECTS = [
    {
        name: 'Pathfinding demo',
        url: 'http://pathfinding.marcostagni.now.sh',
        cover: './static/images/pathfinding.png',
        technologies: [ES6, SASS, ZEIT_NOW, MAGEENGINE]
    },
    {
        name: 'Conway\'s Game of Life',
        url: 'https://codepen.io/marco-ponds/pen/rzjpwg',
        cover: './static/images/conway.png',
        technologies: [ES6, SASS]
    },
    {
        name: 'Feeding Mr Biggs (Ludum Dare 46)',
        url: 'https://ldjam.com/events/ludum-dare/46/feeding-mr-biggs',
        cover: './static/images/feedingmrbiggs.png',
        technologies: [ES6, SASS, ZEIT_NOW, MAGEENGINE]
    },
    {
        name: 'Crazy Railway (Ludum Dare 47)',
        url: 'https://ldjam.com/events/ludum-dare/47/ferrovia-folle-crazy-railway',
        cover: './static/images/ludumdare47.png',
        technologies: [ES6, SASS, ZEIT_NOW, MAGEENGINE]
    }
]

export default () => (
    <div className="projects-list-container">
        { PROJECTS.map(p => <ProjectItem {...p} />)}
    </div>
)
