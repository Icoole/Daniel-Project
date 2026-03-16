import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CheckingSavings } from '@/pages/CheckingSavings';
import { CreditCards } from '@/pages/CreditCards';
import { AutoLoans } from '@/pages/AutoLoans';
import { Membership } from '@/pages/Membership';
import { About } from '@/pages/About';
import { ViewBalance } from '@/pages/ViewBalance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checking-savings" element={<CheckingSavings />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/auto-loans" element={<AutoLoans />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/view-balance" element={<ViewBalance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
