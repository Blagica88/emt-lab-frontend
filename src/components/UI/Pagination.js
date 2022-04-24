import ReactPaginate from "react-paginate";
import React from "react";

export const initPagination = {
    totalPages: 1,
    page: 0,
    size: 5
}

export const Pagination = (props) => <ReactPaginate previousLabel={'← Претходна'}
                                                    nextLabel={'Следна →'}
                                                    breakLabel={<span className="gap">...</span>}
                                                    breakClassName={'break-me'}
                                                    pageCount={props.totalPages}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    pageClassName={'page-item'}
                                                    pageLinkClassName={'page-link'}
                                                    previousClassName={'page-item'}
                                                    nextClassName={'page-item'}
                                                    previousLinkClassName={'page-link'}
                                                    nextLinkClassName={'page-link'}
                                                    forcePage={props.page}
                                                    onPageChange={(pageChangedEvent) => props.onChange(pageChangedEvent.selected)}
                                                    containerClassName={'pagination justify-content-center'}
                                                    activeClassName={'active'}
                                                    disabledClassName={"disabled"}/>;
