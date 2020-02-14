import React from 'react';
import ProjectItem from './ProjectItem';
import {ES6, ZEIT_NOW, MAGEENGINE, SASS} from '../work/constants';

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
    }
]

export default () => (
    <div className="projects-list-container">
        { PROJECTS.map(p => <ProjectItem {...p} />)}
    </div>
)
