import * as React from 'react';
import * as Jest from 'jest';
import { shallow } from 'enzyme';
import App from '../App';

describe('APP', () => {
    it('renders', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div'));
    });
});
