import styled, { keyframes } from 'styled-components';
import sizes from '../../../../../../assets/theme/sizes';

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Content = styled.article`
    width: 100%;
    cursor: pointer;
    animation: ${opacityAnimation} 1s linear;
`;

const Image = styled.div<{ src: string; height?: number }>`
    
    width: 100%;
    height: ${({ height }): number => (height ? height : 250)}px;
    
    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        height: ${({ height }): number => (height ? height : 500)}px;
    }
    background-image: url('${({ src }): string => src}');
    background-size: cover;
    background-position: center;
    transition: opacity ease-in-out 0.5s;
    opacity: 1;
    &:hover {
        transition: opacity ease-in-out 0.5s;
        opacity: 0.5;
    }
`;

const Infos = styled.div`
    text-align: center;
    padding: 20px 5%;
    width: 100%;
    box-sizing: border-box;
`;

export { Content, Image, Infos };
