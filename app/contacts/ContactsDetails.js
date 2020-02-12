import React from 'react';
import { Icon } from 'antd';

const codepen = 'https://codepen.io/marco-ponds';

const ContactsDetails = () => (
    <p className='contacts-details-container'>
        <h1>
            Get in touch
        </h1>
        <span className='contacts-details-description'>
            Feel free to drop me a message, I promise you I will find the time to read and reply every time.
            In the meanwhile, here are all the other platforms where you can find me:
        </span>
        <ul>
            lascia solo i link a linkedin, rimuovi il resto, sistema form.
        </ul>
        <ul className='contacts-links'>
            <li className="link">
                <a
                    target="_blank"
                    href={codepen}>
                    <Icon type="codepen"/>
                </a>
            </li>
            <li className="link"><Icon type="github" /></li>
            <li className="link"><Icon type="linkedin" /></li>
            <li className="link"><Icon type="instagram" /></li>
        </ul>
    </p>
);

export default ContactsDetails;
