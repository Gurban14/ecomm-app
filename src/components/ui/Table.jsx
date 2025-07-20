import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ 
  headers = [], 
  data = [], 
  className = "",
  onQuantityChange = () => {},
  onRemoveItem = () => {},
  ...props 
}) => {
  const handleQuantityChange = (rowIndex, newQuantity) => {
    onQuantityChange(rowIndex, newQuantity);
  };

  const handleRemoveItem = (rowIndex) => {
    onRemoveItem(rowIndex);
  };

  return (
    <div className={`w-full overflow-x-auto ${className}`} {...props}>
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-gray-200">
            {headers.map((header, index) => (
              <th 
                key={index}
                className="text-left text-global-1 text-lg sm:text-xl font-poppins font-medium py-4 px-4 sm:px-8"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-100">
              
              <td className="py-6 px-4 sm:px-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  <button
                    onClick={() => handleRemoveItem(rowIndex)}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    aria-label="Remove item"
                  >
                    <img src="/images/del.png" alt="Delete" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  
                  <div className="relative bg-global-8 rounded p-2">
                    <img 
                      src={row.image} 
                      alt={row.name}
                      className="w-20 h-20 sm:w-24 sm:h-28 object-cover rounded"
                    />
                  </div>
                  
                  <span className="text-global-3 text-sm sm:text-lg font-poppins">
                    {row.name}
                  </span>
                </div>
              </td>

              
              <td className="py-6 px-4 sm:px-8">
                <span className="text-global-3 text-sm sm:text-lg font-poppins">
                  {row.price}
                </span>
              </td>

              
              <td className="py-6 px-4 sm:px-8">
                <div className="flex items-center gap-3 bg-global-5 rounded px-4 py-2 w-fit">
                  <button
                    onClick={() => handleQuantityChange(rowIndex, Math.max(1, row.quantity - 1))}
                    className="w-2 h-2 bg-global-7 hover:bg-global-6 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <img src="/images/min.svg" alt="Increase" className="w-2 h-2" />
                  </button>
                  
                  <span className="text-global-3 text-sm sm:text-lg font-proxima min-w-[20px] text-center">
                    {row.quantity}
                  </span>
                  
                  <button
                    onClick={() => handleQuantityChange(rowIndex, row.quantity + 1)}
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Increase quantity"
                  >
                    <img src="/images/plus.png" alt="Increase" className="w-2 h-2" />
                  </button>
                </div>
              </td>

              
              <td className="py-6 px-4 sm:px-8">
                <span className="text-global-3 text-sm sm:text-lg font-poppins">
                  {row.unitPrice}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      unitPrice: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  onQuantityChange: PropTypes.func,
  onRemoveItem: PropTypes.func,
};

export default Table;