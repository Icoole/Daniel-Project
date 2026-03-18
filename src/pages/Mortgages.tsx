import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { EligibilityForm } from '@/components/EligibilityForm';
import { staggerContainer } from '@/lib/animations';

export function Mortgages() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Star className="h-5 w-5 text-orange fill-orange" />
                <span className="text-white text-sm font-semibold">
                  Low Rates Guaranteed
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Mortgages
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                Your home loan journey starts here. Competitive rates for purchase or refinance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                    Featured Offer
                  </span>
                  <h2 className="text-2xl lg:text-4xl font-bold text-white mt-3">
                    100% financing available
                  </h2>
                  <p className="text-gray-300 mt-4">
                    Military Choice Loan for 100% financing with no PMI. Close faster.
                  </p>
                  <EligibilityForm product="Mortgages" />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=280&fit=crop"
                    alt="Mortgage"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl lg:text-3xl font-bold text-navy mb-8"
            >
              Mortgage Options
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Add mortgage product cards */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md">
                <h3 className="font-bold text-navy text-xl mb-2">Military Choice Loan</h3>
                <p className="text-gray-600 mb-4">100% financing, no PMI</p>
                <Link to="#" className="text-link font-semibold">Learn More →</Link>
              </div>
              {/* more cards */}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
