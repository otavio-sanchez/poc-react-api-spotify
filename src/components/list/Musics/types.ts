export interface Props {
    data: Music[];
    onClickItem: Function;
}

export interface Music {
    id: string;
    name: string;
    time: string;
}
