import { Album } from '../../../components/list/Albums/types';
import { type, actionType } from './actionType';

export const albumsRecent = (albums: Album[]): actionType => ({
    type: type.ALBUMS_RECENT,
    recent: albums,
});

export const albumsAccessed = (albums: Album[]): actionType => ({
    type: type.ALBUMS_ACCESSED,
    accessed: albums,
});
