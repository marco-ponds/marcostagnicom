import React from 'react';
import './work.scss';

import WorkDetails from './WorkDetails';
import WorkTimeline from './WorkTimeline';

export default () => (
    <main>
        <div className={"work"}>
            <WorkDetails/>
            <WorkTimeline/>
        </div>
    </main>
)


