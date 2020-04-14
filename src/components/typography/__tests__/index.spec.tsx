import * as React from 'react';
import * as Jest from 'jest';
import { shallow } from 'enzyme';
import Text from '../Text';

describe('Test Title component', () => {
    it('renders', () => {
        const wrapper = shallow(
            <Text type="title">
                <>Title</>
            </Text>,
        );
        expect(wrapper.find('h1'));
    });
});
