import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CheckingSavings } from '@/pages/CheckingSavings';
import { CreditCards } from '@/pages/CreditCards';
import { AutoLoans } from '@/pages/AutoLoans';
import { Membership } from '@/pages/Membership';
import { About } from '@/pages/About';
<<<<<<< HEAD
import { Login } from '@/pages/Login';
import Index from '@/pages/Index';
import TransferRestricted from '@/pages/TransferRestricted';
import { Business } from '@/pages/Business';
=======
import { ViewBalance } from '@/pages/ViewBalance';
>>>>>>> 8cf2bd6fccbde7a0c16c32d8eebb6f9598f50334

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
>>>>>>> 8cf2bd6fccbde7a0c16c32d8eebb6f9598f50334
        <Route path="/checking-savings" element={<CheckingSavings />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/auto-loans" element={<AutoLoans />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/dashboard" element={<Index />} />
        <Route path="/transfer-restricted" element={<TransferRestricted />} />
        <Route path="/business" element={<Business />} />
=======
        <Route path="/view-balance" element={<ViewBalance />} />
>>>>>>> 8cf2bd6fccbde7a0c16c32d8eebb6f9598f50334
      </Routes>
    </BrowserRouter>
  );
}

export default App;
