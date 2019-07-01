import React from 'react';
import Layout from '../app/Layout';
import FormComponent from '../app/FormComponent';

import "antd/dist/antd.min.css";

class Whoami extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <FormComponent/>
            </Layout>
        )
    }
}

export default Whoami;
