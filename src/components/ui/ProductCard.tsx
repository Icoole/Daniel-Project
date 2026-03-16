import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Car, 
  CreditCard, 
  Home, 
  PiggyBank, 
  Wallet, 
  Building,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Car,
  CreditCard,
  Home,
  PiggyBank,
  Wallet,
  Building,
};

interface ProductCardProps {
  title: string;
  icon: string;
  href: string;
  className?: string;
}

export function ProductCard({ title, icon, href, className }: ProductCardProps) {
  const IconComponent = iconMap[icon] || Car;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to={href}
        className={cn(
          'block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300',
          'p-6 flex flex-col items-center text-center',
          className
        )}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="mb-4"
        >
          <IconComponent className="h-12 w-12 text-navy" strokeWidth={1.5} />
        </motion.div>
        <span className="text-navy font-semibold text-sm">{title}</span>
      </Link>
    </motion.div>
  );
}
