import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import RatingBar from '../../components/ui/RatingBar';
import { CartContext } from '../../context/CartContext';

const products = [
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
    images: ['/images/adidas.jpeg'],
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
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('product');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0] || foundProduct.image);
    }
  }, [productId]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hot Deals', href: '/hot-deals' },
    { label: product?.name || 'Product' },
  ];

  const sizeOptions = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
    { value: 'xxl', label: 'XXL' },
  ];

  const colorOptions = [
    { id: 0, name: 'Blue', hex: '#33a0ff', image: '/images/img_group_24.svg' },
    { id: 1, name: 'Red', hex: '#fc3e39', image: '/images/img_ellipse_1_copy_2.svg' },
    { id: 2, name: 'Black', hex: '#171717', image: '/images/img_ellipse_1_copy_3.svg' },
    { id: 3, name: 'Yellow', hex: '#fff600', image: '/images/img_ellipse_1_copy_4.svg' },
    { id: 4, name: 'Pink', hex: '#ff00b4', image: '/images/img_ellipse_1_copy_5.svg' },
    { id: 5, name: 'Light Grey', hex: '#efdfdf', image: '/images/img_ellipse_1_copy_6.svg' },
  ];

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption.value);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart({ ...product, size: selectedSize, quantity });
      navigate('/cart');
    } else {
      alert('Please select a size before adding to cart.');
    }
  };

  if (!product) return (
    <div className="bg-global-14 min-h-screen">
      <Header />
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Product Not Found' }]} />
        <div className="text-center py-12">
          <h2 className="text-xl sm:text-2xl font-poppins font-medium text-global-3">Product Not Found</h2>
          <p className="text-sm sm:text-base font-proxima text-global-4 mt-4">The product you are looking for does not exist or is no longer available.</p>
          <Link to="/hot-deals">
            <Button variant="primary" size="medium" className="mt-6 bg-button-1 text-global-12">Back to Hot Deals</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="bg-global-14 min-h-screen">
      <Header />
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          {/* Product Images */}
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col gap-8">
              <div className="relative bg-global-9 rounded-lg overflow-hidden">
                <img src={mainImage} alt={product.name} className="w-full h-80 sm:h-96 lg:h-[500px] object-contain" />
                {product.isHot && (
                  <Button variant="primary" size="small" className="absolute top-2 left-2 z-10 bg-button-1 text-global-12 px-3 py-1 text-xs">HOT</Button>
                )}
              </div>
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 ${mainImage === image ? 'border-global-6' : 'border-transparent'} hover:border-global-5`}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-global-3">{product.name}</h1>
              <div className="flex items-center gap-2">
                <RatingBar rating={product.rating} readonly size="medium" />
                <span className="text-sm font-proxima text-global-4">{product.rating} ({Math.floor(Math.random() * 100)} Reviews)</span>
                <button className="text-sm font-proxima text-global-6 hover:underline">Submit a review</button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl font-poppins font-bold text-global-7">${product.price.toFixed(2)}</span>
                <span className="text-sm font-poppins text-global-8 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-sm font-poppins font-bold text-global-10">{product.discount}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-proxima text-global-1 w-24">Availability:</span>
                  <span className="text-sm font-proxima text-global-4">In stock</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-proxima text-global-1 w-24">Category:</span>
                  <span className="text-sm font-proxima text-global-4">{product.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-proxima text-global-1 w-24">Brand:</span>
                  <span className="text-sm font-proxima text-global-4">{product.brand}</span>
                </div>
                <span className="text-sm font-proxima text-global-4">Free shipping</span>
              </div>
              <div className="w-full h-px bg-global-5"></div>
              <div className="flex items-center gap-4">
                <span className="text-base font-proxima text-global-1">Select Color:</span>
                <div className="flex gap-3">
                  {product.colors.map((hex, index) => {
                    const colorOption = colorOptions.find(co => co.hex === hex);
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedColorIndex(index)}
                        className={`w-6 h-6 rounded-full border-2 ${selectedColorIndex === index ? 'border-global-6' : 'border-transparent'} hover:border-global-5`}
                        style={{ backgroundColor: hex }}
                        title={colorOption?.name || 'Color'}
                      >
               
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-base font-proxima text-global-1">Size:</span>
                <Dropdown
                  options={sizeOptions}
                  value={selectedSize}
                  onChange={handleSizeChange}
                  className="w-32"
                />
              </div>
              <div className="w-full h-px bg-global-5"></div>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-global-9 rounded px-4 py-3 gap-4">
                  <button onClick={decrementQuantity} className="w-2 h-0.5 bg-global-7 hover:bg-global-6"></button>
                  <span className="text-base font-proxima text-global-3 min-w-[20px] text-center">{quantity}</span>
                  <button onClick={incrementQuantity}>
                    <img src="/images/img_group_27.svg" alt="Increase" className="w-2 h-2" />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="medium"
                  className="flex-1 bg-global-2 text-global-1 hover:bg-global-8 hover:text-global-12"
                  onClick={handleAddToCart}
                >
                  <img src="/images/cart_2.png" alt="Add to cart" className="w-4 h-4 mr-2" />
                  Add To Cart
                </Button>
                <Button
                  variant="secondary"
                  size="medium"
                  className="p-2 bg-global-2 rounded-full text-global-6 hover:bg-global-8 hover:text-global-12"
                >
                  <img src="/images/hearts.svg" alt="Add to wishlist" className="w-4 h-4" />
                </Button>
              </div>
              <div className="w-full h-px bg-global-5"></div>
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  size="medium"
                  className="flex-1 bg-button-3 text-global-12 hover:bg-opacity-90"
                >
                  <img src="/images/img_facebook.svg" alt="Facebook" className="w-2 h-4 mr-2" />
                  Share on Facebook
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  className="flex-1 bg-button-1 text-global-12 hover:bg-opacity-90"
                >
                  <img src="/images/img_twitter.svg" alt="Twitter" className="w-4 h-3 mr-2" />
                  Share on Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16 bg-global-9 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('product')}
                className={`text-lg font-poppins ${activeTab === 'product' ? 'text-global-6' : 'text-global-3'}`}
              >
                Product Information
              </button>
              {activeTab === 'product' && <div className="w-36 h-1 bg-global-6"></div>}
            </div>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-lg font-poppins ${activeTab === 'reviews' ? 'text-global-6' : 'text-global-3'}`}
            >
              Reviews <span className="text-sm text-global-4">(0)</span>
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`text-lg font-poppins ${activeTab === 'other' ? 'text-global-6' : 'text-global-3'}`}
            >
              Another tab
            </button>
          </div>
          <div className="w-full h-px bg-global-4 mb-5"></div>
          {activeTab === 'product' && (
            <p className="text-sm font-proxima text-global-4">{product.description}</p>
          )}
          {activeTab === 'reviews' && (
            <p className="text-sm font-proxima text-global-4">No reviews yet. Be the first to review!</p>
          )}
          {activeTab === 'other' && (
            <p className="text-sm font-proxima text-global-4">This is a placeholder for another tab.</p>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-global-1 text-center mb-12">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link to={`/product-detail/${relatedProduct.id}`} key={relatedProduct.id} className="block">
                <div className="relative bg-global-14 rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                  {relatedProduct.isHot && (
                    <Button variant="primary" size="small" className="absolute top-2 left-2 z-10 bg-button-1 text-global-12 px-3 py-1 text-xs">HOT</Button>
                  )}
                  <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 sm:h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-base font-poppins font-bold text-global-3 mb-2">{relatedProduct.name}</h3>
                    <RatingBar rating={relatedProduct.rating} readonly size="small" className="mb-2" />
                    <div className="flex items-center gap-2">
                      <span className="text-base font-poppins font-bold text-global-7">${relatedProduct.price.toFixed(2)}</span>
                      <span className="text-sm font-poppins text-global-8 line-through">${relatedProduct.originalPrice.toFixed(2)}</span>
                      <span className="text-sm font-poppins font-bold text-global-10">{relatedProduct.discount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;