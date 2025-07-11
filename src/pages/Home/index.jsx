import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  const bestSellerProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_image_product.png",
      isHot: true,
      rating: 4
    },
    {
      id: 2,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_image_product_276x300.png",
      rating: 4
    },
    {
      id: 3,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_image_product_276x298.png",
      rating: 4
    },
    {
      id: 4,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_image_product_272x298.png",
      rating: 4
    },
    {
      id: 5,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_product_picture02.png",
      rating: 4
    },
    {
      id: 6,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_product_picture03.png",
      rating: 4
    },
    {
      id: 7,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_product_picture01.png",
      rating: 4
    },
    {
      id: 8,
      name: "Nike Air Max 270 React",
      price: "$299,43",
      originalPrice: "$534,33",
      discount: "24% Off",
      image: "/images/img_image_product_272x298.png",
      rating: 4
    }
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < rating ? "/images/img_star_copy_4.svg" : "/images/img_star_copy_2.svg"}
        className="w-3 h-3"
        alt="star"
      />
    ));
  };

  return (
    <div className="bg-global-14 min-h-screen">
      <Header />
      
      <section className="relative w-full">
        <div 
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[652px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_promotion_image.png')" }}
        >
          <div className="flex items-end h-full px-4 sm:px-6 lg:px-[100px] pb-8 sm:pb-12 lg:pb-[166px]">
            <div className="w-full max-w-[500px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-poppins font-bold text-global-12 leading-tight lg:leading-[96px] mb-4 sm:mb-6 lg:mb-8">
                Super Flash Sale<br />50% Off
              </h1>
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-[104px]">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 overflow-x-auto">
    
            <div className="relative flex-shrink-0 w-full sm:w-[416px] bg-global-14 rounded-lg shadow-lg">
              <div className="relative">
                <img 
                  src="/images/img_image_product_358x416.png" 
                  className="w-full h-[300px] sm:h-[358px] object-cover rounded-t-lg" 
                  alt="FS - QUILTED MAXI CROSS BAG" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-poppins font-bold text-global-3 mb-4 sm:mb-6">
                  FS - QUILTED MAXI CROSS BAG
                </h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-lg font-poppins text-global-8 line-through">$534,33</span>
                    <span className="text-sm sm:text-lg font-poppins font-bold text-global-10">24% Off</span>
                  </div>
                  <span className="text-xl sm:text-[30px] font-raleway font-bold text-global-7">$299,43</span>
                </div>
              </div>
            </div>

    
            <div className="relative flex-shrink-0 w-full sm:w-[434px] bg-global-14 rounded-lg shadow-lg">
              <div className="relative">
                <img 
                  src="/images/img_image_product_354x434.png" 
                  className="w-full h-[300px] sm:h-[354px] object-cover rounded-t-lg" 
                  alt="FS - Nike Air Max 270 React" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <h3 className="text-base sm:text-xl font-poppins font-bold text-global-3 flex-1">
                    FS - Nike Air Max 270 React...
                  </h3>
                  <span className="text-xl sm:text-[30px] font-raleway font-bold text-global-7">$299,43</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm sm:text-lg font-poppins text-global-8 line-through">$534,33</span>
                  <span className="text-sm sm:text-lg font-poppins font-bold text-global-10">24% Off</span>
                </div>
              </div>
            </div>

    
            <div className="relative flex-shrink-0 w-full sm:w-[416px] bg-global-14 rounded-lg shadow-lg">
              <div className="relative">
                <img 
                  src="/images/img_image_product_356x408.png" 
                  className="w-full h-[300px] sm:h-[356px] object-cover rounded-t-lg" 
                  alt="FS - Nike Air Max 270 React" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-poppins font-bold text-global-3 mb-4">
                  FS - Nike Air Max 270 React...
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm sm:text-base font-poppins text-global-8 line-through">$534,33</span>
                  <span className="text-sm sm:text-base font-poppins font-bold text-global-10">24% Off</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-xl sm:text-[30px] font-raleway font-bold text-global-7">$299,43</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-[56px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-poppins font-semibold text-global-1 mb-6">
              BEST SELLER
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12 mb-2">
              <button className="text-base sm:text-lg lg:text-[22px] font-poppins text-global-6 hover:text-global-2 transition-colors duration-200">
                All
              </button>
              <button className="text-base sm:text-lg lg:text-[22px] font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">
                Bags
              </button>
              <button className="text-base sm:text-lg lg:text-[22px] font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">
                Sneakers
              </button>
              <button className="text-base sm:text-lg lg:text-[22px] font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">
                Belt
              </button>
              <button className="text-base sm:text-lg lg:text-[22px] font-poppins text-global-4 hover:text-global-2 transition-colors duration-200">
                Sunglasses
              </button>
            </div>
            <div className="w-6 h-[3px] bg-global-6 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {bestSellerProducts.map((product, index) => (
              <div key={product.id} className="bg-global-14 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  {product.isHot && (
                    <span className="absolute top-2 left-2 bg-global-11 text-global-12 text-xs font-proxima px-3 py-1 rounded-sm z-10">
                      HOT
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    className="w-full h-[200px] sm:h-[250px] lg:h-[272px] object-cover rounded-t-lg" 
                    alt={product.name} 
                  />
                  {index === 2 && (
                    <div className="absolute inset-0 bg-global-15 rounded-t-lg flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <img src="/images/img_group_5.svg" className="w-12 h-12" alt="action" />
                        <img src="/images/img_group_4.svg" className="w-12 h-12" alt="action" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-poppins font-bold text-global-3 mb-2 sm:mb-4">
                    {product.name}
                  </h3>
                  {index === 2 && (
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {renderStars(product.rating)}
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-poppins font-bold text-global-7">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-poppins text-global-8 line-through">{product.originalPrice}</span>
                      <span className="text-sm font-poppins font-bold text-global-10">{product.discount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-1">
              <span className="text-lg sm:text-xl font-poppins font-medium text-global-6">LOAD MORE</span>
              <div className="w-[80px] sm:w-[114px] h-[3px] bg-global-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 bg-global-3 px-4 sm:px-6 lg:px-[56px] py-12 sm:py-16 lg:py-20">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-[55px] font-poppins font-medium text-global-12 leading-tight lg:leading-[82px] mb-4 sm:mb-6">
                Adidas Men Running<br />Sneakers
              </h2>
              <p className="text-base sm:text-lg lg:text-2xl font-poppins text-global-12 mb-6 sm:mb-8">
                Performance and design. Taken right to the edge.
              </p>
              <div className="inline-flex flex-col gap-1">
                <span className="text-lg sm:text-xl font-poppins font-semibold text-global-12">SHOP NOW</span>
                <div className="w-[60px] sm:w-[74px] h-[3px] bg-global-12"></div>
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

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[184px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img src={service.icon} className="w-16 h-16 sm:w-20 sm:h-20" alt={service.title} />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[27px] font-poppins font-medium text-global-1 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-proxima text-global-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[134px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-poppins font-semibold text-global-1">
              LATEST NEWS
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
            {newsItems.map((item, index) => (
              <div key={item.id} className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6">
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
                  <p className="text-sm sm:text-lg font-poppins font-medium text-global-9 mb-2">
                    {item.date}
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-poppins font-semibold text-global-1 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-proxima text-global-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-[56px]">
        <div className="w-full max-w-[1212px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-poppins font-semibold text-global-1">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={product.image} 
                    className="w-full sm:w-32 lg:w-full h-32 sm:h-32 lg:h-40 object-cover rounded-lg" 
                    alt={product.name} 
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-proxima text-global-4 mb-2 sm:mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    {renderStars(product.rating)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-poppins font-medium text-global-11">{product.price}</span>
                    <div className="relative">
                      <span className="text-lg sm:text-xl font-proxima text-global-9">{product.originalPrice}</span>
                      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-global-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div 
                className="w-full h-16 bg-cover bg-center rounded-lg flex items-center"
                style={{ backgroundImage: "url('/images/img_rounded_rectangle_3.svg')" }}
              >
                <input
                  type="text"
                  placeholder="Search query..."
                  className="flex-1 bg-transparent px-6 py-4 text-base font-proxima text-global-5 placeholder-global-5 focus:outline-none"
                />
                <Button 
                  variant="primary" 
                  className="mr-2 px-6 py-3 rounded-none"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;