import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { EligibilityForm } from '@/components/EligibilityForm';
import { Star, Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const autoLoans = [
  {
    id: 'newcar',
    name: 'New Car Loans',
    tagline: 'Drive away today',
    description: 'Competitive rates on new vehicle loans. Get pre-approved before you shop.',
    apr: '4.99%',
    aprLabel: 'APR',
    features: [
      'Low rates',
      'Quick approval',
      'No fees',
    ],
    highlight: true,
    href: '#',
  },
  {
    id: 'usedcar',
    name: 'Used Car Loans',
    tagline: 'Great rates on pre-owned vehicles',
    description: 'Financing for certified pre-owned and private party vehicles up to 100k miles.',
    apr: '5.49%',
    aprLabel: 'APR',
    features: [
      'Up to 100k miles',
      'Private party financing',
      'Same-day approval',
    ],
    highlight: false,
    href: '#',
  },
  {
    id: 'refinance',
    name: 'Vehicle Refinance',
    tagline: 'Lower your payments',
    description: 'Refinance your existing auto loan and save up to $200/month.',
    apr: '4.29%',
    aprLabel: 'starting APR',
    features: [
      'Save up to $200/month',
      'Fast online application',
      'No application fees',
    ],
    highlight: false,
    href: '#',
  },
];

export function AutoLoans() {
  return (
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
                  #1 Auto Lender
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Auto Loans
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                Low rates. Fast approval. Drive home today.
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
                    Rates as low as 4.49% APR
                  </h2>
                  <p className="text-gray-300 mt-4">
                    Get pre-approved for your next vehicle. Same-day decisions.
                  </p>
                  <EligibilityForm product="Auto Loans" />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=280&fit=crop"
                    alt="Auto Loan"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Loans Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-navy mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our Auto Loan Products
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              className="grid md:grid-cols-3 gap-6"
            >
              {autoLoans.map((loan) => (
                <motion.div
                  key={loan.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${loan.highlight ? 'ring-2 ring-orange ring-offset-2' : ''}`}
                >
                  {loan.highlight && (
                    <span className="inline-block bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-navy text-xl">{loan.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{loan.tagline}</p>
                  
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">{loan.apr}</span>
                    <span className="text-gray-500 text-sm ml-2">{loan.aprLabel}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mt-4">{loan.description}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="link"
                    className="p-0 h-auto text-link font-semibold mt-6 hover:underline"
                    asChild
                  >
                    <EligibilityForm product={`${loan.name}`} />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
  );
}

