import React, { Component } from 'react';
import Layout from '../app/Layout';
import Main from '../app/Main';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

class Index extends Component {

    render() {
        return (
            <div>
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
                <Layout>
                    <Main />
                    </Layout>
            </div>
        )
    }
}

export default Index;
