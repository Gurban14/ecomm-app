import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className = '', ...props }) => {
  return (
    <footer className={`bg-blue-200 py-12 sm:py-16 lg:py-20 ${className}`} {...props}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/img_icon.svg" className="w-10 h-10" alt="E-Comm" />
              <span className="text-lg font-bold text-gray-800">E-Comm</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">Follow Us</h3>
            <p className="text-sm text-gray-600">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex items-center gap-4">
              <img src="/images/img_facebook.svg" className="w-3 h-3" alt="Facebook" />
              <img src="/images/img_twitter.svg" className="w-3 h-3" alt="Twitter" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">Contact Us</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">Information</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">Service</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">My Account</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-800">Our Offers</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/img_western_union.svg" className="w-8 h-6" alt="Western Union" />
            <img src="/images/Group 19.svg" className="w-8 h-6" alt="MasterCard" />
            <img src="/images/img_paypal.svg" className="w-8 h-6" alt="PayPal" />
            <img src="/images/img_shape_327_25x38.png" className="w-8 h-6" alt="Visa" />
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