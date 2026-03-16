import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PlatinumPromoProps {
  imageSrc: string;
}

export function PlatinumPromo({ imageSrc }: PlatinumPromoProps) {
  return (
    <section className="py-12 lg:py-16 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-300 text-xs font-semibold tracking-wider uppercase">
              Pay Down Debt
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mt-3 leading-tight">
              Get a low intro APR on balance transfers with Platinum
            </h2>
            <Link
              to="/credit-cards"
              className="group inline-flex items-center text-white font-semibold mt-6 underline underline-offset-4 hover:no-underline"
            >
              Start Saving on Interest Today
            </Link>
          </motion.div>

          {/* Card Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              src={imageSrc}
              alt="Platinum Card"
              className="w-full max-w-md mx-auto lg:ml-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
