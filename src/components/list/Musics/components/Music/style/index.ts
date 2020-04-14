import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Content = styled.div`
    animation: ${opacityAnimation} 1s linear;
    width: 100%;
    cursor: pointer;
`;

const Image = styled.div<{ src: string; height?: number }>`
    width: 100%;
    height: ${({ height }): number => (height ? height : 250)}px;
    background-image: url('${({ src }): string => src}');
    background-size: cover;    
    transition: opacity ease-in-out 0.5s;
    background-position: center;
    opacity: 1;
    &:hover {
        transition: opacity ease-in-out 0.5s;
        opacity: 0.5;
    }
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
