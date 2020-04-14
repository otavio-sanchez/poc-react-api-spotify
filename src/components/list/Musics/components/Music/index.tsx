import * as React from 'react';
import { Text } from '../../../../typography';
import { Content, Infos, TrackNumber, Time } from './style';
import { Props } from './types';
import { millisToMinutesAndSeconds } from '../../../../../utils/convertHours';

const Music = ({ name, time, trackNumber, onClick }: Props): JSX.Element => (
    <Content onClick={(): Function => onClick()}>
        <Infos>
            <TrackNumber>
                <Text type="regular">
                    <>{trackNumber}.</>
                </Text>
            </TrackNumber>
            <Text type="default">{name}</Text>
            <Time>
                <Text type="regular">{millisToMinutesAndSeconds(time)}</Text>
            </Time>
        </Infos>
    </Content>
);

export default Music;
