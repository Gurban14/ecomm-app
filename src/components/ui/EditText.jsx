import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'w-full font-nunito text-base leading-[22px] text-global-3 bg-edittext-1 rounded-[10px] border-0 focus:outline-none focus:ring-2 focus:ring-global-2 transition-all duration-200';
  const paddingClasses = 'px-3 py-3 sm:px-4 sm:py-4';
  
  const inputClasses = `
    ${baseClasses} 
    ${paddingClasses}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      required={required}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;