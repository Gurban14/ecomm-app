import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';

const CreditCardPaymentFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expDate: '',
    cvv: '',
    saveCard: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', formData);
    // Instead of alert, navigate to the success-payment page
    navigate('/success-payment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] text-[#222]">
      <Header />

      <div className="max-w-6xl mx-auto w-full px-4 py-6 relative">
        <div className="flex justify-between items-center mb-4">
          <img
            src="/images/back.svg"
            alt="Back"
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate('/cart')}
          />
          <img
            src="/images/times.svg"
            alt="Close"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        <BreadCrumb text="Credit Card Payment" />
        <h2 className="text-2xl font-bold mb-6">Make Payment</h2>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
          {/* Слева — визуальная карточка */}
          <div className="hidden md:flex mr-28 justify-center items-center">
            <div className="w-[340px] h-[200px] bg-gradient-to-r from-[#33a0ff] to-[#40bfff] text-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Credit Card</span>
                <img src="/images/visa-logo.svg" alt="Visa" className="w-10 h-6" />
              </div>
              <div className="text-xl tracking-widest font-semibold">
                {formData.cardNumber || '**** **** **** ****'}
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="uppercase opacity-70">Card Holder</div>
                  <div>{formData.cardHolder || 'FULL NAME'}</div>
                </div>
                <div>
                  <div className="uppercase opacity-70">Expires</div>
                  <div>{formData.expDate || 'MM/YY'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label className="block mb-1 font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border rounded-lg shadow-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm"
                />
              </div>

              <div className="w-1/2">
                <label className="block mb-1 font-medium">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="saveCard"
                checked={formData.saveCard}
                onChange={handleChange}
              />
              <label className="text-sm">Save this card for future purchases</label>
            </div>

            <Button type="submit" className="w-full mt-4">
              Confirm
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreditCardPaymentFormPage;