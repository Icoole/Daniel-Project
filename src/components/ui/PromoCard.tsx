import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PromoCardProps {
  title: string;
  subtitle?: string;
  cta: string;
  href: string;
  bgColor?: string;
  className?: string;
}

export function PromoCard({ 
  title, 
  subtitle, 
  cta, 
  href, 
  bgColor = 'from-navy to-navy-dark',
  className 
}: PromoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn('h-full', className)}
    >
      <Link
        to={href}
        className={cn(
          'block h-full rounded-lg overflow-hidden',
          'bg-gradient-to-br p-6 flex flex-col justify-between',
          bgColor
        )}
      >
        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-300 text-sm mt-2">{subtitle}</p>
          )}
        </div>
        <div className="mt-6">
          <span className="inline-block px-4 py-2 border border-white text-white text-xs font-semibold tracking-wider hover:bg-white hover:text-navy transition-colors duration-200">
            {cta}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
