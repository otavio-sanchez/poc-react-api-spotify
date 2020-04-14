import * as React from 'react';
import { TitleLarge, SubTitle, Regular, Default, Label } from './style';
import { Props } from './types';

const Text = ({ children, type }: Props): JSX.Element => {
    const typeTitle = (select?: 'subtitle' | 'title' | 'regular' | 'default' | 'label'): JSX.Element => {
        switch (select) {
            case 'title':
                return <TitleLarge>{children}</TitleLarge>;
            case 'subtitle':
                return <SubTitle>{children}</SubTitle>;
            case 'regular':
                return <Regular>{children}</Regular>;
            case 'label':
                return <Label>{children}</Label>;
            default:
                return <Default>{children}</Default>;
        }
    };
    return typeTitle(type);
};

export default Text;
