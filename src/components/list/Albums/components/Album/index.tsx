import * as React from 'react';
import { Text } from '../../../../typography';
import { Content, Image, Infos } from './style';
import { Props } from './types';

const Album = ({ image, name, height, artist, onClick }: Props): JSX.Element => (
    <Content onClick={(): Function => onClick()}>
        <Image src={image} height={height} />
        <Infos>
            <Text type="subtitle">
                <>{name}</>
            </Text>
            <Text type="regular">
                <>{artist}</>
            </Text>
        </Infos>
    </Content>
);

export default Album;
