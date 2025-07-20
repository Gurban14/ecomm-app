import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import RatingBar from '../../components/ui/RatingBar';
import { CartContext } from '../../context/CartContext';

const parsePrice = (priceString) => (priceString ? parseFloat(priceString.replace('$', '').replace(',', '')) : 0);

const HotDeals = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const [activeBrandFilter, setActiveBrandFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Name');
  const [selectedShow, setSelectedShow] = useState('12');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 600]); 
  const [isGridView, setIsGridView] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    const validCategories = ['All', 'Bags', 'Sneakers', 'Belt', 'Sunglasses', 'Watches', 'Jewelry'];
    if (categoryFromUrl && validCategories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory('All');
    }
  }, [location.search]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hot Deal' },
  ];

  const sortOptions = [
    { value: 'Name', label: 'Name (A-Z)' },
    { value: 'PriceAsc', label: 'Price (Low to High)' },
    { value: 'PriceDesc', label: 'Price (High to Low)' },
    { value: 'Rating', label: 'Rating' },
    { value: 'Newest', label: 'Newest' },
  ];

  const showOptions = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '36', label: '36' },
    { value: '48', label: '48' },
  ];

  const colorOptions = [
    { name: 'Blue', hex: '#33a0ff', image: '/images/img_group_24.svg' },
    { name: 'Red', hex: '#fc3e39', image: '/images/img_ellipse_1_copy_2.svg' },
    { name: 'Black', hex: '#171717', image: '/images/img_ellipse_1_copy_3.svg' },
    { name: 'Yellow', hex: '#fff600', image: '/images/img_ellipse_1_copy_4.svg' },
    { name: 'Pink', hex: '#ff00b4', image: '/images/img_ellipse_1_copy_5.svg' },
    { name: 'Light Grey', hex: '#efdfdf', image: '/images/img_ellipse_1_copy_6.svg' },
  ];

  const products = useMemo(() => [
    {
      id: 1,
      name: 'Nike Air Max 270 React',
      brand: 'Nike',
      price: 299.43, originalPrice: 534.33, discount: '24% Off',
      rating: 4, image: '/images/img_product_picture03.png',
      images: ['/images/img_product_picture01.png', '/images/img_product_picture02.png', '/images/img_product_picture03.png'],
      isHot: true, category: 'Sneakers', dateAdded: '2023-01-15',
      colors: ['#33a0ff', '#171717'],
      description: 'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend lacorevtr istique et congue. Vivamus adipiscin vulputate g nisi ut dolor.'
    },
    {
      id: 2,
      name: 'Lacoste Bag',
      brand: 'Generic',
      price: 299.43, originalPrice: 534.33, discount: '24% Off',
      rating: 4, image: '/images/lacoste.jpg',
      images: ['/images/lacoste.jpg'],
      isHot: true, category: 'Bags', dateAdded: '2023-03-20',
      colors: ['#171717', '#efdfdf'],
      description: 'A stylish and spacious quilted maxi cross bag, perfect for everyday use with multiple compartments.'
    },
    {
      id: 3,
      name: 'Adidas Ultraboost 21',
      brand: 'Adidas',
      price: 250.00, originalPrice: 400.00, discount: '37.5% Off',
      rating: 5, image: '/images/adidas.jpeg',
      images: ['/images/adidas.jpeg', 'https://media.azadea.com/i/davinci/A9_FY0402_ONE__A901_ONE__101__01?$prd_large$'],
      isHot: true, category: 'Sneakers', dateAdded: '2023-02-10',
      colors: ['#fc3e39', '#171717'],
      description: 'Experience ultimate comfort and energy return with Adidas Ultraboost 21. Designed for running and daily wear.'
    },
    {
      id: 4,
      name: 'LV Leather Belt',
      brand: 'Generic',
      price: 80.00, originalPrice: 120.00, discount: '33% Off',
      rating: 4, image: '/images/lvbelt.webp',
      images: ['/images/lvbelt.webp', '/images/img_product_image_84x84.png'],
      isHot: false, category: 'Belt', dateAdded: '2023-04-01',
      colors: ['#171717'],
      description: 'High-quality leather belt, perfect for formal and casual outfits. Durable and stylish.'
    },
    {
      id: 5,
      name: 'Classic Sunglasses',
      brand: 'Rayban',
      price: 150.00, originalPrice: 200.00, discount: '25% Off',
      rating: 3, image: '/images/rayban.jpg',
      images: ['/images/rayban.jpg'],
      isHot: false, category: 'Sunglasses', dateAdded: '2023-05-12',
      colors: ['#33a0ff'],
      description: 'Timeless aviator style sunglasses with UV protection. A must-have accessory.'
    },
    {
      id: 6,
      name: 'Puma RS-X Reinvention',
      brand: 'Puma',
      price: 180.00, originalPrice: 250.00, discount: '28% Off',
      rating: 4, image: '/images/puma.webp',
      images: ['/images/puma.webp', '/images/puma.webp'],
      isHot: true, category: 'Sneakers', dateAdded: '2023-01-25',
      colors: ['#fc3e39', '#171717'],
      description: 'Bold and comfortable, the Puma RS-X Reinvention offers a unique design and cushioning.'
    },
    {
      id: 7,
      name: 'Converse Chuck Taylor All Star',
      brand: 'Converse',
      price: 75.00, originalPrice: 90.00, discount: '17% Off',
      rating: 5, image: '/images/converse.jpg',
      images: ['/images/converse.jpg'],
      isHot: false, category: 'Sneakers', dateAdded: '2023-06-01',
      colors: ['#efdfdf', '#171717'],
      description: 'The iconic Converse Chuck Taylor All Star, a classic for every wardrobe.'
    },
    {
      id: 8,
      name: 'Elegant Shoulder Bag',
      brand: 'Generic',
      price: 350.00, originalPrice: 500.00, discount: '30% Off',
      rating: 4, image: '/images/elegantbag.webp',
      images: ['/images/elegantbag.webp'],
      isHot: true, category: 'Bags', dateAdded: '2023-06-15',
      colors: ['#171717', '#ff00b4'],
      description: 'An elegant and versatile shoulder bag, perfect for both day and evening.'
    },
    {
      id: 9,
      name: 'Braided Casual Belt',
      brand: 'Generic',
      price: 50.00, originalPrice: 70.00, discount: '28% Off',
      rating: 3, image: '/images/tfbelt.png',
      images: ['/images/tfbelt.png'],
      isHot: false, category: 'Belt', dateAdded: '2023-07-01',
      colors: ['#fff600'],
      description: 'A comfortable and stylish braided belt, ideal for casual wear.'
    },
    {
      id: 10,
      name: 'Vintage Leather Wallet',
      brand: 'Generic',
      price: 45.00, originalPrice: 60.00, discount: '25% Off',
      rating: 4, image: '/images/rimova.avif',
      images: ['/images/rimova.avif'],
      isHot: false, category: 'Bags', dateAdded: '2023-07-10',
      colors: ['#171717', '#efdfdf'],
      description: 'A timeless vintage leather wallet with multiple card slots.'
    }
  ], []);

  const allBrands = useMemo(() => {
    const brands = new Set(products.map((p) => p.brand));
    return ['All', ...Array.from(brands).sort()];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let currentFiltered = products;
    if (activeCategory !== 'All') currentFiltered = currentFiltered.filter((p) => p.category === activeCategory);
    if (activeBrandFilter !== 'All') currentFiltered = currentFiltered.filter((p) => p.brand === activeBrandFilter);
    if (selectedColors.length > 0) currentFiltered = currentFiltered.filter((p) => p.colors?.some((c) => selectedColors.includes(c)));
    const filteredByPrice = currentFiltered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    console.log('Filtered Products:', filteredByPrice);
    return filteredByPrice;
  }, [products, activeCategory, activeBrandFilter, selectedColors, priceRange]);

  const sortedAndFilteredProducts = useMemo(() => {
    let sortable = [...filteredProducts];
    switch (selectedSort) {
      case 'Name': sortable.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'PriceAsc': sortable.sort((a, b) => a.price - b.price); break;
      case 'PriceDesc': sortable.sort((a, b) => b.price - a.price); break;
      case 'Rating': sortable.sort((a, b) => b.rating - a.rating); break;
      case 'Newest':
        sortable.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      default: break;
    }
    console.log('Sorted Products:', sortable); 
    return sortable;
  }, [filteredProducts, selectedSort]);

  const handleColorSelect = (hexColor) => {
    setSelectedColors((prev) => (prev.includes(hexColor) ? prev.filter((c) => c !== hexColor) : [...prev, hexColor]));
    setCurrentPage(1);
  };

  const productsPerPage = parseInt(selectedShow, 10);
  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);
  const productsToDisplay = sortedAndFilteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  console.log('Products to Display:', productsToDisplay); // Debug log

  return (
    <div className="bg-global-14 min-h-screen">
      <Header />
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-6">Brands</h3>
                {allBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => { setActiveBrandFilter(brand); setCurrentPage(1); }}
                    className={`flex justify-between w-full text-left focus:outline-none ${activeBrandFilter === brand ? 'text-global-6' : 'text-global-4'}`}
                  >
                    <span className="text-sm sm:text-lg font-proxima">{brand}</span>
                    <span className={activeBrandFilter === brand ? 'text-global-6' : 'text-global-2'}>
                      {products.filter((p) => brand === 'All' || p.brand === brand).length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-5">Sort By</h3>
                <Dropdown options={sortOptions} value={selectedSort} onChange={(opt) => { setSelectedSort(opt.value); setCurrentPage(1); }} className="w-full" />
              </div>
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-5">PRICES</h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-lg font-proxima text-global-4">Range:</span>
                    <span className="text-sm sm:text-lg font-proxima text-global-1">${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}</span>
                  </div>
                  <img src="/images/img_slider.svg" className="w-full h-3" alt="price range slider" />
                </div>
              </div>
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-poppins font-medium text-global-1 mb-4 sm:mb-5">COLOR</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => handleColorSelect(color.hex)}
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 ${selectedColors.includes(color.hex) ? 'border-global-6' : 'border-transparent'} hover:border-global-5 transition-colors`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select color ${color.name}`}
                    >
                      {selectedColors.includes(color.hex) && <img src={color.image} className="w-full h-full p-0.5" alt="selected" />}
                    </button>
                  ))}
                </div>
              </div>
              <Button variant="secondary" size="medium" fullWidth className="bg-global-9 text-global-4 font-poppins font-medium">
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
                      <div className="w-9 h-0.5 bg-global-14"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center md:justify-end p-4">
                    <img src="/images/img_shoes_shoe_png.png" className="w-64 sm:w-80 lg:w-96 h-auto object-contain" alt="Adidas Running Sneakers" />
                  </div>
                </div>
              </div>
              <div className="bg-global-9 rounded p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm sm:text-base font-proxima text-global-1">{sortedAndFilteredProducts.length} Items</span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-sm sm:text-base font-proxima text-global-1">Sort By</span>
                      <Dropdown options={sortOptions} value={selectedSort} onChange={(opt) => { setSelectedSort(opt.value); setCurrentPage(1); }} className="w-24 sm:w-32" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-sm sm:text-base font-proxima text-global-1">Show</span>
                      <Dropdown options={showOptions} value={selectedShow} onChange={(opt) => { setSelectedShow(opt.value); setCurrentPage(1); }} className="w-16 sm:w-20 bg-global-8" />
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setIsGridView(true)} className={`p-3 sm:p-4 rounded ${isGridView ? 'bg-global-8' : 'bg-global-9 hover:bg-global-8'}`} aria-label="Switch to grid view">
                        <img src="/images/img_switch.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="grid view" />
                      </button>
                      <button onClick={() => setIsGridView(false)} className={`p-3 sm:p-4 rounded ${!isGridView ? 'bg-global-8' : 'bg-global-9 hover:bg-global-8'}`} aria-label="Switch to list view">
                        <div className="flex flex-col gap-1">
                          <div className="w-4 h-0.5 bg-global-5"></div>
                          <div className="w-4 h-0.5 bg-global-5"></div>
                          <div className="w-4 h-0.5 bg-global-5"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={isGridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" : "flex flex-col gap-4 sm:gap-6 lg:gap-8"}>
                {productsToDisplay.length === 0 ? (
                  <div className="text-center text-global-3 p-4">No products match your filters.</div>
                ) : (
                  productsToDisplay.map((product) => (
                    <Link to={`/product-detail/${product.id}`} key={product.id} className="block">
                      <div className="bg-global-14 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        {isGridView ? (
                          <>
                            <div className="relative">
                              {product.isHot && (
                                <Button variant="primary" size="small" className="absolute top-2 left-2 z-10 bg-button-1 text-global-12 px-3 py-1 text-xs">
                                  HOT
                                </Button>
                              )}
                              <img src={product.image || '/images/placeholder.png'} className="w-full h-48 sm:h-56 lg:h-64 object-cover" alt={product.name} />
                            </div>
                            <div className="p-4 sm:p-5">
                              <h3 className="text-base sm:text-lg font-poppins font-bold text-global-3 mb-2 sm:mb-3">{product.name}</h3>
                              <div className="mb-3 sm:mb-4"><RatingBar rating={product.rating} readonly size="small" /></div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <span className="text-base sm:text-lg font-poppins font-bold text-global-7">${product.price.toFixed(2)}</span>
                                  <span className="text-xs sm:text-sm font-poppins text-global-8 line-through">${product.originalPrice.toFixed(2)}</span>
                                  <span className="text-xs sm:text-sm font-poppins font-bold text-global-10">{product.discount}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-5">
                            <div className="relative w-full sm:w-1/3 md:w-1/4 flex-shrink-0">
                              {product.isHot && (
                                <Button variant="primary" size="small" className="absolute top-2 left-2 z-10 bg-button-1 text-global-12 px-3 py-1 text-xs">
                                  HOT
                                </Button>
                              )}
                              <div className="relative w-full overflow-hidden" style={{ paddingTop: '100%' }}>
                                <img src={product.image || '/images/placeholder.png'} className="absolute top-0 left-0 w-full h-full object-contain" alt={product.name} />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                              <h3 className="text-base sm:text-lg font-poppins font-bold text-global-3">{product.name}</h3>
                              <div className="flex items-center gap-2 text-xs sm:text-sm font-proxima text-global-4">
                                <RatingBar rating={product.rating} readonly size="small" />
                                <span>Submit a review</span>
                              </div>
                              <div className="flex items-center gap-2 sm:gap-3 mt-4">
                                <span className="text-base sm:text-lg font-poppins font-bold text-global-7">${product.price.toFixed(2)}</span>
                                <span className="text-xs sm:text-sm font-poppins text-global-8 line-through">${product.originalPrice.toFixed(2)}</span>
                                <span className="text-xs sm:text-sm font-poppins font-bold text-global-10">{product.discount}</span>
                              </div>
                              <div className="flex items-center gap-3 mt-4">
                                <button
                                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-global-2 text-global-1 hover:bg-global-8 hover:text-global-12 rounded transition-colors duration-200 text-sm font-medium"
                                >
                                  <img src="/images/cart_2.png" alt="Add to cart" className="w-4 h-4" />
                                  <span>Add To Cart</span>
                                </button>
                                <button className="p-2 sm:p-2.5 bg-global-2 rounded-full text-global-6 hover:bg-global-8 hover:text-global-12 transition-colors duration-200">
                                  <img src="/images/hearts.svg" alt="Add to wishlist" className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))
                )}
              </div>
              <div className="flex justify-center mt-6 sm:mt-8">
                {totalPages > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-global-2 text-global-1 rounded hover:bg-global-8"
                    >
                      Prev
                    </button>
                    <span>{currentPage} of {totalPages}</span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-global-2 text-global-1 rounded hover:bg-global-8"
                    >
                      Next
                    </button>
                  </div>
                )}
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