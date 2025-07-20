import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ 
  label = '', 
  checked = false, 
  onChange, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'flex items-center gap-2 sm:gap-4';
  const checkboxClasses = 'w-4 h-4 sm:w-5 sm:h-5 text-global-2 bg-global-4 border-2 border-global-2 rounded focus:ring-global-2 focus:ring-2';
  const labelClasses = 'font-poppins font-bold text-xs sm:text-sm leading-[18px] text-global-1 select-none';
  
  const containerClasses = `
    ${baseClasses}
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <label className={containerClasses}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={checkboxClasses}
        {...props}
      />
      {label && (
        <span className={labelClasses}>
          {label}
        </span>
      )}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default CheckBox;