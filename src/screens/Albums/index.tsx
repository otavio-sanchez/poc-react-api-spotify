import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Musics from '../../components/list/Musics';
import { Music } from '../../components/list/Musics/types';
import { Props } from './types';
import { routesPath } from '../../routes';
import { getAlbums } from '../../services/album';
import { Col, Row, Container } from '../../components/grid';
import { Player } from '../../components/player';

const Albums = ({ match, history }: Props): JSX.Element => {
    const [trackList, setTrackList] = React.useState([]);
    const [album, setAlbum] = React.useState(null);
    const [preview, setPreview]  = React.useState(null);

    const requestSoundtrack = async (id: string): Promise<void> => {
        const mainAlbum = await getAlbums(id);

        if (mainAlbum.tracks && mainAlbum.tracks.items) {
            setAlbum(mainAlbum);
            setTrackList(mainAlbum.tracks.items);
        }
    };

    React.useEffect(() => {
        if (match && match.params) {
            const { id }: any = match.params;

            if (id) {
                requestSoundtrack(id);
            } else {
                history.push(routesPath.home);
            }
        }
    }, []);

    const selectMusic = (music: Music): void => {
        setPreview(music.preview_url)
    };

    const play = (): void => {
        console.log('play');
    };

    return (
        <Container>
            <Row columnsMobile={1} columnsTablet={1} columnsDesktop={1}>
                <Col>
                    <Link to={routesPath.home}>{'<'} Voltar</Link>
                </Col>
            </Row>
            <Row columnsMobile={1} columnsTablet={1} gridTemplateColumns={'30% 70%'} spacingColumn={50} spacingRow={30}>
                <Col align={'center'}>
                    {album && (
                        <Player
                            artists={album.artists}
                            id={album.id}
                            images={album.images}
                            name={album.name}
                            onClick={(): void => play()}
                            preview={preview}
                        />
                    )}
                </Col>
                <Col align={}>
                    <Musics data={trackList} onClickItem={(music: Music): void => selectMusic(music)} />
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(Albums);
