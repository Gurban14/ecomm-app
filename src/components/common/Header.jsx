import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ className = '', ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`bg-global-14 ${className}`} {...props}>
      
      <div className="bg-global-14 px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-global-4">EN</span>
              <img src="/images/img_arrow_down.svg" className="w-[4px] h-[6px]" alt="dropdown" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-global-1">USD</span>
              <img src="/images/img_arrow_down.svg" className="w-[4px] h-[6px]" alt="dropdown" />
            </div>
          </div>

          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/img_profile_close_2.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="profile" />
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-global-4">My profile</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative bg-global-14 p-2 rounded">
                <img src="/images/img_system_icon_24px_cart.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="cart" />
                <span className="absolute -top-1 -right-1 bg-header-2 text-global-12 text-xs font-poppins font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-global-14">
                  2
                </span>
              </div>
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-global-4">Items</span>
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-header-1 ml-4">$0.00</span>
              <img src="/images/img_search.svg" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" alt="search" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="h-[2px] bg-header-1 w-full"></div>

      
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          
          <div className="flex items-center gap-2">
            <img src="/images/img_icon.svg" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11" alt="E-Comm" />
            <span className="text-base sm:text-lg font-poppins font-bold text-global-1">E-Comm</span>
          </div>

          
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 mt-4 lg:mt-0">
              <li>
                <button 
                  role="menuitem"
                  className="text-sm sm:text-base lg:text-2xl font-proxima text-global-6 hover:text-global-2 transition-colors duration-200"
                >
                  HOME
                </button>
              </li>
              <li>
                <button 
                  role="menuitem"
                  className="text-sm sm:text-base lg:text-2xl font-poppins font-medium text-global-4 hover:text-global-2 transition-colors duration-200"
                >
                  BAGS
                </button>
              </li>
              <li>
                <button 
                  role="menuitem"
                  className="text-sm sm:text-base lg:text-2xl font-poppins font-medium text-global-4 hover:text-global-2 transition-colors duration-200"
                >
                  SNEAKERS
                </button>
              </li>
              <li>
                <button 
                  role="menuitem"
                  className="text-sm sm:text-base lg:text-2xl font-poppins font-medium text-global-4 hover:text-global-2 transition-colors duration-200"
                >
                  BELT
                </button>
              </li>
              <li>
                <button 
                  role="menuitem"
                  className="text-sm sm:text-base lg:text-2xl font-poppins font-medium text-global-4 hover:text-global-2 transition-colors duration-200"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;