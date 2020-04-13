import { Album } from '../../../components/list/Albums/types';

export const type = {
    ALBUMS_RECENT: 'ALBUMS_RECENT',
    ALBUMS_ACCESSED: 'ALBUMS_ACCESSED',
};

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface initialType {
    recent: Album[];
    accessed: Album[];
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface actionType {
    recent?: Album[];
    accessed?: Album[];
    type: string;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface stateType {
    albums: actionType;
}
