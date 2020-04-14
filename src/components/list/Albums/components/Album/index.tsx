import * as React from 'react';
import { Text } from '../../../../texts';
import { Content, Image, Infos } from './style';
import { Props } from './types';
import { nameArtist, urlImage } from '../../../../../utils/infoAlbum';

const Album = ({ images, name, height, artists, onClick }: Props): JSX.Element => {
    return (
        <Content onClick={(): Function => onClick()}>
            <Image src={urlImage(images)} height={height} />
            <Infos>
                <Text type="subtitle">
                    <>{name}</>
                </Text>
                <Text type="regular">
                    <>{nameArtist(artists)}</>
                </Text>
            </Infos>
        </Content>
    );
};

export default Album;
