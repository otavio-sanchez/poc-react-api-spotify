export interface Props {
    data: Album[];
    title: string;
    height?: number;
    onClickItem: Function;
    loading?: boolean;
}

export interface Artist {
    id: string;
    name: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    images: Image[];
    id: string;
    name: string;
    artists: Artist[];
}
