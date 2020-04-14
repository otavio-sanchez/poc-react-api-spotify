import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Musics } from '../..';
import { Props } from '../types';
import musics from '../../../../constants/mocks/musics';
import Music from '../components/Music';
import { Text } from '../../../Typography';

describe('Musics', () => {
    const props: Props = {
        data: musics,
        onClickItem: () => {},
    };

    it('renders without crashing given the required props', () => {
        const wrapper = shallow(<Musics {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render three Album component', () => {
        const wrapper = shallow(<Musics {...props} />);
        expect(wrapper.find(Music)).toHaveLength(2);
    });

    it('should render feedback when there is not data', () => {
        const wrapper = shallow(<Musics {...props} />);
        wrapper.setProps({ data: [] });
        console.log(wrapper.find(Text).get(0).props.children);
        expect(wrapper.find(Text).get(0).props.children).toContain('Nada encontrado.');
    });
});
