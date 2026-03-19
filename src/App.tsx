import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CheckingSavings } from '@/pages/CheckingSavings';
import { CreditCards } from '@/pages/CreditCards';
import { AutoLoans } from '@/pages/AutoLoans';
import { Membership } from '@/pages/Membership';
import { About } from '@/pages/About';
import { Login } from '@/pages/Login';
import Index from '@/pages/Index';
import PaymentHistory from '@/pages/PaymentHistory';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <div className="flex-1 pb-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checking-savings" element={<CheckingSavings />} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/auto-loans" element={<AutoLoans />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Index />} />
              <Route path="/payment-history" element={<PaymentHistory />} />
              {/* TODO: <Route path="/view-balance" element={<ViewBalance />} /> */}
              {/* TODO: Add other routes as pages are created */}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
