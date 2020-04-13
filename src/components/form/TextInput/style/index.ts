import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';
import { animated } from 'react-spring';

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: block;
`;

const Input = styled.input<{ focused?: boolean }>`
    outline: none;
    border: 0px;
    border-bottom: 1px solid ${colors.light};
    padding: 10px 0px;
    width: 100%;
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    font-weight: bold;
    color: ${({ focused }): string => (focused ? colors.light : colors.main)};
    background-color: transparent;
    font-size: ${sizes.font.fontSizeXLarge}px;

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeLarge}px;
    }

    ::placeholder {
        color: ${colors.main};
    }
`;

const Line = styled(animated.div)`
    background-color: ${colors.main};
    height: 1px;
    margin-top: -1px;
    z-index: 2;
    position: relative;
`;

export { Input, Line, InputWrapper };
