import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  showPrevNext = true,
  showFirstLast = true,
  maxVisiblePages = 5,
  className = '',
  ...props 
}) => {
  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange && onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav 
      className={`flex items-center justify-center gap-1 sm:gap-2 ${className}`}
      aria-label="Pagination Navigation"
      {...props}
    >
      {/* First Page */}
      {showFirstLast && currentPage > 1 && (
        <button
          onClick={() => handlePageClick(1)}
          className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-proxima text-global-1 bg-header-1 hover:bg-global-2 hover:text-global-12 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-2"
          aria-label="Go to first page"
        >
          First
        </button>
      )}

      {/* Previous Page */}
      {showPrevNext && currentPage > 1 && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-proxima text-global-1 bg-header-1 hover:bg-global-2 hover:text-global-12 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-2"
          aria-label="Go to previous page"
        >
          Previous
        </button>
      )}

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`
            px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-proxima rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-2
            ${page === currentPage 
              ? 'bg-global-2 text-global-12' :'text-global-1 bg-header-1 hover:bg-global-2 hover:text-global-12'
            }
          `}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Page */}
      {showPrevNext && currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-proxima text-global-1 bg-header-1 hover:bg-global-2 hover:text-global-12 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-2"
          aria-label="Go to next page"
        >
          Next
        </button>
      )}

      {/* Last Page */}
      {showFirstLast && currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className="px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-proxima text-global-1 bg-header-1 hover:bg-global-2 hover:text-global-12 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-2"
          aria-label="Go to last page"
        >
          Last
        </button>
      )}
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  showPrevNext: PropTypes.bool,
  showFirstLast: PropTypes.bool,
  maxVisiblePages: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;