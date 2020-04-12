import * as React from 'react';
import { TitleLarge, SubTitle, Regular } from './style';
import { Props } from './types';

const Text = ({ children, type }: Props) => {
    const typeTitle = (select?: 'subtitle' | 'title' | 'regular'): JSX.Element => {
        switch (select) {
            case 'title':
                return <TitleLarge>{children}</TitleLarge>;
            case 'subtitle':
                return <SubTitle>{children}</SubTitle>;
            case 'regular':
                return <Regular>{children}</Regular>;
            default:
                return <Regular>{children}</Regular>;
        }
    };
    return typeTitle(type);
};

export default Text;
