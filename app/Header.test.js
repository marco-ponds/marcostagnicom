import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {

    it('should render fine', () => {
        const component = shallow(<Header />);

        expect(component).toMatchSnapshot();
    });

});
