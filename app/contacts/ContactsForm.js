import React, { Component } from 'react';
import {
    Input,
    Button
} from 'antd';

const { TextArea } = Input;

class ContactsForm extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className={'contacts-form'}>
                <form
                    method={'post'}
                    action={'/email'}>
                    <Input className={'contacts-input'} name='name' placeholder="Your name" />
                    <Input className={'contacts-input'} name='email' type="email" placeholder="Your email" />
                    <Input className={'contacts-input'} name='subject' placeholder="Your subject" />
                    <TextArea className={'contacts-input'} name='message' placeholder="Your message goes here" rows={8} />
                    <Button className={'contacts-button'} htmlType="submit" ghost>send</Button>
                </form>
            </div>
        )
    }
}

export default ContactsForm;
