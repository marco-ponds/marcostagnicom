import React from 'react';
import { Icon } from 'antd';

import './footer.scss';

const Footer = () => (
    <footer>
        Built with <img className="zeit" src="/static/images/zeit-white-full-logo.svg" />
        <span className="copyright">
            <Icon type="copyright" /> 2021, Marco Stagni
        </span>
    </footer>
);

export default Footer;
