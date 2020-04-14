import * as React from 'react';
import * as Jest from 'jest';
import { shallow } from 'enzyme';
import Text from '../Text';

describe('Typography components', () => {
    const props = {
        children: 'text',
    };

    it('should render text title', () => {
        const wrapper = shallow(<Text type="title" {...props} />);
        expect(wrapper.find('h1'));
    });

    it('should render text default', () => {
        const wrapper = shallow(<Text type="default" {...props} />);
        expect(wrapper.find('span'));
    });

    it('should render text regular', () => {
        const wrapper = shallow(<Text type="regular" {...props} />);
        expect(wrapper.find('span'));
    });

    it('should render text subtitle', () => {
        const wrapper = shallow(<Text type="subtitle" {...props} />);
        expect(wrapper.find('h2'));
    });

    it('should render label', () => {
        const wrapper = shallow(<Text type="label" {...props} />);
        expect(wrapper.find('label'));
    });
});
