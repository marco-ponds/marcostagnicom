import React  from 'react';
import ContactsForm from './ContactsForm';
import ContactsDetails from './ContactsDetails';

import './contacts.scss';

const Contacts = () => (
    <main>
        <div className='contacts'>
            <ContactsDetails/>
            <div className='contacts-form-container'>
                <ContactsForm/>
            </div>
        </div>
    </main>
);

export default Contacts;
