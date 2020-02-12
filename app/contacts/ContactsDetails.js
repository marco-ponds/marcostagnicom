import React from 'react';
import { Icon } from 'antd';

const codepen = 'https://codepen.io/marco-ponds';

const LinkedinBadge = () => (
    <div className='contacts-linkedin-badge'>
        <div className="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="it_IT"
            data-type="horizontal"
            data-theme="dark"
            data-vanity="marcostagni">
            <a className="LI-simple-link" href='https://it.linkedin.com/in/marcostagni?trk=profile-badge'>
                Marco Stagni
            </a>
        </div>
    </div>
)

const ContactsDetails = () => (
    <p className='contacts-details-container'>
        <h1>
            Get in touch
        </h1>
        <span className='contacts-details-description'>
            Feel free to drop me a message, I promise you I will find the time to read and reply every time.
            Otherwise, drop me a message on LinkedIn:
        </span>
        <LinkedinBadge />
    </p>
);

export default ContactsDetails;
