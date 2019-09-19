import React from 'react';
import ButtonAdd from './ButtonAdd';
import TableContent from './TableContent';
import PaginationExampleShorthand from './PaginationExampleShorthand';
import { CustomersHeader, ProductsHeader, SalesHeader, StoresHeader } from './dataSupplier';

const MainContent = ({ items, type, addFunction }) => {
    var header = CustomersHeader; //cutomer as default
    if (type === 'Customers')
        header = CustomersHeader;
    else if (type === 'Products')
        header = ProductsHeader;
    else if (type === 'Stores')
        header = StoresHeader;
    else if (type === 'Sales')
        header = SalesHeader;
    return (
        <div className="tableContainer">
            <ButtonAdd type={type} addFunction={addFunction} header={header}/>
            <TableContent items={items} type={type} header={header}   />
            <PaginationExampleShorthand />
        </div>
    );
} 

export default MainContent;