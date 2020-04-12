import * as React from 'react';
import { RowContent } from './style';
import { Props } from './types';

const Row = ({
    children,
    columnsDesktop,
    columnsTablet,
    columnsMobile,
    spacingRow,
    gridTemplateColumns,
    spacingColumn,
}: Props): JSX.Element => {
    return (
        <RowContent
            columnsDesktop={columnsDesktop}
            columnsTablet={columnsTablet}
            columnsMobile={columnsMobile}
            spacingRow={spacingRow}
            gridTemplateColumns={gridTemplateColumns}
            spacingColumn={spacingColumn}
        >
            {children}
        </RowContent>
    );
};

export default Row;
