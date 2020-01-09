import React, { Component } from 'react';
import Layout from '../app/Layout';
import Main from '../app/Main';
import GoogleAnalytics from '../app/GoogleAnalytics';

import "antd/dist/antd.min.css";

class Index extends Component {

    render() {
        return (
            <React.Fragment>
                <GoogleAnalytics/>
                <Layout>
                    <Main />
                </Layout>
            </React.Fragment>
        )
    }
}

export default Index;
