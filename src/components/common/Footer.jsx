import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className = '', ...props }) => {
  return (
    <footer className={`bg-footer-1 py-12 sm:py-16 lg:py-20 ${className}`} {...props}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
  
            <div className="flex flex-col gap-6 lg:w-1/4">
              <div className="flex items-center gap-2">
                <img src="/images/img_icon.svg" className="w-8 h-8 sm:w-10 sm:h-10" alt="E-Comm" />
                <span className="text-base sm:text-lg font-poppins font-bold text-global-1">E-Comm</span>
              </div>
              <p className="text-xs sm:text-sm font-proxima text-global-1 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever. Since the 1500s, when an unknown printer.
              </p>
            </div>

  
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 lg:w-3/4">
    
              <div className="flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-poppins text-global-1">Information</h3>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Information</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Terms & Conditions</a></li>
                </ul>
              </div>

    
              <div className="flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-poppins text-global-1">Service</h3>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Information</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Terms & Conditions</a></li>
                </ul>
              </div>

    
              <div className="flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-poppins text-global-1">My Account</h3>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Information</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Terms & Conditions</a></li>
                </ul>
              </div>

    
              <div className="flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1">Our Offers</h3>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Information</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1">Follow Us</h3>
              <p className="text-xs sm:text-sm font-proxima text-global-1">
                Since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
              <div className="flex items-center gap-4">
                <img src="/images/img_facebook.svg" className="w-4 h-4" alt="Facebook" />
                <img src="/images/img_twitter.svg" className="w-4 h-4" alt="Twitter" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1">Contact Us</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-poppins text-global-1">
                <span>E-Comm,</span>
                <span>4578</span>
                <span>Marmora</span>
                <span>Road,</span>
                <span>Glasgow</span>
                <span>D04</span>
                <span>89GR</span>
              </div>
            </div>
          </div>


          <div className="border-t border-global-9 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm font-proxima text-global-9">
                © 2018 Ecommerce theme by www.bisenbaev.com
              </p>
              <div className="flex items-center gap-4">
                <img src="/images/img_western_union.svg" className="w-8 h-6" alt="Western Union" />
                <div className="relative bg-cover bg-center w-8 h-6" style={{backgroundImage: "url('/images/img_shape_327.svg')"}}>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs font-arial text-global-12">MasterCard</span>
                  </div>
                </div>
                <img src="/images/img_paypal.svg" className="w-8 h-6" alt="PayPal" />
                <div className="relative bg-cover bg-center w-8 h-6" style={{backgroundImage: "url('/images/img_shape_327_25x38.png')"}}>
                  <img src="/images/img_shape_328.svg" className="w-1 h-1" alt="Visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;