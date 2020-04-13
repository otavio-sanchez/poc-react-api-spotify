import styled from 'styled-components';
import colors from '../../../../../../assets/theme/colors';

const Content = styled.div`
    transition: opacity ease-in-out 0.5s;
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
    text-align: start;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
`;

const TrackNumber = styled.span`
    padding-right: 20px;
`;

const Time = styled.span`
    padding-left: 20px;
    float: right;
`;

export { Content, Image, Infos, TrackNumber, Time };
