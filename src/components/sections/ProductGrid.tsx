import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { productCategories } from '@/data/content';

export function ProductGrid() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <div className="w-1 h-8 bg-orange mr-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-navy">
            How can we help?
          </h2>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {productCategories.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard
                title={product.title}
                icon={product.icon}
                href={product.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
