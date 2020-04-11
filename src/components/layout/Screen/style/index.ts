import styled from 'styled-components';

const ScreenContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    align-items: start;
    align-content: start;
`;

const ScreenContent = styled.section`
    position: relative;
    display: flex;
    width: 100vw;
    min-height: 100vh;
`;

export { ScreenContainer, ScreenContent };
