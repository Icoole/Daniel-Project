import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function ScrollToTop() {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-navy hover:bg-navy-dark text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
