import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  
  return (
      <ReactPaginate
      className="pagination"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="pagination--next"
      previousClassName="pagination--prev"
      pageClassName="pagination--page"
      pageLinkClassName="pagination--link"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0: pageNumber - 1}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={info?.pages} 
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)
      }}
      />

    
  );
};

export default Pagination;
