import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { NewsItem } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'Événements':
        return '#4CAF50';
      case 'Financement':
        return '#2196F3';
      case 'Partenariats':
        return '#9C27B0';
      case 'Projets':
        return '#FF9800';
      default:
        return '#607D8B';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: getCategoryColor(news.category) }}
        >
          {news.category}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-2">
          <div className="flex items-center">
            <CalendarDays size={16} className="mr-1" />
            {formatDate(news.date)}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-neutral-900">{news.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{news.summary}</p>
        <Link 
          to={`/news/${news.id}`}
          className="inline-flex items-center text-enactus-yellow hover:text-amber-600 font-medium transition-colors group"
        >
          Lire la suite 
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;