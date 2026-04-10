import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { EligibilityForm } from '@/components/EligibilityForm';
import { staggerContainer } from '@/lib/animations';

export function Equity() {
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
                  Home Equity Leader
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Home Equity Loans
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                Tap into your home's equity for renovations, debt consolidation or big purchases.
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
                    Fixed rates as low as 7.49% APR
                  </h2>
                  <p className="text-gray-300 mt-4">
                    Home Equity Loans and Lines of Credit with flexible terms up to 20 years.
                  </p>
                  <EligibilityForm product="Home Equity" />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=280&fit=crop"
                    alt="Home Equity"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl lg:text-3xl font-bold text-navy mb-8"
            >
              Equity Products
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid md:grid-cols-2 gap-6"
            >
              {/* equity products cards */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md">
                <h3 className="font-bold text-navy text-xl mb-2">Home Equity Loan</h3>
                <p className="text-gray-600 mb-4">Fixed rate, fixed payments</p>
                <Link to="#" className="text-link font-semibold">Learn More →</Link>
              </div>
              {/* more */}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
