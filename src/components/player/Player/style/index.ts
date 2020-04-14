import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const opacityMoveTopAnimation = keyframes`
  from {
    opacity: 0;
    transition:  translateY(30px);
  }

  to {
    opacity: 1;
    transition:  translateY(0px);
  }
`;

const Content = styled.div`
    width: 100%;
    max-width: 400px;
    cursor: pointer;
    animation: ${opacityAnimation} 1s linear;
`;

const PlayerComponent = styled.div`
    width: 100%;
    transition: ${opacityMoveTopAnimation} ease-in-out 0.5s;
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Image = styled.div<{ src: string }>`
    width: 100%;
    height: 400px;
    background-image: url('${({ src }): string => src}');
    background-size: cover;
    background-position: center;
`;

const Infos = styled.div`
    text-align: center;
    padding: 20px 5%;
    width: 100%;
    box-sizing: border-box;
`;

const Audio = styled.audio`
    margin-top: 30px;
`;

export { Content, Image, Infos, Audio, PlayerComponent };
