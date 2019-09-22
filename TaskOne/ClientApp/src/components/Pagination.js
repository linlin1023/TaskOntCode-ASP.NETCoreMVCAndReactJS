import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate,currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="paginationBarDiv">

            <nav >
            <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={(number === currentPage) ? "page-item active" : "page-item"} >
                            <a onClick={() => paginate(number)} href="#" className="page-link" >
                                {number}
                            </a>
                        </li>
                    ))}
            </ul>
            </nav>
        </div>
    );
};

export default Pagination;
