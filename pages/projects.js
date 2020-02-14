import React from 'react';
import Layout from '../app/Layout';
import ProjectsList from '../app/projects/Projects';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

export default () => (
    <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
        <Layout currentPage='projects'>
            <ProjectsList />
        </Layout>
    </React.Fragment>
);
