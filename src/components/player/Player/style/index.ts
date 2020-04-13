import styled from 'styled-components';

const Content = styled.article`
    width: 100%;
    max-width: 400px;
    cursor: pointer;
    transition: opacity ease-in-out 0.5s;
    &:hover {
        transition: opacity ease-in-out 0.5s;
        opacity: 50%;
    }
`;

const Image = styled.div<{ src: string }>`
    width: 100%;
    height: 400px;
    background-image: url('${({ src }): string => src}');
    background-size: cover;
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

export { Content, Image, Infos, Audio };
