import * as React from 'react';
import Musics from '../../components/list/Musics';
import { Music } from '../../components/list/Musics/types';

const Albums = (): JSX.Element => {
    const mock = [
        {
            id: 'a',
            name: 'musica',
            time: '1:00',
        },
        {
            id: 'b',
            name: 'musica',
            time: '2:00',
        },
        {
            id: 'c',
            name: 'musica',
            time: '2:00',
        },
    ];

    const selectMusic = (music: Music): void => {
        console.log(music);
    };

    return (
        <>
            <Musics data={mock} onClickItem={(music: Music): void => selectMusic(music)} />
        </>
    );
};

export default Albums;
