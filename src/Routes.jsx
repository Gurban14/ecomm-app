import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import HotDealsPage from './pages/HotDeals';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hot-deals" element={<HotDealsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;