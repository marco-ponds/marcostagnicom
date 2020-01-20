import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

    it('should render fine', () => {
        const component = shallow(<Footer />);

        expect(component).toMatchSnapshot();
    });

});
