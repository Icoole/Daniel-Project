import { motion } from 'framer-motion';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { resourceArticles } from '@/data/content';

export function ArticleGrid() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-navy">
            You can count on us
          </h2>
          <p className="text-gray-600 mt-2">
            We&apos;ve got what it takes to make you a financial phenom
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {resourceArticles.map((article) => (
            <motion.div key={article.id} variants={fadeInUp}>
              <ArticleCard
                title={article.title}
                description={article.description}
                href={article.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
