import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AlertBannerProps {
  message: string;
  linkText?: string;
  linkHref?: string;
}

export function AlertBanner({ message, linkText, linkHref }: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-cream border-l-4 border-orange"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">
                  {message}
                  {linkText && linkHref && (
                    <>
                      {' '}
                      <Link 
                        to={linkHref} 
                        className="text-link underline hover:no-underline"
                      >
                        {linkText}
                      </Link>
                    </>
                  )}
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="ml-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close alert"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
