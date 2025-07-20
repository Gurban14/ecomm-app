import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-nunito font-extrabold rounded-[10px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-button-1 text-global-4 hover:bg-blue-600 disabled:bg-gray-400',
    secondary: 'bg-global-2 text-global-1 hover:bg-gray-300 disabled:bg-gray-100',
    outline: 'border border-gray-300 text-global-1 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    medium: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
    large: 'px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;