import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ArticleCard({ title, description, href, className }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      <Link to={href} className="block group">
        <h3 className="text-link font-semibold text-base underline underline-offset-2 group-hover:no-underline transition-all">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
