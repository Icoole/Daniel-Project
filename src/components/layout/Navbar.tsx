import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  User, 
  Menu, 
  X,
  Wallet
} from 'lucide-react';
import { mainNavItems, secondaryNavItems } from '@/data/navigation';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6" />
              <span className="font-bold text-lg tracking-wide hidden sm:inline">
                NAVY FEDERAL CREDIT UNION
              </span>
              <span className="font-bold text-lg tracking-wide sm:hidden">
                NFCU
              </span>
            </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-semibold hover:text-orange transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard" 
                className="hidden md:flex items-center text-sm hover:text-orange transition-colors"
              >
                <Wallet className="h-4 w-4 mr-1" />
                View Balance
              </Link>
              
              <Link 
                to="#" 
                className="hidden md:flex items-center text-sm hover:text-orange transition-colors"
              >
                <MapPin className="h-4 w-4 mr-1" />
                Branches & ATMs
              </Link>
              
              <Link to="/login" className="bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors flex items-center">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Desktop */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-8">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-semibold hover:text-orange transition-colors duration-200 px-3 py-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-navy font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-navy"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-gray-200 my-4" />
              <Link 
                to="/dashboard" 
                className="flex items-center py-2 text-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wallet className="h-4 w-4 mr-2" />
                View Balance
              </Link>
              <Link 
                to="/login" 
                className="flex items-center py-2 text-navy font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

