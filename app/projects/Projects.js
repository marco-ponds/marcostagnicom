import React from 'react';
import Project from './Project';

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
    <main>
        <div className='projectslist' >
            { PROJECTS.map(p => <Project {...p} />)}
        </div>
    </main>
)
