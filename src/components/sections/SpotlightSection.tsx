import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SpotlightSectionProps {
  label: string;
  headline: string;
  cardLabel: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDescription: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
}

export function SpotlightSection({
  label,
  headline,
  cardLabel,
  cardTitle,
  cardSubtitle,
  cardDescription,
  ctaText,
  ctaHref,
  imageSrc,
}: SpotlightSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-navy text-xs font-semibold tracking-wider uppercase">
            {label}
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-navy mt-2">
            {headline}
          </h2>
        </motion.div>

        {/* Spotlight Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden"
        >
          {/* Background Image */}
          <div className="aspect-[21/9] lg:aspect-[3/1]">
            <img
              src={imageSrc}
              alt={headline}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Card */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-navy p-6 lg:p-8 rounded-lg max-w-sm"
              >
                <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                  {cardLabel}
                </span>
                <h3 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {cardTitle}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{cardSubtitle}</p>
                <p className="text-white text-sm mt-4 leading-relaxed">
                  {cardDescription}
                </p>
                <Link
                  to={ctaHref}
                  className="group inline-flex items-center text-white text-sm mt-4 underline underline-offset-4 hover:no-underline"
                >
                  {ctaText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
