import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="page-enter">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
