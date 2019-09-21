const CustomersHeader = ["Name", "Address"];
const ProductsHeader = ["Name", "Price"];
const SalesHeader = ["Product", "Customer", "Store", "DateSold"];
const StoresHeader = ["Name", "Address"];
export { CustomersHeader, ProductsHeader, SalesHeader, StoresHeader, getHeader }

function getHeader(type) { 
    var header;
    if (type === 'Customers')
        header = CustomersHeader;
    else if (type === 'Products')
        header = ProductsHeader;
    else if (type === 'Stores')
        header = StoresHeader;
    else if (type === 'Sales')
        header = SalesHeader;
    else
        header = CustomersHeader;
    return header;
}

