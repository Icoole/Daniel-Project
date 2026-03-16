import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureSectionProps {
  label: string;
  title: string;
  linkText: string;
  linkHref: string;
  sideTitle: string;
  sideDescription: string;
  sideLinkText: string;
  sideLinkHref: string;
  imageSrc: string;
}

export function FeatureSection({
  label,
  title,
  linkText,
  linkHref,
  sideTitle,
  sideDescription,
  sideLinkText,
  sideLinkHref,
  imageSrc,
}: FeatureSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image with Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt="Feature"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xs">
                <div className="bg-navy p-4 sm:p-6 rounded-lg">
                  <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                    {label}
                  </span>
                  <h3 className="text-white font-bold text-lg sm:text-xl mt-2">
                    {title}
                  </h3>
                  <Link
                    to={linkHref}
                    className="group inline-flex items-center text-white text-sm mt-4 underline underline-offset-4 hover:no-underline"
                  >
                    {linkText}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-navy font-bold text-xl sm:text-2xl">
              {sideTitle}
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {sideDescription}
            </p>
            <Link
              to={sideLinkHref}
              className="group inline-flex items-center text-link font-semibold mt-6 hover:underline"
            >
              {sideLinkText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
