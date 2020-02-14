import React from 'react';
import Layout from '../app/Layout';
import Work from '../app/work/Work';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

export default () => (
    <React.Fragment>
        <GoogleAnalytics />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
        <Layout currentPage='work'>
            <Work/>
        </Layout>
    </React.Fragment>

);
