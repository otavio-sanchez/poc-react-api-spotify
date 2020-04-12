import styled from 'styled-components';
import colors from '../../../../../../assets/theme/colors';

const Content = styled.article`
    width: 100%;
    cursor: pointer;
    &:hover {
        transition: opacity ease-in-out 0.5s;
        opacity: 50%;
    }
`;

const Image = styled.div<{ src: string; height?: number }>`
    width: 100%;
    height: ${({ height }): number => (height ? height : 250)}px;
    background-image: url('${({ src }): string => src}');
    background-size: cover;
`;

const Infos = styled.div`
    text-align: center;
    padding: 20px 5%;
    width: 100%;
    box-sizing: border-box;
`;

export { Content, Image, Infos };
