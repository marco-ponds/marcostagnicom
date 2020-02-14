import React from 'react';
import Layout from '../app/Layout';
import Contacts from '../app/contacts/Contacts';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

export default () => (
    <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>
        <Layout currentPage='contacts'>
            <Contacts/>
        </Layout>
    </React.Fragment>
);
