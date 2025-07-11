import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0, 
  maxRating = 5, 
  size = 'medium',
  readonly = false,
  onRatingChange,
  className = '',
  ...props 
}) => {
  const sizes = {
    small: 'w-3 h-3 sm:w-4 sm:h-4',
    medium: 'w-4 h-4 sm:w-5 sm:h-5',
    large: 'w-5 h-5 sm:w-6 sm:h-6',
  };

  const handleStarClick = (starIndex) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  return (
    <div 
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleStarClick(index)}
          disabled={readonly}
          className={`
            ${sizes[size]} 
            ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} 
            transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-global-2 rounded
          `}
          aria-label={`${index + 1} star${index + 1 !== 1 ? 's' : ''}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={index < rating ? '#FFD700' : '#E5E7EB'}
            className="w-full h-full"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  readonly: PropTypes.bool,
  onRatingChange: PropTypes.func,
  className: PropTypes.string,
};

export default RatingBar;