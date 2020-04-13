import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const ContainerContent = styled.section<{ maxWidth?: number; alternative?: boolean }>`
    position: relative;
    display: block;
    max-width: ${sizes.container.maxWidth}px;
    width: ${({ alternative }): string => (alternative ? '100%' : '80vw')};
    margin: auto;
    ${({ maxWidth }): string => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
`;

export { ContainerContent };
