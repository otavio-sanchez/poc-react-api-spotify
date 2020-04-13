import styled from 'styled-components';
import Icon from '../../../../assets/icons/loading.svg'

const Content = styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const LoadingIcon = styled(Icon)`
    width: 30px;
    height: 30px;
`;

export { LoadingIcon, Content }