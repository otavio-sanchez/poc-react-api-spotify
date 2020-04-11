import styled from 'styled-components';
import Icon from '../../../../assets/icons/logo.svg';

const HeaderContent = styled.header`
    position: relative;
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    height: calc(50px + 4vh);
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    width: 50px;
`;

const LogoSpotify = styled(Icon)`
    width: 100%;
`;

export { HeaderContent, Logo, LogoSpotify };
