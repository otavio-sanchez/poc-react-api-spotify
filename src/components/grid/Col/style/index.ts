import styled from 'styled-components';

const ColContent = styled.div<{ align?: string }>`
    position: relative;
    display: flex;
    ${({ align }): string => (align ? `justify-content: ${align};` : '')}
`;

export { ColContent };
