import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const LabelContent = styled.label`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.light};

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeSmall}px;
    }
`;

export { LabelContent };
