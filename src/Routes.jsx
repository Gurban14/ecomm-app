import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import HotDeals from './pages/HotDeals';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PaymentMethodSelectionPage from './pages/PaymentMethodSelection/PaymentMethodSelection';
import CreditCardPaymentFormPage from './pages/CreditCardPaymentForm/';
import SuccessPage from './pages/SuccessForm/';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ErrorBoundary><Cart /></ErrorBoundary>} />
          <Route path="/payment-method" element={<PaymentMethodSelectionPage />} />
          <Route path="/credit-card-payment" element={<CreditCardPaymentFormPage />} />
          <Route path="/success-payment" element={<SuccessPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;