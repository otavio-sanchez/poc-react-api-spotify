import { Music } from '../../types';

export interface Props extends Music {
    index: number;
    onClick: Function;
}
