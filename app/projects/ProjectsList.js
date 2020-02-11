import React from 'react';
import ProjectItem from './ProjectItem';

const PROJECTS = [
    {
        name: 'Pathfinding demo',
        url: 'http://pathfinding.marcostagni.now.sh',
        cover: './static/images/pathfinding.png',
        description: 'A* pathfinding demo realised with mage engine.'
    },
    {
        name: 'Pathfinding demo',
        url: 'http://pathfinding.marcostagni.now.sh',
        cover: './static/images/pathfinding.png',
        description: 'A* pathfinding demo realised with mage engine.'
    },
    {
        name: 'Pathfinding demo',
        url: 'http://pathfinding.marcostagni.now.sh',
        cover: './static/images/pathfinding.png',
        description: 'A* pathfinding demo realised with mage engine.'
    },
    {
        name: 'Pathfinding demo',
        url: 'http://pathfinding.marcostagni.now.sh',
        cover: './static/images/pathfinding.png',
        description: 'A* pathfinding demo realised with mage engine.'
    }
]

export default () => (
    <div className="projects-list-container">
        { PROJECTS.map(p => <ProjectItem {...p} />)}
    </div>
)
