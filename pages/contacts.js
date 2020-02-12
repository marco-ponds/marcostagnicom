import React from 'react';
import Layout from '../app/Layout';
import Contacts from '../app/contacts/Contacts';

import "antd/dist/antd.min.css";

export default () => (
    <Layout currentPage='contacts'>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>
        <Contacts/>
    </Layout>
);
