export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Artist {
    id: string;
    name: string;
}

export const urlImage = (imagesList: Image[]): string => {
    if (imagesList && imagesList.length > 0) {
        return imagesList[0].url;
    }

    return '';
};

export const nameArtist = (artistsList: Artist[]): string => {
    if (artistsList && artistsList.length > 0) {
        return artistsList[0].name;
    }

    return '';
};
