import * as React from 'react';
import { TitleLarge } from './style';
import { Props } from './types';

const Title = (props: Props) => <TitleLarge>{props.text}</TitleLarge>;

export default Title;
