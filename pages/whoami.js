import React from 'react';
import Layout from '../app/Layout';
import Form from '../app/Form';

import "antd/dist/antd.min.css";

class Whoami extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Form/>
            </Layout>
        )
    }
}

export default Whoami;
