import React from 'react';
import Layout from '../app/Layout';
import ContactsForm from '../app/ContactsForm';

import "antd/dist/antd.min.css";

class Contacts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <ContactsForm/>
            </Layout>
        )
    }
}

export default Contacts;
