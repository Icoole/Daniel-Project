import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { membershipEligibility } from '@/data/content';

interface MembershipCTAProps {
  imageSrc: string;
}

export function MembershipCTA({ imageSrc }: MembershipCTAProps) {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange text-xs font-semibold tracking-wider uppercase">
              Become a Member
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-navy mt-3">
              Am I eligible for membership?
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              All branches of the military, Veterans, Department of Defense employees 
              and their immediate family members can join our credit union.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button 
                className="bg-orange hover:bg-orange-dark text-white font-semibold"
              >
                Join Today
              </Button>
              <Link
                to="#"
                className="group inline-flex items-center text-link font-semibold hover:underline"
              >
                Check Your Eligibility
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Eligibility Categories */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {membershipEligibility.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-300 pb-2"
                >
                  <span className="text-navy font-semibold text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt="Family membership"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
