import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';
import LogoSpotify from '../../../../assets/icons/logo.svg';

const HeaderContent = styled.header`
    position: relative;
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    height: calc(50px + 4vh);
    align-items: center;
    justify-content: center;
    padding: 0 2vw;
    margin-bottom: -30px;

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        margin-bottom: 0;
        padding: 0 8vw;
    }
`;

const Logo = styled.div`
    width: 50px;
`;


export { HeaderContent, Logo, LogoSpotify };
