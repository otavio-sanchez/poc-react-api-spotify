import * as React from 'react';
import { TitleLarge, SubTitle, Regular, Default } from './style';
import { Props } from './types';

const Text = ({ children, type }: Props) => {
    const typeTitle = (select?: 'subtitle' | 'title' | 'regular' | 'default'): JSX.Element => {
        switch (select) {
            case 'title':
                return <TitleLarge>{children}</TitleLarge>;
            case 'subtitle':
                return <SubTitle>{children}</SubTitle>;
            case 'regular':
                return <Regular>{children}</Regular>;
            default:
                return <Default>{children}</Default>;
        }
    };
    return typeTitle(type);
};

export default Text;
