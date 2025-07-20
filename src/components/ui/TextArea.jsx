import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  rows = 4,
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'w-full font-nunito text-base leading-[22px] text-global-3 bg-edittext-1 rounded-[10px] border-0 focus:outline-none focus:ring-2 focus:ring-global-2 transition-all duration-200 resize-vertical';
  const paddingClasses = 'px-3 py-6 sm:px-4 sm:py-7';
  
  const textareaClasses = `
    ${baseClasses} 
    ${paddingClasses}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <textarea
      placeholder={placeholder}
      value={textValue}
      onChange={handleChange}
      rows={rows}
      disabled={disabled}
      required={required}
      className={textareaClasses}
      {...props}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default TextArea;