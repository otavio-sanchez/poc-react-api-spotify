import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Albums } from '../..';
import { Props } from '../types';
import albums from '../../../../constants/mocks/albums';
import { Container } from '../../../grid';
import Album from '../components/Album';
import { Text } from '../../../Typography';

describe('Albums', () => {
    const props: Props = {
        data: albums,
        title: 'Metálica',
        height: 360,
        onClickItem: () => {},
        loading: false,
    };

    it('renders without crashing given the required props', () => {
        const wrapper = shallow(<Albums {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should not render component when was loading', () => {
        const wrapper = shallow(<Albums {...props} />);
        wrapper.setProps({ loading: true });
        expect(wrapper.find(Container)).toHaveLength(0);
    });

    it('should render three Album component', () => {
        const wrapper = shallow(<Albums {...props} />);
        expect(wrapper.find(Album)).toHaveLength(3);
    });

    it('should render feedback when there is not data', () => {
        const wrapper = shallow(<Albums {...props} />);
        wrapper.setProps({ data: [] });
        expect(wrapper.find(Text).get(1).props.children).toContain('Nada encontrado.');
    });
});
