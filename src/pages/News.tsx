import React, { useState } from 'react';
import BackToTop from '../components/ui/BackToTop';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import NewsCard from '../components/ui/NewsCard';
import { newsItems } from '../data/news';

const News: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique categories
  const categories = ['All', ...new Set(newsItems.map(item => item.category))];
  
  // Filter news items
  const filteredNews = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              opacity: 0.3
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
            <p className="text-xl text-neutral-300">
              Restez informé des derniers événements, activités et annonces de la team Enactus ESP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Actualités et Annonces" 
            subtitle="Les derniers événements de nos équipes et projets"
          />
          
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category.toLowerCase() || (filter === 'all' && category === 'All')
                      ? 'bg-enactus-yellow text-neutral-900' 
                      : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <NewsCard key={news.id} news={news} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-500 text-lg">Aucun élément d'actualité trouvé pour cette catégorie.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-enactus-yellow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Restez connectés
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Abonnez-vous à nos différentes plateformes pour recevoir les dernières nouvelles et mises à jour de Enactus ESP..
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Entrez votre email"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 flex-grow max-w-md"
              />
              <button className="px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors font-medium">
                S'inscrire
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <BackToTop />
    </PageTransition>
  );
};

export default News;