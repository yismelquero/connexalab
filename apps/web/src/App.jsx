import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

// 👇 IMPORTAMOS EL BOTÓN FLOTANTE
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* 👇 BOTÓN WHATSAPP — SIEMPRE VISIBLE */}
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
