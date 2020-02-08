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
        <ul className='contacts-links'>
            <li className="link">
                <a
                    target="_blank"
                    href={codepen}>
                    <Icon type="codepen"/>
                </a>
            </li>
            <li className="link"><Icon height={"2em"} width={"2em"} type="github" /></li>
            <li className="link"><Icon height={32} width={32} type="linkedin" /></li>
            <li className="link"><Icon height={32} width={32} type="instagram" /></li>
        </ul>
    </p>
);

export default ContactsDetails;
