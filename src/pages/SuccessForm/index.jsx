import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button2';
// import EditText from '../../components/ui/EditText'; // Not used in this version
// import CheckBox from '../../components/ui/CheckBox'; // Not used in this version
// import TextArea from '../../components/ui/TextArea'; // Not used in this version
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

      console.error('Please fill in all fields.');
      return;
    }

    localStorage.setItem(
      'paymentData',
      JSON.stringify({ formData, selectedPayment })
    );

    navigate('/credit-card-payment');
  };

  const handleCompleteClick = () => {
    navigate('/');
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
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-global-2 text-global-12 rounded-full flex items-center justify-center font-nunito font-bold text-base sm:text-lg">
                2
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-global-2 text-global-12 rounded-full flex items-center justify-center font-nunito font-bold text-base sm:text-lg">
                3
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row gap-6">
            <div className="w-full flex justify-center mt-8 sm:mt-10">
            <img
              src="/images/success.png"
              alt="Success" 
            />
            </div>
          </div>
          <h2 className="font-raleway font-semibold text-xl sm:text-2xl md:text-3xl leading-tight text-global-3 text-center mb-6 sm:mb-8 capitalize">
            Success
          </h2>

          <div className="flex justify-center mt-8 sm:mt-10">
            <Button
              className="px-8 sm:px-12 w-[338px] py-3 text-global-12 sm:py-4 mt-14 font-nunito font-extrabold text-lg sm:text-xl md:text-2xl"
              onClick={handleCompleteClick} 
            >
              Complete
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethodSelection;
