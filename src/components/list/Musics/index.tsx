import * as React from 'react';
import { Props, Music as MusicType } from './types';
import { Text } from '../../typography';
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
                    data.map((music, index) => (
                        <Music
                            id={music.id}
                            name={music.name}
                            time={music.time}
                            key={music.id}
                            index={index}
                            onClick={(): Function => onHandlerClick(music)}
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
