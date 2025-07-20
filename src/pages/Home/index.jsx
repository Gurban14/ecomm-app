import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const customColors = {
    'global-1': '#22262A',
    'global-2': '#000000',
    'global-3': '#1A202C',
    'global-4': '#90969E',
    'global-6': '#33A0FF',
    'global-7': '#3B82F6',
    'global-8': '#6B7280',
    'global-9': '#C1C8CE',
    'global-10': '#EF4444',
    'global-11': '#FF4242',
    'global-12': '#FFFFFF',
    'global-14': '#F3F4F6',
    'global-15': 'rgba(0, 0, 0, 0.4)',
  };

  const bestSellerProducts = [
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
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Blue Swade Nike Sneakers",
      price: "$499",
      originalPrice: "$599",
      image: "/images/img_vector.png",
      rating: 4
    },
    {
      id: 2,
      name: "Blue Swade Nike Sneakers",
      price: "$499",
      originalPrice: "$599",
      image: "/images/img_vector.png",
      rating: 4
    },
    {
      id: 3,
      name: "Blue Swade Nike Sneakers",
      price: "$499",
      originalPrice: "$599",
      image: "/images/img_vector.png",
      rating: 4
    }
  ];

  const services = [
    {
      icon: "/images/img_shipping.svg",
      title: "FREE SHIPPING",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "/images/img_refund.svg",
      title: "100% REFUND",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "/images/img_support.svg",
      title: "SUPPORT 24/7",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  const newsItems = [
    {
      id: 1,
      date: "01 Jan, 2015",
      title: "Fashion Industry",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/img_nike_logo_emblem_logotype.png"
    },
    {
      id: 2,
      date: "01 Jan, 2015",
      title: "Best Design Tools",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/img_figma_1_logo_1.png"
    },
    {
      id: 3,
      date: "01 Jan, 2015",
      title: "HR Community",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/img_kronos_logo.png"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < rating ? "/images/img_str_copy_4.svg" : "/images/img_star_copy_2.svg"}
        className="w-3 h-3"
        alt="star"
      />
    ));
  };

  const filteredBestSellerProducts = activeCategory === 'All'
    ? bestSellerProducts
    : bestSellerProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: customColors['global-14'] }}>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[652px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_promotion_image.png')" }}
        >
          <div className="flex items-end h-full px-4 sm:px-6 lg:px-[100px] pb-8 sm:pb-12 lg:pb-[166px]">
            <div className="w-full max-w-[500px]">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-poppins font-bold leading-tight lg:leading-[96px] mb-4 sm:mb-6 lg:mb-8"
                style={{ color: customColors['global-12'] }}
              >
                Super Flash Sale<br />50% Off
              </h1>
            </div>
          </div>
        </div>

        {/* Featured Product Cards */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-[104px]">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-48 lg:gap-8 overflow-x-auto justify-center">
            {/* Card 1 */}
            <div
              className="relative flex-shrink-0 w-full sm:w-[416px] rounded-lg shadow-lg"
              style={{ backgroundColor: customColors['global-14'] }}
            >
              <div className="relative">
                <img
                  src="/images/img_image_product_358x416.png"
                  className="w-full h-[300px] sm:h-[358px] object-cover rounded-t-lg"
                  alt="FS - QUILTED MAXI CROSS BAG"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className="text-base sm:text-xl font-poppins font-bold mb-4 sm:mb-6"
                  style={{ color: customColors['global-3'] }}
                >
                  FS - QUILTED MAXI CROSS BAG
                </h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm sm:text-lg font-poppins line-through"
                      style={{ color: customColors['global-8'] }}
                    >
                      $534,33
                    </span>
                    <span
                      className="text-sm sm:text-lg font-poppins font-bold"
                      style={{ color: customColors['global-10'] }}
                    >
                      24% Off
                    </span>
                  </div>
                  <span
                    className="text-xl sm:text-[30px] font-raleway font-bold"
                    style={{ color: customColors['global-7'] }}
                  >
                    $299,43
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative flex-shrink-0 w-full sm:w-[417px] rounded-lg shadow-lg"
              style={{ backgroundColor: customColors['global-14'] }}
            >
              <div className="relative">
                <img
                  src="/images/img_image_product_354x434.png"
                  className="w-full h-[358px] sm:h-[354px] object-cover rounded-t-lg"
                  alt="FS - Nike Air Max 270 React"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <h3
                    className="text-base sm:text-xl font-poppins font-bold flex-1"
                    style={{ color: customColors['global-3'] }}
                  >
                    FS - Nike Air Max 270 React...
                  </h3>
                  <span
                    className="text-xl sm:text-[30px] font-raleway font-bold"
                    style={{ color: customColors['global-7'] }}
                  >
                    $299,43
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span
                    className="text-sm sm:text-lg font-poppins line-through"
                    style={{ color: customColors['global-8'] }}
                  >
                    $534,33
                  </span>
                  <span
                    className="text-sm sm:text-lg font-poppins font-bold"
                    style={{ color: customColors['global-10'] }}
                  >
                    24% Off
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative flex-shrink-0 w-full sm:w-[417px] rounded-lg shadow-lg"
              style={{ backgroundColor: customColors['global-14'] }}
            >
              <div className="relative">
                <img
                  src="/images/img_image_product_356x408.png"
                  className="w-full h-[408.57px] sm:h-[356.96px] object-cover rounded-t-lg"
                  alt="FS - Nike Air Max 270 React"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className="text-base sm:text-xl font-poppins font-bold mb-4"
                  style={{ color: customColors['global-3'] }}
                >
                  FS - Nike Air Max 270 React...
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-sm sm:text-base font-poppins line-through"
                    style={{ color: customColors['global-8'] }}
                  >
                    $534,33
                  </span>
                  <span
                    className="text-sm sm:text-base font-poppins font-bold"
                    style={{ color: customColors['global-10'] }}
                  >
                    24% Off
                  </span>
                </div>
                <div className="flex justify-end">
                  <span
                    className="text-xl sm:text-[30px] font-raleway font-bold"
                    style={{ color: customColors['global-7'] }}
                  >
                    $299,43
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-[56px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mt-80 mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-[35px] font-poppins font-semibold mb-6"
              style={{ color: customColors['global-1'] }}
            >
              BEST SELLER
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12 mb-6">
              <button
                className={`text-base sm:text-lg lg:text-[22px] font-poppins transition-colors duration-200 ${activeCategory === 'All' ? 'font-bold' : ''}`}
                style={{ color: activeCategory === 'All' ? customColors['global-6'] : customColors['global-4'] }}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              <button
                className={`text-base sm:text-lg lg:text-[22px] font-poppins transition-colors duration-200 ${activeCategory === 'Bags' ? 'font-bold' : ''}`}
                style={{ color: activeCategory === 'Bags' ? customColors['global-6'] : customColors['global-4'] }}
                onClick={() => setActiveCategory('Bags')}
              >
                Bags
              </button>
              <button
                className={`text-base sm:text-lg lg:text-[22px] font-poppins transition-colors duration-200 ${activeCategory === 'Sneakers' ? 'font-bold' : ''}`}
                style={{ color: activeCategory === 'Sneakers' ? customColors['global-6'] : customColors['global-4'] }}
                onClick={() => setActiveCategory('Sneakers')}
              >
                Sneakers
              </button>
              <button
                className={`text-base sm:text-lg lg:text-[22px] font-poppins transition-colors duration-200 ${activeCategory === 'Belt' ? 'font-bold' : ''}`}
                style={{ color: activeCategory === 'Belt' ? customColors['global-6'] : customColors['global-4'] }}
                onClick={() => setActiveCategory('Belt')}
              >
                Belt
              </button>
              <button
                className={`text-base sm:text-lg lg:text-[22px] font-poppins transition-colors duration-200 ${activeCategory === 'Sunglasses' ? 'font-bold' : ''}`}
                style={{ color: activeCategory === 'Sunglasses' ? customColors['global-6'] : customColors['global-4'] }}
                onClick={() => setActiveCategory('Sunglasses')}
              >
                Sunglasses
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {filteredBestSellerProducts.map((product) => (
              // Wrap the entire product card with Link for navigation
              <Link to={`/product-detail/${product.id}`} key={product.id}>
                <div className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ backgroundColor: customColors['global-14'] }}
                >
                  <div className="relative">
                    {product.isHot && (
                      <span
                        className="absolute top-2 left-2 text-xs font-proxima px-3 py-1 rounded-sm z-10"
                        style={{ backgroundColor: customColors['global-11'], color: customColors['global-12'] }}
                      >
                        HOT
                      </span>
                    )}
                    <img
                      src={product.image}
                      className="w-full h-[200px] sm:h-[250px] lg:h-[272px] object-cover rounded-t-lg"
                      alt={product.name}
                    />
                    {/* Only apply the overlay for product with id 3 */}
                    {product.id === 3 && (
                      <div
                        className="absolute inset-0 rounded-t-lg flex items-center justify-center"
                        style={{ backgroundColor: customColors['global-15'] }}
                      >
                        <div className="flex items-center gap-2">
                          <img src="/images/img_group_5.svg" className="w-12 h-12" alt="action" />
                          <img src="/images/img_group_4.svg" className="w-12 h-12" alt="action" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3
                      className="text-sm sm:text-lg font-poppins font-bold mb-2 sm:mb-4"
                      style={{ color: customColors['global-3'] }}
                    >
                      {product.name}
                    </h3>
                    {/* Render stars only for product with id 3 */}
                    {product.id === 3 && (
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {renderStars(product.rating)}
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-lg font-poppins font-bold"
                          style={{ color: customColors['global-7'] }}
                        >
                          {product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-poppins line-through"
                          style={{ color: customColors['global-8'] }}
                        >
                          {product.originalPrice}
                        </span>
                        <span
                          className="text-sm font-poppins font-bold"
                          style={{ color: customColors['global-10'] }}
                        >
                          {product.discount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-1">
              <span
                className="text-lg sm:text-xl font-poppins font-medium"
                style={{ color: customColors['global-6'] }}
              >
                LOAD MORE
              </span>
              <div
                className="w-[80px] sm:w-[114px] h-[3px]"
                style={{ backgroundColor: customColors['global-2'] }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Adidas Promotion Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-[56px] py-12 sm:py-16 lg:py-20 bg-global-3"
          >
            <div className="max-w-lg">
              <h2
                className="text-2xl sm:text-3xl lg:text-[55px] font-poppins font-medium leading-tight lg:leading-[82px] mb-4 sm:mb-6"
                style={{ color: customColors['global-12'] }}
              >
                Adidas Men Running<br />Sneakers
              </h2>
              <p
                className="text-base sm:text-lg lg:text-2xl font-poppins mb-6 sm:mb-8"
                style={{ color: customColors['global-12'] }}
              >
                Performance and design. Taken right to the edge.
              </p>
              <div className="inline-flex flex-col gap-1">
                <span
                  className="text-lg sm:text-xl font-poppins font-semibold"
                  style={{ color: customColors['global-12'] }}
                >
                  SHOP NOW
                </span>
                <div
                  className="w-[60px] sm:w-[74px] h-[3px]"
                  style={{ backgroundColor: customColors['global-12'] }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/images/img_shoes_shoe_png.png"
              className="w-full h-[400px] sm:h-[500px] lg:h-[598px] object-cover"
              alt="Adidas Men Running Sneakers"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[184px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img
                    src={service.icon}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                    alt={service.title}
                  />
                </div>
                <h3
                  className="text-xl sm:text-2xl lg:text-[27px] font-poppins font-medium mb-3 sm:mb-4"
                  style={{ color: customColors['global-1'] }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm sm:text-base lg:text-lg font-proxima leading-relaxed"
                  style={{ color: customColors['global-1'] }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[134px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-poppins font-semibold"
              style={{ color: customColors['global-1'] }}
            >
              LATEST NEWS
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
            {newsItems.map((item, index) => (
              <div key={item.id} className="flex flex-row gap-4 sm:gap-6 items-center">
                {item.image && (
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      className={`${index === 0 ? 'w-32 h-12 sm:w-36 sm:h-14' : 'w-24 h-20 sm:w-28 sm:h-24'} object-contain`}
                      alt={item.title}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p
                    className="text-sm sm:text-lg font-poppins font-medium mb-2"
                    style={{ color: customColors['global-9'] }}
                  >
                    {item.date}
                  </p>
                  <h3
                    className="text-lg sm:text-xl lg:text-[22px] font-poppins font-semibold mb-2 sm:mb-3"
                    style={{ color: customColors['global-1'] }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base lg:text-lg font-proxima leading-relaxed"
                    style={{ color: customColors['global-1'] }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[56px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-[35px] font-poppins font-semibold"
              style={{ color: customColors['global-1'] }}
            >
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex gap-4 sm:gap-6 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    className="w-[154px] h-[154px] object-cover rounded-lg"
                    alt={product.name}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    className="text-lg sm:text-xl lg:text-[22px] font-proxima mb-2 sm:mb-3"
                    style={{ color: customColors['global-4'] }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    {renderStars(product.rating)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-lg sm:text-xl font-poppins font-medium"
                      style={{ color: customColors['global-11'] }}
                    >
                      {product.price}
                    </span>
                    <div className="relative">
                      <span
                        className="text-lg sm:text-xl font-proxima"
                        style={{ color: customColors['global-9'] }}
                      >
                        {product.originalPrice}
                      </span>
                      <div
                        className="absolute inset-x-0 top-1/2 h-[1px]"
                        style={{ backgroundColor: customColors['global-4'] }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20 mt-[110px]">
            <div className="w-[635px] h-[64px] flex rounded-[5px] overflow-hidden border border-blue-300">
              <input
                type="text"
                placeholder="Search query..."
                className="flex-1 px-6 text-base font-proxima text-gray-500 placeholder-gray-400 focus:outline-none"
                style={{ backgroundColor: '#ffffff' }}
              />
              <button
                className="w-[126px] bg-global-2 text-global-12 font-poppins text-base font-semibold px-4 py-2 flex items-center justify-center rounded-r-[5px] focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;