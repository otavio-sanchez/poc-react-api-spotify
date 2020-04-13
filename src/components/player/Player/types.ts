export interface Props {
    images: Image[];
    id: string;
    name: string;
    artists: Artist[];
    onClick: Function;
    preview: string;
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
