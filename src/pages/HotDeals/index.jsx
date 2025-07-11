import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import RatingBar from '../../components/ui/RatingBar';
import Pagination from '../../components/ui/Pagination';

const HotDeals = () => {
  const [selectedBrand, setSelectedBrand] = useState('Nike');
  const [selectedSort, setSelectedSort] = useState('Name');
  const [selectedShow, setSelectedShow] = useState('12');
  const [currentPage, setCurrentPage] = useState(3);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hot Deal' }
  ];

  const sortOptions = [
    { value: 'Name', label: 'Name' },
    { value: 'Price', label: 'Price' },
    { value: 'Rating', label: 'Rating' },
    { value: 'Newest', label: 'Newest' }
  ];

  const showOptions = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '36', label: '36' },
    { value: '48', label: '48' }
  ];

  const brandCategories = [
    { name: 'Nike', count: 2, active: false },
    { name: 'Airmax', count: 48, active: true },
    { name: 'Nike', count: 14, active: false },
    { name: 'Adidas', count: 15, active: false },
    { name: 'Vans', count: 23, active: false },
    { name: 'All Stars', count: 1, active: false },
    { name: 'Adidas', count: 95, active: false }
  ];

  const brandFilters = [
    { name: 'Nike', count: 99, active: false },
    { name: 'Nike', count: 99, active: true },
    { name: 'Adidas', count: 99, active: false },
    { name: 'Siemens', count: 99, active: false }
  ];

  const colorOptions = [
    { color: '#33a0ff', selected: true },
    { color: '#fc3e39', selected: false },
    { color: '#171717', selected: false },
    { color: '#fff600', selected: false },
    { color: '#ff00b4', selected: false },
    { color: '#efdfdf', selected: false }
  ];

  const products = [
    {
      id: 1,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product.png',
      isHot: true
    },
    {
      id: 2,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product_276x300.png',
      isHot: true
    },
    {
      id: 3,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product_276x298.png',
      isHot: true
    },
    {
      id: 4,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_product_picture02.png',
      isHot: true
    },
    {
      id: 5,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_product_picture03.png',
      isHot: true
    },
    {
      id: 6,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_product_picture01.png',
      isHot: true
    },
    {
      id: 7,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product_272x298.png',
      isHot: true
    },
    {
      id: 8,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product_272x298.png',
      isHot: true
    },
    {
      id: 9,
      name: 'Nike Air Max 270 React',
      price: 299.43,
      originalPrice: 534.33,
      discount: '24% Off',
      rating: 4,
      image: '/images/img_image_product_276x300.png',
      isHot: true
    }
  ];

  const handleColorSelect = (colorIndex) => {
    const newColors = [...selectedColors];
    if (newColors.includes(colorIndex)) {
      newColors.splice(newColors.indexOf(colorIndex), 1);
    } else {
      newColors.push(colorIndex);
    }
    setSelectedColors(newColors);
  };

  return (
    <div className="bg-global-14 min-h-screen">
      <Header />
      
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <BreadCrumb items={breadcrumbItems} />
      </div>

      <div className="w-full max-w-[1212px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
  
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col gap-6 lg:gap-8">
      
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-6">Hot Deals</h3>
                <div className="flex flex-col gap-4 sm:gap-5">
                  {brandCategories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={`text-sm sm:text-lg font-proxima ${category.active ? 'text-global-6' : 'text-global-4'}`}>
                        {category.name}
                      </span>
                      <span className={`text-sm sm:text-lg font-proxima ${category.active ? 'text-global-6' : 'text-global-2'}`}>
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

      
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-5">PRICES</h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-lg font-proxima text-global-4">Ranger:</span>
                    <span className="text-sm sm:text-lg font-proxima text-global-1">${priceRange[0]} - ${priceRange[1]}</span>
                  </div>
                  <img src="/images/img_slider.svg" className="w-full h-3" alt="price range slider" />
                </div>
              </div>

      
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-5">COLOR</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <img src="/images/img_group_24.svg" className="w-6 h-6 sm:w-7 sm:h-7" alt="selected color" />
                  {colorOptions.slice(1).map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(index)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-transparent hover:border-global-5 transition-colors duration-200"
                      style={{ backgroundColor: color.color }}
                      aria-label={`Select color ${color.color}`}
                    />
                  ))}
                </div>
              </div>

      
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-6">BRAND</h3>
                <div className="flex flex-col gap-4 sm:gap-5">
                  {brandFilters.map((brand, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={`text-sm sm:text-lg font-proxima ${brand.active ? 'text-global-6' : 'text-global-4'}`}>
                        {brand.name}
                      </span>
                      <span className={`text-sm sm:text-lg font-proxima ${brand.active ? 'text-global-6' : 'text-global-2'}`}>
                        {brand.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

      
              <Button 
                variant="secondary" 
                size="medium" 
                fullWidth
                className="bg-global-9 text-global-4 font-poppins font-medium"
              >
                MORE
              </Button>
            </div>
          </div>

  
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col gap-6 sm:gap-8">
      
              <div className="relative bg-global-3 rounded overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 p-6 sm:p-8 lg:p-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-medium text-global-12 mb-3 sm:mb-4">
                      Adidas Men Running<br />Sneakers
                    </h2>
                    <p className="text-xs sm:text-sm lg:text-base font-poppins text-global-12 mb-4 sm:mb-6">
                      Performance and design. Taken right to the edge.
                    </p>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-poppins font-semibold text-global-12">SHOP NOW</span>
                      <div className="w-9 h-0.5 bg-global-12"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center md:justify-end p-4">
                    <img 
                      src="/images/img_shoes_shoe_png.png" 
                      className="w-64 sm:w-80 lg:w-96 h-auto object-contain" 
                      alt="Adidas Running Sneakers" 
                    />
                  </div>
                </div>
              </div>

      
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm sm:text-base font-proxima text-global-1">13 Items</span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-sm sm:text-base font-proxima text-global-1">Sort By</span>
                      <Dropdown
                        options={sortOptions}
                        value={selectedSort}
                        onChange={(option) => setSelectedSort(option.value)}
                        className="w-24 sm:w-32"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-sm sm:text-base font-proxima text-global-1">Show</span>
                      <Dropdown
                        options={showOptions}
                        value={selectedShow}
                        onChange={(option) => setSelectedShow(option.value)}
                        className="w-16 sm:w-20"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-3 sm:p-4 bg-global-8 rounded">
                        <img src="/images/img_switch.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="grid view" />
                      </button>
                      <div className="p-3 sm:p-4">
                        <div className="flex flex-col gap-1">
                          <div className="w-4 h-0.5 bg-global-5"></div>
                          <div className="w-4 h-0.5 bg-global-5"></div>
                          <div className="w-4 h-0.5 bg-global-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {products.map((product) => (
                  <div key={product.id} className="bg-global-14 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative">
                      {product.isHot && (
                        <Button
                          variant="primary"
                          size="small"
                          className="absolute top-2 left-2 z-10 bg-button-1 text-global-12 px-3 py-1 text-xs"
                        >
                          HOT
                        </Button>
                      )}
                      <img 
                        src={product.image} 
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                        alt={product.name} 
                      />
                    </div>
                    
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-poppins font-bold text-global-3 mb-2 sm:mb-3">
                        {product.name}
                      </h3>
                      
                      <div className="mb-3 sm:mb-4">
                        <RatingBar rating={product.rating} readonly size="small" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg font-poppins font-bold text-global-7">
                            ${product.price}
                          </span>
                          <span className="text-xs sm:text-sm font-poppins text-global-8 line-through">
                            ${product.originalPrice}
                          </span>
                          <span className="text-xs sm:text-sm font-poppins font-bold text-global-10">
                            {product.discount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

      
              <div className="flex justify-center mt-6 sm:mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={5}
                  onPageChange={setCurrentPage}
                  maxVisiblePages={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotDeals;