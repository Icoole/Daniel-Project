
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, PiggyBank, Landmark, TrendingUp, GraduationCap, Gift, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';


const products = [
  {
    id: 'checking',
    title: 'Checking Accounts & the Navy Federal Debit Card',
    description: 'Checking accounts with great benefits to meet your financial goals.',
    icon: Wallet,
    href: '#',
  },
  {
    id: 'savings',
    title: 'Savings Accounts',
    description: 'Accounts and tools tailored to help you meet your savings goals.',
    icon: PiggyBank,
    href: '#',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    description: 'Start saving today for your future. Explore low-minimum, standard and IRA options.',
    icon: Landmark,
    href: '#',
  },
  {
    id: 'money-market',
    title: 'Money Market Savings Accounts',
    description: 'Explore money market savings accounts (MMSAs) rates and options.',
    icon: TrendingUp,
    href: '#',
  },
  {
    id: 'retirement',
    title: 'Retirement Savings Options',
    description: 'Learn how you can grow your savings through a variety of retirement accounts and plans.',
    icon: Wallet,
    href: '#',
  },
  {
    id: 'education',
    title: 'Education Savings Options',
    description: 'Find the best option to save for your education, from ESAs to certificates.',
    icon: GraduationCap,
    href: '#',
  },
];


export function CheckingSavings() {
  return (
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
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Star className="h-5 w-5 text-orange fill-orange" />
                <span className="text-white text-sm font-semibold">
                  TIME #1 in Checking & Savings 2026
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Checking & Savings
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                Save more money. Stress way less. Find the perfect account for your lifestyle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={product.href}
                    className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow h-full"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <product.icon className="h-8 w-8 text-navy" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy group-hover:text-link transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          {product.description}
                        </p>
                        <span className="inline-flex items-center text-link text-sm font-semibold mt-4 group-hover:underline">
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="h-6 w-6 text-navy" />
                  <h3 className="font-semibold text-navy text-lg">
                    Prepaid & Gift Cards
                  </h3>
                </div>
                <p className="text-gray-600">
                  Find the Navy Federal prepaid or gift card that&apos;s right for you, 
                  your family and as gifts—GO Prepaid and Navy Federal Gift Cards.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-link font-semibold mt-4 hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <PiggyBank className="h-6 w-6 text-navy" />
                  <h3 className="font-semibold text-navy text-lg">
                    How to Open A Savings Account
                  </h3>
                </div>
                <p className="text-gray-600">
                  Understand the benefits of a savings account, the features to look 
                  for and what you need to open an account.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-link font-semibold mt-4 hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

    </main>
  );
}


