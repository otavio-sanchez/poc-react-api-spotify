export interface Props {
    data: Album[];
    title: string;
    height?: number;
    onClickItem: Function;
}

export interface Album {
    image: string;
    id: string;
    name: string;
    artist: string;
}
