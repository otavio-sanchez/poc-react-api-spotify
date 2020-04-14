import { Album } from '../../../components/list/Albums/types';
import { type, actionType } from './actionType';

export const albumsRecent = (albums: Album[]): actionType => ({
    type: type.ALBUMS_RECENT,
    recent: albums && albums.length ? albums.slice(0, 5) : albums,
});


export const albumsAccessed = (albums: Album[]): actionType => ({
    type: type.ALBUMS_ACCESSED,
    accessed: albums,
});
