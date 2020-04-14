import * as React from 'react';
import { Props, Music as MusicType } from './types';
import { Text } from '../../texts';
import { Container, Row } from '../../grid';
import Music from './components/Music';

const Musics = ({ data, onClickItem }: Props): JSX.Element => {
    const onHandlerClick = (album: MusicType): Function => {
        return onClickItem(album);
    };

    return (
        <Container>
            <Row>
                {data.length ? (
                    data.map((music) => (
                        <Music
                            id={music.id}
                            name={music.name}
                            time={music.duration_ms}
                            trackNumber={music.track_number}
                            onClick={(): Function => onHandlerClick(music)}
                            key={music.id}
                        />
                    ))
                ) : (
                    <Text>
                        <>Nada encontrado.</>
                    </Text>
                )}
            </Row>
        </Container>
    );
};

export default Musics;
