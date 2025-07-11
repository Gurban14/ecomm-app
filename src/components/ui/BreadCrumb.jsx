import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = ({ 
  items = [], 
  separator = '/', 
  className = '',
  ...props 
}) => {
  return (
    <nav 
      className={`bg-breadcrumb-1 p-3 sm:p-4 ${className}`}
      aria-label="Breadcrumb"
      {...props}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm sm:text-base md:text-lg font-proxima text-global-6 hover:underline transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm sm:text-base md:text-lg font-proxima text-global-4">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="text-sm sm:text-base md:text-lg text-global-4 mx-1">
                {separator}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  separator: PropTypes.string,
  className: PropTypes.string,
};

export default BreadCrumb;