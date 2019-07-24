import React from 'react';
import Layout from '../app/Layout';
import FormComponent from '../app/FormComponent';
import GoogleAnalytics from '../app/GoogleAnalytics';
import "antd/dist/antd.min.css";

class Whoami extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <GoogleAnalytics/>
                <Layout>
                    <FormComponent/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Whoami;
