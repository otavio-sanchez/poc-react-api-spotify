import * as React from 'react';
import { Text } from '../../../../typography';
import { Content, Image, Infos } from './style';
import { Props } from './types';

const Album = ({ id, image, name, redirect, height, artist }: Props) => (
    <Content>
        <>
            <Image src={image} height={height} />
            <Infos>
                <Text type="subtitle">
                    <>{name}</>
                </Text>
                <Text type="regular">
                    <>{artist}</>
                </Text>
            </Infos>
        </>
    </Content>
);

export default Album;
