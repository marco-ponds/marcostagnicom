import React, { Component } from 'react';
import Layout from '../app/Layout';
import Main from '../app/main/Main';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

export default () => (
    <React.Fragment>
        <GoogleAnalytics />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
        <Layout homepage={true}>
            <Main />
        </Layout>
    </React.Fragment>
);
