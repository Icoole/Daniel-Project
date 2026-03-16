import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Car, RefreshCw, Calculator, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const loanTypes = [
  {
    id: 'new-used',
    title: 'New and Used Car Loans',
    description: 'Set your wheels in motion! Our auto loans can get you on the road in no time.',
    icon: Car,
    features: [
      'Most decisions in seconds',
      'Preapprovals that are good for 90 days',
      'Exclusive military discount to help you save',
    ],
    cta: 'View purchase details',
    href: '#',
  },
  {
    id: 'refinance',
    title: 'Refinance Car Loans',
    description: 'Refinancing could lower your interest rate, decrease your monthly payment or both.',
    icon: RefreshCw,
    features: [
      'Get $200 when you refinance your loan of $5,000 or more from another lender',
      'Loan terms that work for you',
      '24/7 access to a stateside member rep',
    ],
    cta: 'View refi details',
    href: '#',
  },
];

const benefits = [
  {
    icon: Calculator,
    title: 'Auto Loan Calculator',
    description: 'Estimate your monthly payment based on purchase price, interest rate and more.',
  },
  {
    icon: Shield,
    title: 'Military Discount',
    description: 'Active Duty and retired military members receive exclusive rate discounts.',
  },
];

export function AutoLoans() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Auto Loans
              </h1>
              <div className="mt-6 inline-block bg-white/10 rounded-lg px-6 py-4">
                <p className="text-white text-lg">
                  Auto loan rates as low as{' '}
                  <span className="text-orange font-bold text-2xl">3.89% APR</span>
                  {' '}for new cars
                </p>
              </div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Applying is easy, and you could get a decision in seconds. Plus, 
                we offer a discount for Active Duty and retired military.
              </p>
              <div className="mt-6">
                <Link 
                  to="/membership" 
                  className="text-link hover:underline text-sm"
                >
                  Not a member? Check your eligibility.
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl lg:text-3xl font-bold text-navy mb-8"
            >
              Our great auto loan rates pass inspection. Hit the road with the right rate!
            </motion.h2>
            <p className="text-gray-600 mb-10">
              Whether you&apos;re looking to buy or refinance, we&apos;re here to help.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {loanTypes.map((loan) => (
                <motion.div
                  key={loan.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-lg p-8"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-navy p-3 rounded-lg">
                      <loan.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-navy text-xl">{loan.title}</h3>
                  </div>
                  <p className="text-gray-600">{loan.description}</p>
                  <ul className="mt-4 space-y-2">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={loan.href}
                    className="inline-flex items-center text-link font-semibold mt-6 hover:underline"
                  >
                    {loan.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <benefit.icon className="h-8 w-8 text-navy" />
                    <h3 className="font-semibold text-navy text-lg">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to get started?
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Apply for preapproval in minutes and know your budget before you shop.
              </p>
              <Button 
                className="bg-orange hover:bg-orange-dark text-white font-semibold mt-6"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
