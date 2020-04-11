import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const ContainerContent = styled.section<{ maxWidth?: number }>`
    position: relative;
    display: block;
    max-width: ${sizes.container.maxWidth}px;
    width: 90vw;
    margin: auto;
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
`;

export { ContainerContent };
