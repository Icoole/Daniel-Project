import { Link } from 'react-router-dom';
import { Globe, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { footerLinks } from '@/data/navigation';

// X (Twitter) Icon Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Contact Info Bar */}
      <div className="border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center">
              <span className="text-gray-300 text-sm">24/7 Member Services:</span>
              <a 
                href="tel:1-888-842-6328" 
                className="ml-2 text-white font-semibold hover:underline"
              >
                1-888-842-6328
              </a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-500" />
            <div className="flex items-center">
              <span className="text-gray-300 text-sm">Routing Number:</span>
              <span className="ml-2 text-white font-semibold">256074974</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Main Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.main.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white text-sm hover:underline transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/NavyFederal/" 
              className="text-white hover:text-orange transition-colors"
              aria-label="Facebook"
              target="_blank" rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-orange transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-orange transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/navyfederal/" 
              className="text-white hover:text-orange transition-colors"
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-orange transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.secondary.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-gray-300 text-sm hover:text-white hover:underline transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-white px-2 py-1 rounded">
              <span className="text-navy text-xs font-bold">NCUA</span>
            </div>
            <span className="text-gray-300 text-sm">
              Navy Federal is insured by NCUA
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="border border-white px-2 py-1 rounded flex items-center">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-1 text-white text-xs font-bold">EHL</span>
            </div>
            <span className="text-gray-300 text-sm">Equal Housing Lender</span>
          </div>
          <span className="text-gray-400 text-sm">
            Equal Opportunity Employer, including disability/vets
          </span>
        </div>

        {/* Legal Text */}
        <div className="mt-8 space-y-4 text-gray-400 text-xs">
          <p>NMLS ID 399807</p>
          <p>
            Navy Federal conducts all member business in English. All origination, servicing, 
            collections, and marketing materials are provided in English only. As a service to 
            members, we will attempt to assist members who have limited English proficiency where 
            possible. Military images are used for representational purposes only; do not imply 
            government endorsement. Terms and conditions are applied to gift cards.
          </p>
          <p>
            APY = Annual Percentage Yield, APR = Annual Percentage Rate
          </p>
          <p>
            +Rates are based on an evaluation of credit history, so your rate may differ
          </p>
          <p>
            *Message and data rates may apply.{' '}
            <Link to="#" className="text-gray-300 hover:text-white underline">
              Terms and Conditions
            </Link>{' '}
            are available.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-navy-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span className="font-bold text-sm tracking-wide">
              NAVY FEDERAL CREDIT UNION
            </span>
          </Link>
          <p className="text-gray-400 text-sm">
            &copy; 2026 Navy Federal Credit Union. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
