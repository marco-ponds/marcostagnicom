import React from 'react';
import Layout from '../app/Layout';
import Main from '../app/Main';

import "antd/dist/antd.min.css";

class Index extends React.Component {

    render() {
        return (
            <Layout>
                <Main />
            </Layout>
        )
    }
}

export default Index;
