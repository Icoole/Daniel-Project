import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export function Business() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-navy via-blue-600 to-orange text-transparent bg-clip-text mb-6">
              Business Banking
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful banking solutions for businesses of all sizes. From startups to enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-navy mb-4">Business Checking</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlimited transactions with no monthly fees. Earn interest on balances over $5,000.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Free incoming wires
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  $0.25 outgoing wires
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  0.25% APY interest
                </li>
              </ul>
              <button className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-navy mb-4">Business Credit Cards</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cash back and rewards designed for business expenses with employee cards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  3% cash back on office supplies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Unlimited employee cards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  No annual fee
                </li>
              </ul>
              <button className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-navy mb-4">Merchant Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Accept card payments with competitive rates and 24/7 support.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  1.9% + 10¢ per transaction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Next day deposits
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Free POS hardware
                </li>
              </ul>
              <button className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Quote
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to grow your business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses banking with Navy Federal. Open an account today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-navy hover:bg-navy-dark text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors">
                Open Business Account
              </button>
              <button className="border-2 border-navy hover:bg-navy hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

