import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button2';
import EditText from '../../components/ui/EditText';
import CheckBox from '../../components/ui/CheckBox';
import TextArea from '../../components/ui/TextArea';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const PaymentMethodSelection = () => {
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, address, phone } = formData;

    if (!firstName || !lastName || !email || !address || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    
    localStorage.setItem(
      'paymentData',
      JSON.stringify({ formData, selectedPayment })
    );

    
    navigate('/credit-card-payment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] text-[#222]">
      <Header />
      <div className="w-full max-w-[1030px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
        <div className="rounded-[10px] p-6 sm:p-8 md:p-10">
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <img
              src="/images/back.svg"
              alt="Back"
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"
              onClick={() => navigate('/cart')} 
            />
            <img
              src="/images/times.svg"
              alt="Close"
              className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
              onClick={() => navigate('/')} 
            />
          </div>

          <h1 className="font-raleway font-semibold text-xl sm:text-2xl md:text-3xl leading-tight text-global-7 text-center mb-6 sm:mb-8 capitalize">
            Make Payment
          </h1>

          <div className="relative w-full max-w-[154px] mx-auto mb-8 sm:mb-10">
            <div className="h-[2px] w-full bg-global-2 absolute top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-global-2 text-global-12 rounded-full flex items-center justify-center font-nunito font-bold text-base sm:text-lg shadow-[0px_10px_40px_#f7a17033]">
                1
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-global-2 text-global-4 rounded-full flex items-center justify-center font-nunito font-bold text-base sm:text-lg">
                2
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-global-2 text-global-4 rounded-full flex items-center justify-center font-nunito font-bold text-base sm:text-lg">
                3
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="w-full lg:w-1/2 space-y-6">
              <EditText
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                className="w-full bg-global-6"
              />

              <EditText
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                className="w-full bg-global-6"
              />

              <div className="space-y-4">
                <h3 className="font-raleway font-semibold text-lg sm:text-xl text-global-7 capitalize">
                  Select Method of Payment
                </h3>

                <div className="space-y-2">
                  <div
                    className={`rounded-lg p-3 sm:p-4 cursor-pointer ${
                      selectedPayment === 'credit' ? 'bg-button-2' : 'bg-global-14 border border-gray-100'
                    }`}
                    onClick={() => handlePaymentChange('credit')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src="/images/Group.png"
                          alt="Credit Card"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="font-poppins font-bold text-xs sm:text-sm text-global-1">
                          Credit Card Or Debit
                        </span>
                      </div>
                    </div>
                  </div>

                 <div
                    className={`rounded-lg p-3 sm:p-4 cursor-pointer ${
                      selectedPayment === 'paypal' ? 'bg-button-2' : 'bg-global-14 border border-gray-100'
                    }`}
                    onClick={() => handlePaymentChange('paypal')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src="/images/Paypal.png"
                          alt="Credit Card"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="font-poppins font-bold text-xs sm:text-sm text-global-1">
                          Paypal
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`rounded-lg p-3 sm:p-4 cursor-pointer ${
                      selectedPayment === 'bank' ? 'bg-button-2' : 'bg-global-14 border border-gray-100'
                    }`}
                    onClick={() => handlePaymentChange('bank')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src="/images/Bank.png"
                          alt="Credit Card"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className="font-poppins font-bold text-xs sm:text-sm text-global-1">
                          Bank Transfer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <EditText
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                className="w-full bg-global-6"
              />

              <TextArea
                placeholder="Address for Delivery"
                value={formData.address}
                onChange={handleInputChange('address')}
                rows={4}
                className="w-full bg-global-6"
              />

              <EditText
                placeholder="Mobile Phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                className="w-full bg-global-6"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <Button
              onClick={handleSubmit}
              variant="primary"
              size="large"
              className="px-8 sm:px-12 py-3 sm:py-4 font-nunito font-extrabold text-lg sm:text-xl md:text-2xl"
            >
              Go to Payment
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethodSelection;
