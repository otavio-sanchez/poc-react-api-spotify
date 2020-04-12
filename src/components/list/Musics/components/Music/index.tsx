import * as React from 'react';
import { Text } from '../../../../typography';
import { Content, Infos } from './style';
import { Props } from './types';

const Music = ({ name, time, index }: Props): JSX.Element => (
    <Content>
        <Infos>
            <Text type="regular">
                <>{index}</>
            </Text>
            <Text type="regular">
                <>{name}</>
            </Text>
            <Text type="regular">
                <>{time}</>
            </Text>
        </Infos>
    </Content>
);

export default Music;
