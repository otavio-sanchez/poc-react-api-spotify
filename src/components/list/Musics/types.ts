export interface Props {
    data: Music[];
    onClickItem: Function;
}

export interface Music {
    id: string;
    name: string;
    time: string;
    preview_url: string;
    track_number: number;
    duration_ms: number;
}
