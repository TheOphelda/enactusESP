import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import { newsItems } from '../data/news';
import { NewsItem } from '../types';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | undefined>(undefined);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  
  useEffect(() => {
    // Find the news item with the matching ID
    const foundNews = newsItems.find(n => n.id === id);
    if (foundNews) {
      setNews(foundNews);
      
      // Get related news (same category, excluding current)
      const related = newsItems
        .filter(n => n.id !== id && n.category === foundNews.category)
        .slice(0, 3);
      setRelatedNews(related);
    }
  }, [id]);

  // If news not found, redirect to news page
  useEffect(() => {
    if (newsItems.length > 0 && !newsItems.some(n => n.id === id)) {
      navigate('/news');
    }
  }, [id, navigate]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (!news) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-center">
          <p className="text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  // Get the background color for the category badge
  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'Events':
        return '#4CAF50';
      case 'Funding':
        return '#2196F3';
      case 'Partnerships':
        return '#9C27B0';
      case 'Projects':
        return '#FF9800';
      default:
        return '#607D8B';
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${news.image}')`,
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <button 
            onClick={() => navigate('/news')}
            className="flex items-center text-white hover:text-enactus-yellow transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to News
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div 
              className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4"
              style={{ backgroundColor: getCategoryColor(news.category) }}
            >
              {news.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center text-neutral-300">
              <Calendar size={18} className="mr-2" />
              {formatDate(news.date)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-neutral-700 mb-6 leading-relaxed">
                {news.summary}
              </p>
              <div className="my-8">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="text-neutral-700 space-y-4">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12 border-t border-b border-neutral-200 py-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-neutral-600">
                  Share this article:
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-neutral-600 hover:text-enactus-yellow transition-colors">Twitter</a>
                  <a href="#" className="text-neutral-600 hover:text-enactus-yellow transition-colors">Facebook</a>
                  <a href="#" className="text-neutral-600 hover:text-enactus-yellow transition-colors">LinkedIn</a>
                  <a href="#" className="text-neutral-600 hover:text-enactus-yellow transition-colors">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader 
              title="Related News" 
              subtitle="You might also be interested in these articles"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {relatedNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: getCategoryColor(item.category) }}
                    >
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-neutral-500 mb-2">
                      {formatDate(item.date)}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">{item.summary}</p>
                    <Link 
                      to={`/news/${item.id}`}
                      className="text-enactus-yellow hover:text-amber-600 font-medium transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
};

export default NewsDetail;