import * as React from 'react';
import * as Jest from 'jest';
import { shallow } from 'enzyme';
import Text from '../Text';
import Label from '../Label';

describe('Test Typography components', () => {
    it('render text title', () => {
        const wrapper = shallow(
            <Text type="title">
                <>Title</>
            </Text>,
        );
        expect(wrapper.find('h1'));
    });

    it('render text default', () => {
        const wrapper = shallow(
            <Text type="default">
                <>Default</>
            </Text>,
        );
        expect(wrapper.find('span'));
    });

    it('render text regular', () => {
        const wrapper = shallow(
            <Text type="regular">
                <>Regular</>
            </Text>,
        );
        expect(wrapper.find('span'));
    });

    it('render text subtitle', () => {
        const wrapper = shallow(
            <Text type="subtitle">
                <>Subtitle</>
            </Text>,
        );
        expect(wrapper.find('h2'));
    });

    it('render label', () => {
        const wrapper = shallow(
            <Label>
                <>Label</>
            </Label>,
        );
        expect(wrapper.find('label'));
    });
});
