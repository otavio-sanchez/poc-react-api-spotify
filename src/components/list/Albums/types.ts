export interface Props {
    data: Album[];
    title: string;
    height?: number;
}

export interface Album {
    image: string;
    redirect: string;
    id: string;
    name: string;
    artist: string;
}
