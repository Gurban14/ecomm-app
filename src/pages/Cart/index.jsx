import React, { useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- импортируем useNavigate
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Table from '../../components/ui/Table';
import Button from '../../components/ui/Button';
import { CartContext } from '../../context/CartContext';

const parsePriceToNumber = (priceString) => (typeof priceString === 'number' ? priceString : parseFloat(priceString.replace('$', '')));
const formatPriceToCurrency = (priceNumber) => `$${priceNumber.toFixed(2)}`;

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState('');

  const navigate = useNavigate(); // <-- создаем навигацию

  // ... остальные константы и функции без изменений

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hot Deals', href: '/hot-deals' },
    { label: 'Cart' },
  ];

  const tableHeaders = ['PRODUCT', 'PRICE', 'QTY', 'UNIT PRICE'];

  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0), [cartItems]);
  const shippingFee = 20.00;
  const total = useMemo(() => Math.max(0, subtotal + shippingFee - discount), [subtotal, shippingFee, discount]);

  const tableData = useMemo(() => cartItems.map((item) => ({
    ...item,
    price: formatPriceToCurrency(item.unitPrice * item.quantity),
    unitPrice: formatPriceToCurrency(item.unitPrice),
  })), [cartItems]);

  const handleQuantityChange = (rowIndex, newQuantity) => {
    const item = cartItems[rowIndex];
    updateQuantity(item.id, newQuantity);
    setVoucherMessage('');
    setDiscount(0);
  };

  const handleRemoveItem = (rowIndex) => {
    const item = cartItems[rowIndex];
    removeItem(item.id);
    setVoucherMessage('');
    setDiscount(0);
  };

  const handleRedeemVoucher = () => {
    if (voucherCode.toUpperCase() === 'DISCOUNT10') {
      const discountAmount = subtotal * 0.10;
      setDiscount(discountAmount);
      setVoucherMessage('Voucher applied successfully! You got 10% off.');
    } else if (voucherCode.toUpperCase() === 'FREESHIP') {
      setDiscount(shippingFee);
      setVoucherMessage('Free shipping voucher applied!');
    } else {
      setDiscount(0);
      setVoucherMessage('Invalid voucher code. Please try again.');
    }
  };

  const handleCheckoutClick = () => {
    // При необходимости здесь можно передать состояние или сделать проверку
    navigate('/payment-method'); // <-- переход на страницу payment-method
  };

  const customColors = {
    'global-1': '#22262A', 'global-2': '#000000', 'global-3': '#1A202C', 'global-4': '#90969E',
    'global-5': '#E0E0E0', 'global-6': '#33A0FF', 'global-8': '#F3F4F6', 'global-16': '#F8F8F8',
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: customColors['global-16'] }}>
      <Header />
      <main className="flex-1 w-full">
        <BreadCrumb items={breadcrumbItems} />
        <div className="w-full max-w-[1258px] mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-global-3 text-lg font-poppins">Your cart is empty.</p>
          ) : (
            <Table headers={tableHeaders} data={tableData} onQuantityChange={handleQuantityChange} onRemoveItem={handleRemoveItem} className="mb-16 bg-global-16 sm:mb-20" />
          )}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 px-4 sm:px-8">
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-cover bg-center bg-no-repeat p-4 sm:p-5 rounded" style={{ backgroundImage: "url('/images/img_base.svg')" }}>
                <input
                  type="text"
                  placeholder="Voucher code"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="flex-1 px-4 py-3 text-global-5 text-sm sm:text-base font-poppins bg-transparent border-none outline-none placeholder-global-5"
                />
                <Button onClick={handleRedeemVoucher} className="w-full sm:w-auto px-5 py-4 text-global-8 text-lg font-poppins font-medium rounded-sm" style={{ backgroundColor: customColors['global-6'] }}>
                  Redeem
                </Button>
              </div>
              {voucherMessage && <p className="mt-2 text-sm text-center sm:text-left" style={{ color: discount > 0 ? 'green' : 'red' }}>{voucherMessage}</p>}
            </div>
            <div className="w-full lg:w-auto lg:min-w-[376px]">
              <div className="flex flex-col gap-6 mb-40">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between"><span className="text-global-3 text-lg font-poppins">Subtotal</span><span className="text-global-3 text-lg font-poppins">{formatPriceToCurrency(subtotal)}</span></div>
                  <div className="flex justify-between"><span className="text-global-3 text-lg font-poppins">Shipping fee</span><span className="text-global-3 text-lg font-poppins">{formatPriceToCurrency(shippingFee)}</span></div>
                  <div className="flex justify-between"><span className="text-global-3 text-lg font-poppins">Coupon Discount</span><span className="text-global-3 text-lg font-poppins">-{formatPriceToCurrency(discount)}</span></div>
                  <div className="w-full h-0.5" style={{ backgroundColor: customColors['global-5'] }}></div>
                </div>
                <div className="flex justify-between"><span className="text-global-1 text-2xl sm:text-3xl font-poppins font-medium">TOTAL</span><span className="text-global-1 text-2xl sm:text-3xl font-poppins font-medium">{formatPriceToCurrency(total)}</span></div>
                <Button onClick={handleCheckoutClick} className="w-full px-8 py-4 text-global-8 text-lg font-poppins font-medium rounded" style={{ backgroundColor: customColors['global-6'] }}>
                  Check out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
