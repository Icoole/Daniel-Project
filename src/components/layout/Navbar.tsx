import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ChevronDown, 
  MapPin, 
  User, 
  Menu, 
  X,
  Search,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainNavItems, secondaryNavItems } from '@/data/navigation';
import { useIsMobile } from '@/hooks/useMediaQuery';

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleMouseEnter = (label: string) => {
    if (!isMobile) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

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
                to="/view-balance" 
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
              
              <Button 
                className="bg-orange hover:bg-orange-dark text-white text-sm font-semibold"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>

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
          <nav className="flex items-center space-x-1">
            {secondaryNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="flex items-center px-4 py-3 text-sm font-semibold text-navy hover:text-link hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.sections && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                      className="absolute left-0 top-full z-50 w-[600px] bg-white shadow-lg rounded-b-lg border border-gray-200"
                    >
                      <div className="p-6 grid grid-cols-3 gap-6">
                        {item.sections.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-navy text-sm mb-3">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    to={subItem.href}
                                    className="text-sm text-gray-600 hover:text-link hover:underline transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Search Icon */}
            <button className="ml-auto p-2 text-navy hover:text-link transition-colors">
              <Search className="h-5 w-5" />
            </button>
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
            <div className="px-4 py-4 space-y-4">
              {/* Main Nav Items */}
              <div className="space-y-2">
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
              </div>
              
              <hr className="border-gray-200" />
              
              {/* Secondary Nav Items */}
              <div className="space-y-2">
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
              </div>
              
              <hr className="border-gray-200" />
              
              <Link 
                to="/view-balance" 
                className="flex items-center py-2 text-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wallet className="h-4 w-4 mr-2" />
                View Balance
              </Link>
              
              <Link 
                to="#" 
                className="flex items-center py-2 text-navy"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Branches & ATMs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
