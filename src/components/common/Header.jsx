import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ className = '', ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <header className={`bg-global-14 ${className}`} {...props}>

      {/* Top Header Section */}
      <div className="bg-global-14 py-2 ">
        <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 ">

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
              <Link to="/my-profile" className="text-sm sm:text-base lg:text-xl font-proxima text-global-4 hover:text-global-2 transition-colors duration-200">
                My profile
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/cart" className="relative bg-global-14 p-2 rounded">
                <img src="/images/img_system_icon_24px_cart.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="cart" />
                <span className="absolute -top-1 -right-1 bg-header-2 text-global-12 text-xs font-poppins font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-global-14">
                  2
                </span>
              </Link>
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-global-4">Items</span>
              <span className="text-sm sm:text-base lg:text-xl font-proxima text-header-1 ml-4">$0.00 </span>
              <img src="/images/img_search.svg" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" alt="search" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-header-1 w-full"></div>

      <div className="py-4 sm:py-6">
        <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">

          <Link to="/" className="flex items-center gap-2">
            <img src="/images/img_icon.svg" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11" alt="E-Comm" />
            <span className="text-base sm:text-lg font-poppins font-bold text-global-1">E-Comm</span>
          </Link>

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
                <Link
                  to="/"
                  className="text-sm sm:text-base lg:text-2xl font-proxima text-global-6 hover:text-global-2 transition-colors duration-200"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/hot-deals?category=Bags" 
                  className={`text-sm sm:text-base lg:text-2xl font-poppins font-medium ${
                  location.search.includes('category=Bags') ? 'text-global-2' : 'text-global-4'
                  } hover:text-global-2 transition-colors duration-200`}                >
                  BAGS
                </Link>
              </li>
              <li>
                <Link
                  to="/hot-deals?category=Sneakers" 
                  className={`text-sm sm:text-base lg:text-2xl font-poppins font-medium ${
                location.search.includes('category=Sneakers') ? 'text-global-2' : 'text-global-4'
              } hover:text-global-2 transition-colors duration-200`}
                >
                  SNEAKERS
                </Link>
              </li>
              <li>
                <Link
                  to="/hot-deals?category=Belt" 
                  className={`text-sm sm:text-base lg:text-2xl font-poppins font-medium ${
                  location.search.includes('category=Belt') ? 'text-global-2' : 'text-global-4'
                  } hover:text-global-2 transition-colors duration-200`}
                >
                  BELT
                </Link>
              </li>
              <li>
                <Link
                  to="/hot-deals" 
                  className={`text-sm sm:text-base lg:text-2xl font-poppins font-medium ${
                  location.pathname === '/hot-deals' && !location.search ? 'text-global-2' : 'text-global-4'
                  } hover:text-global-2 transition-colors duration-200`}
                >
                  HOT DEALS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-sm sm:text-base lg:text-2xl font-poppins font-medium ${
                isActive('/contact') ? 'text-global-2' : 'text-global-4'
              } hover:text-global-2 transition-colors duration-200`}
                >
                  CONTACT
                </Link>
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