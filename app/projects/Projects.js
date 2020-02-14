import React from 'react';
import ProjectsList from './ProjectsList';
import ProjectsDetails from './ProjectsDetails';

import './projects.scss';

export default () => (
    <main>
        <div className='projects'>
            <ProjectsDetails />
            <ProjectsList />
        </div>
    </main>
)
