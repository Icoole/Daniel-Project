import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface HeroSectionProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  badgeText?: string;
}

export function HeroSection({ 
  title, 
  ctaText, 
  ctaHref, 
  imageSrc,
  badgeText 
}: HeroSectionProps) {
  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-white"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {title}
            </motion.h1>
            <motion.div variants={fadeInUp} className="mt-6">
              <Link
                to={ctaHref}
                className="group inline-flex items-center text-white underline underline-offset-4 hover:no-underline transition-all"
              >
                <span className="text-lg">{ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt="Hero"
                className="w-full h-auto object-cover"
              />
              {badgeText && (
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow-lg">
                  <span className="text-navy font-bold text-sm">{badgeText}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
