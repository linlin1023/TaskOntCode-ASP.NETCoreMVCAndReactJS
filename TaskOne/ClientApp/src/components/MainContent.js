import React from 'react';
import ButtonAdd from './ButtonAdd';
import TableContent from './TableContent';
import PaginationExampleShorthand from './PaginationExampleShorthand';

const MainContent = () => (
    <div className="tableContainer">
        <ButtonAdd />
        <TableContent />
        <PaginationExampleShorthand />
    </div>
)

export default MainContent;