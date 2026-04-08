import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CheckingSavings } from '@/pages/CheckingSavings';
import { CreditCards } from '@/pages/CreditCards';
import { AutoLoans } from '@/pages/AutoLoans';
import { Membership } from '@/pages/Membership';
import { About } from '@/pages/About';
import { Login } from '@/pages/Login';
// import Index from '@/pages/Index';
import PaymentHistory from '@/pages/PaymentHistory';
import TransferRestricted from '@/pages/TransferRestricted';
import CreditCardDashboard from '@/pages/CreditCardDashboard';


import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

function AppContent() {
  useLocation();
  const isSpecialBg = false;
  
  return (
    <div className={`min-h-screen flex flex-col ${isSpecialBg ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gray-50'}`}>
      <Navbar />

      <div className={`pb-24 flex-1`}>
      <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checking-savings" element={<CheckingSavings />} />
          <Route path="/credit-cards" element={<CreditCards />} />

          <Route path="/auto-loans" element={<AutoLoans />} />
          <Route path="/membership" element={<Membership />} />

          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<CreditCardDashboard />} />


          <Route path="/payment-history" element={<PaymentHistory />} />\n          <Route path="/transfer-restricted" element={<TransferRestricted />} />
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

