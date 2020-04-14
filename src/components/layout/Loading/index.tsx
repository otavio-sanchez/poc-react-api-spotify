import * as React from 'react';
import { Content, LoadingIcon } from './style';

const Loading = (): JSX.Element => {
    return (
        <Content>
            <LoadingIcon width={30} />
        </Content>
    );
};

export default Loading;
