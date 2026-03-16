import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Award, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const values = [
  {
    title: 'Service',
    description: 'We Serve With Compassion',
    detail: 'Compassionate service goes beyond knowing your name and rank. It\'s understanding and caring about what\'s important to you. That\'s why we\'re truly dedicated to your overall financial well-being.',
    icon: Heart,
  },
  {
    title: 'Integrity',
    description: 'We Put Members First',
    detail: 'As a not-for-profit credit union, we strive to do what\'s right for our membership as a whole. It\'s a matter of integrity and simply the right thing to do.',
    icon: Shield,
  },
  {
    title: 'Community',
    description: 'We Champion Community',
    detail: 'We\'re dedicated to fostering financial health and well-being for the military, veterans, and their families, and to embracing diversity and inclusion in all communities we serve.',
    icon: Users,
  },
];

const stats = [
  { value: '90+', label: 'Years of Service' },
  { value: '13M+', label: 'Members' },
  { value: '$170B+', label: 'Assets' },
  { value: '350+', label: 'Branches Worldwide' },
];

export function About() {
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
                About Navy Federal Credit Union
              </h1>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <Globe className="h-6 w-6 text-orange" />
                <span className="text-white text-xl font-semibold">
                  Our Members Are the Mission
                </span>
                <sup className="text-orange text-sm">&reg;</sup>
              </div>
              <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                As our valued member, you&apos;re at the heart of everything we do, 
                and we strive to do what&apos;s right for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">
                Our Values
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Focusing on values of Service, Integrity and Community supports 
                our mission to make you our top priority.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg p-8 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy rounded-full mb-6">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-xl">{value.title}</h3>
                  <p className="text-orange font-semibold mt-2">{value.description}</p>
                  <p className="text-gray-600 mt-4">{value.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">
                Awards & Recognition
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We&apos;re proud to be recognized for providing our members the very best.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { award: 'TIME', category: '#1 in Credit Cards 2026' },
                { award: 'Forbes', category: 'Best Credit Unions' },
                { award: 'J.D. Power', category: 'Highest in Customer Satisfaction' },
                { award: 'Military Friendly', category: 'Gold Employer' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <Award className="h-8 w-8 text-orange mx-auto mb-4" />
                  <h3 className="font-semibold text-navy">{item.award}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.category}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 lg:py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Our Story
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Founded in 1933, Navy Federal Credit Union has grown from a small 
                  group of Navy employees to one of the largest credit unions in the 
                  world. Throughout our history, we&apos;ve remained committed to serving 
                  those who serve our country.
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Today, we serve over 13 million members worldwide, offering a full 
                  range of financial products and services designed to meet the unique 
                  needs of the military community.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
                  alt="Navy Federal team"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
