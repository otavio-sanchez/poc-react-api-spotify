import * as React from 'react';
import * as Jest from 'jest';
import { shallow } from 'enzyme';
import { Title } from '../../Title'

describe('Test Title component', () => {
    it('renders', () => {
        const wrapper = shallow(
            <Title text='Hello' />,
        );
        expect(wrapper.find('h1'));
    });
});
